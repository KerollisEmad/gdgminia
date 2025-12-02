import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { apiGDG } from "../../../../services/api.gdg";
import { motion, AnimatePresence } from "framer-motion";

export default function UploadingDetailsEvent() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Validation Schema
  const validationSchema = Yup.object({
    images: Yup.mixed().required("Event image is required"),
    speaker_cards: Yup.string().required("Speaker card is required"),
    version: Yup.string().required("Version is required"),
    date: Yup.string().required("Date is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description is required"),
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("images", values.images);
      formData.append("speaker_cards", values.speaker_cards);
      formData.append("version", values.version);
      formData.append("date", values.date);
      formData.append("location", values.location);
      formData.append("description", values.description);

      const options = {
        method: "POST",
        url: `/edit_events`,
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const data = await apiGDG.request(options);
      if (data.success) {
        toast.success("Event details uploaded successfully 🎉");
        formik.resetForm();
        setIsLoading(false);
        setIsError(null);
      }
    } catch (error) {
      setIsError(error?.message);
      toast.error(isError);
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      images: null,
      speaker_cards: "",
      version: "",
      date: "",
      location: "",
      description: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center p-6 font-poppins">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold text-center mb-10 
             text-black drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)] tracking-wide"
        >
          Admin Dashboard
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary 
             text-shadow-md mb-8 tracking-wide"
        >
          Event Details
        </motion.h2>

        <form
          className="bg-gray-50 p-8 rounded-xl shadow-xl w-full max-w-2xl space-y-6"
          onSubmit={formik.handleSubmit}
        >
          {/* Upload Image */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-center">
              Upload the Photo of the event speakers.
            </label>

            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="images"
              onChange={(e) =>
                formik.setFieldValue("images", e.target.files[0])
              }
            />

            {formik.errors.images && formik.touched.images && (
              <p className="text-red-500 text-sm p-1">
                *{formik.errors.images}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Speaker Cards */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-center">
                Speaker Cards
              </label>

              <select
                className="form-control"
                name="speaker_cards"
                value={formik.values.speaker_cards}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Speaker Cards</option>
                <option value="First Step">First Step</option>
                <option value="DevFest">DevFest</option>
                <option value="IWD">IWD</option>
              </select>

              {formik.errors.speaker_cards && formik.touched.speaker_cards && (
                <p className="text-red-500 text-sm p-1">
                  *{formik.errors.speaker_cards}
                </p>
              )}
            </div>

            {/* Versions */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-center">
                Select Version
              </label>

              <select
                className="form-control"
                name="version"
                value={formik.values.version}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Choose a version</option>
                <option value="version1">version1</option>
                <option value="version2">version2</option>
                <option value="version3">version3</option>
              </select>

              {formik.errors.version && formik.touched.version && (
                <p className="text-red-500 text-sm p-1">
                  *{formik.errors.version}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Date */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-center">
                Event Date
              </label>

              <input
                type="datetime-local"
                className="form-control"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.date && formik.touched.date && (
                <p className="text-red-500 text-sm p-1">
                  *{formik.errors.date}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-center">
                Location
              </label>

              <input
                type="text"
                className="form-control"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.location && formik.touched.location && (
                <p className="text-red-500 text-sm p-1">
                  *{formik.errors.location}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-center">
              Description
            </label>

            <textarea
              className="form-control"
              rows="4"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>

            {formik.errors.description && formik.touched.description && (
              <p className="text-red-500 text-sm p-1">
                *{formik.errors.description}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {isError && (
            <p className="text-red-500 text-center mt-4">{isError}</p>
          )}
        </form>
      </section>
    </>
  );
}
