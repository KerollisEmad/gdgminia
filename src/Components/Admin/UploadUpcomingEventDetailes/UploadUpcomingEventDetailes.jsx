import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { apiGDG } from "../../../../services/api.gdg";

export default function UploadUpcomingEventDetailes() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Date is required"),
    description: Yup.string().required("Description is required"),
    type: Yup.string().required("Type is required"),
    link: Yup.string().required("Link is required"),
    images: Yup.mixed().required("Image is required"),
    location: Yup.string().required("Location is required"),
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("images", values.images);
      formData.append("title", values.title);
      formData.append("date", values.date);
      formData.append("description", values.description);
      formData.append("type", values.type);
      formData.append("link", values.link);
      formData.append("location", values.location);

      const options = {
        method: "POST",
        url: `/edit_coming_event`,
        data:formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const data = await apiGDG.request(options);

      if (data.success) {
        toast.success("Upcoming event uploaded successfully 🎉");
        formik.resetForm();
        setIsLoading(false);
        setIsError(null);
      }
    } catch (error) {
      setIsError(error?.message);
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      description: "",
      type: "",
      link: "",
      images: null,
      location: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <section className="min-h-screen shadow-sm flex flex-col items-center justify-center p-6 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary text-shadow-md mb-8">
        Upcoming Event
      </h2>

      <form
        className="bg-gray-50 p-12 rounded-xl shadow-2xl w-full max-w-3xl space-y-4"
        onSubmit={formik.handleSubmit}
      >
        {/* //^ Image Upload */}
        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-700">
            Image Upcoming Event!
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
            onChange={(e) => formik.setFieldValue("images", e.target.files[0])}
          />
          {formik.errors.images && formik.touched.images && (
            <p className="text-red-500">{formik.errors.images}</p>
          )}
        </div>

        {/* //^ Title & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
              placeholder="Enter event title"
            />
            {formik.errors.title && formik.touched.title && (
              <p className="text-red-500">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Date</label>
            <input
              type="datetime-local"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
            />
            {formik.errors.date && formik.touched.date && (
              <p className="text-red-500">{formik.errors.date}</p>
            )}
          </div>
        </div>

        {/* //^ Link & Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Learn More Button Link
            </label>
            <input
              type="text"
              name="link"
              value={formik.values.link}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
              placeholder="Enter button link"
            />
            {formik.errors.link && formik.touched.link && (
              <p className="text-red-500">{formik.errors.link}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Role Select</label>
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control col-span-2"
            >
              <option value="">Select Role</option>
              <option value="event">Event</option>
              <option value="other">Other</option>
            </select>
            {formik.errors.type && formik.touched.type && (
              <p className="text-red-500">{formik.errors.type}</p>
            )}
          </div>
        </div>

        {/* //^ location */}
         <div>
            <label className="block mb-2 font-semibold text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
            />
            {formik.errors.location && formik.touched.location && (
              <p className="text-red-500">{formik.errors.location}</p>
            )}
          </div>
        {/* //^ Description */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-primary"
            placeholder="Enter event description"
          ></textarea>
          {formik.errors.description && formik.touched.description && (
            <p className="text-red-500">{formik.errors.description}</p>
          )}
        </div>

        {/* //^ Submit */}
        <div className="flex justify-center">
          <button type="submit" className="btn-primary disabled:cursor-not-allowed"
           disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {isError && <p className="text-red-500 text-center mt-4">{isError}</p>}
      </form>
    </section>
  );
}
