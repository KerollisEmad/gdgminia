import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { apiGDG } from "../../../../services/api.gdg";

export default function UploadingDetailsGoldenMember() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    college: Yup.string().required("College is required"),
    year: Yup.number()
      .typeError("Year must be a number")
      .required("Study year is required"),
    committee: Yup.string().required("Committee is required"),
    images: Yup.mixed().required("Image is required"),
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("college", values.college);
      formData.append("year", values.year);
      formData.append("committee", values.committee);
      formData.append("images", values.images);

      const options = {
        method: "POST",
        url: `/edit_golden_members`,
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const data = await apiGDG.request(options);
      if (data.success) {
        toast.success("Golden member data uploaded successfully 🎉");
        setIsLoading(false);
        setIsError(null);
        formik.resetForm();
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(error?.message);
      toast.error(error?.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      college: "",
      year: "",
      committee: "",
      images: null,
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <section className="min-h-screen bg-gray-50 shadow-sm flex flex-col items-center justify-center p-4 font-poppins">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-shadow-md  text-center mb-8">
          Golden Member Details
        </h2>

        <form
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl"
          onSubmit={formik.handleSubmit}
        >
          {/* //^ Upload Image */}
          <div className="mb-6">
            <label
              className="block mb-2 font-semibold text-gray-700 text-center"
              htmlFor="images"
            >
              Upload Image Golden Member
            </label>

            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="images"
              name="images"
              onChange={(e) =>
                formik.setFieldValue("images", e.target.files[0])
              }
            />

            {formik.errors.images && formik.touched.images ? (
              <p className="text-red-500 text-sm p-1">
                *{formik.errors.images}
              </p>
            ) : null}
          </div>

          {/* //^ Name */}
          <div className="mb-6">
            <label
              className="block mb-2 font-semibold text-gray-700 text-center"
              htmlFor="name"
            >
              Name Golden Member
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.name && formik.touched.name ? (
              <p className="text-red-500 text-sm p-1">*{formik.errors.name}</p>
            ) : null}
          </div>

          {/* //^ Committee */}
          <div className="mb-6">
            <label
              className="block mb-2 font-semibold text-gray-700 text-center"
              htmlFor="committee"
            >
              Committee Name
            </label>

            <select
              name="committee"
              id="committee"
              className="form-control p-2 rounded"
              value={formik.values.committee}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Committee</option>
              <option value="Technical">Technical</option>
              <option value="Media">Media</option>
              <option value="Logistics">Logistics</option>
              <option value="HR">HR</option>
              <option value="PR">PR</option>
            </select>

            {formik.errors.committee && formik.touched.committee ? (
              <p className="text-red-500 text-sm p-1">
                *{formik.errors.committee}
              </p>
            ) : null}
          </div>

          {/* //^ College */}
          <div className="mb-6">
            <label
              className="block mb-2 font-semibold text-gray-700 text-center"
              htmlFor="college"
            >
              College Name
            </label>

            <input
              type="text"
              className="form-control"
              id="college"
              name="college"
              value={formik.values.college}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.college && formik.touched.college ? (
              <p className="text-red-500 text-sm p-1">
                *{formik.errors.college}
              </p>
            ) : null}
          </div>

          {/* //^ Study Year */}
          <div className="mb-6">
            <label
              className="block mb-2 font-semibold text-gray-700 text-center"
              htmlFor="year"
            >
              Study Year
            </label>

            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.year && formik.touched.year ? (
              <p className="text-red-500 text-sm p-1">*{formik.errors.year}</p>
            ) : null}
          </div>

          {/* //^ Submit */}
          <button
            type="submit"
            className="btn-primary disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {isError ? (
            <p className="text-red-500 text-center mt-4">{isError}</p>
          ) : null}
        </form>
      </section>
    </>
  );
}
