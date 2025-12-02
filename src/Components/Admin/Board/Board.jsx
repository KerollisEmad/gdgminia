import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { apiGDG } from "../../../../services/api.gdg";

export default function Board() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      department: "",
      images: null,
    },
    validationSchema: Yup.object({
      images: Yup.mixed().required("Image is required"),
      department: Yup.string().required("You must select a department"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("department", values.department);
        formData.append("images", values.images);
        const options = {
          method: "POST",
          url: `/bord-data`,
          data: formData, 
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };

        const data = await apiGDG.request(options);
        toast.success("Board data uploaded successfully 🎉");
        formik.resetForm();
        setIsError(null);
        setIsLoading(false);
      } catch (err) {
        setIsError(err.message);
        toast.error(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <section className="py-20 bg-gray-50/50 shadow-sm flex flex-col items-center p-6 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-shadow-md mb-10">
        Board
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-gray-50 p-8 rounded-xl shadow-xl w-full max-w-xl space-y-6"
      >
        {/*//^ Department select */}
        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-700">
            Select Department
          </label>

          <select
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
          >
            <option value="">Choose...</option>

            <option value="Technical">Technical</option>
            <option value="President">President</option>
            <option value="Vice 1">Vice 1</option>
            <option value="Vice 2">Vice 2</option>
            <option value="Hr">Hr</option>
            <option value="Pr">Pr</option>
            <option value="Logistic">Logistic</option>
            <option value="Media">Media</option>
          </select>

          {formik.errors.department && formik.touched.department && (
            <p className="text-red-500">{formik.errors.department}</p>
          )}
        </div>

        {/*//^ Images upload */}
        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            accept="images/*"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
            onChange={(e) => formik.setFieldValue("images", e.target.files[0])}
          />
          {formik.errors.images && formik.touched.images && (
            <p className="text-red-500">{formik.errors.images}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary w-full py-3 rounded-xl text-white font-semibold disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload Board Data"}
          
        </button>

        {isError && <p className="text-red-500 text-center">{isError}</p>}
      </form>
    </section>
  );
}
