import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { apiGDG } from "../../../../services/api.gdg";

export default function UploadingLinkesCommitte() {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    hr_commitee: Yup.boolean(),
    link_hr: Yup.string()
      .url("Invalid URL format")
      .when("hr_commitee", {
        is: true,
        then: (schema) => schema.required("Link HR is required"),
        otherwise: (schema) => schema,
      })
      .test(
        "link-requires-checkbox",
        "You must check HR if you enter a link",
        function (value) {
          const { hr_commitee } = this.parent;
          if (value && !hr_commitee) return false;
          return true;
        }
      ),
    Technical_commitee: Yup.boolean(),
    link_Technical: Yup.string()
      .url("Invalid URL format")
      .when("Technical_commitee", {
        is: true,
        then: (schema) => schema.required("Link Technical is required"),
        otherwise: (schema) => schema,
      }),
    media_commitee: Yup.boolean(),
    link_media: Yup.string()
      .url("Invalid URL format")
      .when("media_commitee", {
        is: true,
        then: (schema) => schema.required("Link Media is required"),
        otherwise: (schema) => schema,
      }),
    pr_commitee: Yup.boolean(),
    link_pr: Yup.string()
      .url("Invalid URL format")
      .when("pr_commitee", {
        is: true,
        then: (schema) => schema.required("Link PR is required"),
        otherwise: (schema) => schema,
      }),
    Logistics_commitee: Yup.boolean(),
    link_Logistics: Yup.string()
      .url("Invalid URL format")
      .when("Logistics_commitee", {
        is: true,
        then: (schema) => schema.required("Link Logistics is required"),
        otherwise: (schema) => schema,
      }),
  });

  const formik = useFormik({
    initialValues: {
      hr_commitee: false,
      link_hr: "",
      Technical_commitee: false,
      link_Technical: "",
      media_commitee: false,
      link_media: "",
      pr_commitee: false,
      link_pr: "",
      Logistics_commitee: false,
      link_Logistics: "",
    },
    validationSchema,
    onSubmit,
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const options = {
        method: "POST",
        url: `/edit_commitee`,
        data: {
          hr_commitee: values.hr_commitee,
          link_hr: values.link_hr,
          Technical_commitee: values.Technical_commitee,
          link_Technical: values.link_Technical,
          media_commitee: values.media_commitee,
          link_media: values.link_media,
          pr_commitee: values.pr_commitee,
          link_pr: values.link_pr,
          Logistics_commitee: values.Logistics_commitee,
          link_Logistics: values.link_Logistics,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data  = await apiGDG.request(options);
      toast.success("Committee links updated successfully 🎉");
      formik.resetForm();
      setIsLoading(false);
      setIsError(null);
    } catch (error) {
      setIsError(error?.data?.message || "Something went wrong");
      toast.error(error?.data?.message || "Something went wrong");
      setIsLoading(false);
    }
  }

  // دالة مساعدة للتعامل مع checkbox واللينك
  const handleCheckboxChange = (e, checkboxName, linkName) => {
    formik.handleChange(e);

    if (e.target.checked) {
      formik.setFieldTouched(linkName, true, true);
      formik.validateField(linkName);
    } else {
      formik.setFieldValue(linkName, "");
      formik.setFieldError(linkName, "");
      formik.setFieldTouched(linkName, false);
    }
  };

  return (
    <section className="min-h-screen shadow-sm flex flex-col items-center justify-center p-6 bg-gray-50 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-shadow-md text-primary mb-8">
        Committee
      </h2>
      <form
        className="bg-white p-12 rounded-xl shadow-2xl w-full max-w-4xl space-y-6"
        onSubmit={formik.handleSubmit}
      >
        {/* HR */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold w-24">HR</h3>
          <input
            type="checkbox"
            name="hr_commitee"
            className="h-5 w-5"
            onBlur={formik.handleBlur}
            checked={formik.values.hr_commitee}
            onChange={(e) => handleCheckboxChange(e, "hr_commitee", "link_hr")}
          />
          <input
            type="text"
            placeholder="Link Form..."
            className="form-control p-2 flex-1"
            name="link_hr"
            onBlur={formik.handleBlur}
            value={formik.values.link_hr}
            onChange={formik.handleChange}
          />
          {formik.touched.link_hr && formik.errors.link_hr && (
            <p className="text-red-600">{formik.errors.link_hr}</p>
          )}
        </div>

        {/* Media */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold w-24">Media</h3>
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={formik.values.media_commitee}
            name="media_commitee"
            onChange={(e) => handleCheckboxChange(e, "media_commitee", "link_media")}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            placeholder="Link Form..."
            className="form-control p-2 flex-1"
            name="link_media"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link_media}
          />
          {formik.touched.link_media && formik.errors.link_media && (
            <p className="text-red-600">{formik.errors.link_media}</p>
          )}
        </div>

        {/* PR */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold w-24">PR</h3>
          <input
            type="checkbox"
            checked={formik.values.pr_commitee}
            name="pr_commitee"
            onChange={(e) => handleCheckboxChange(e, "pr_commitee", "link_pr")}
            onBlur={formik.handleBlur}
            className="h-5 w-5"
          />
          <input
            type="text"
            placeholder="Link Form..."
            className="form-control p-2 flex-1"
            name="link_pr"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link_pr}
          />
          {formik.touched.link_pr && formik.errors.link_pr && (
            <p className="text-red-600">{formik.errors.link_pr}</p>
          )}
        </div>

        {/* Technical */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold w-24">Technical</h3>
          <input
            type="checkbox"
            checked={formik.values.Technical_commitee}
            name="Technical_commitee"
            onChange={(e) => handleCheckboxChange(e, "Technical_commitee", "link_Technical")}
            onBlur={formik.handleBlur}
            className="h-5 w-5"
          />
          <input
            type="text"
            placeholder="Link Form..."
            className="form-control p-2 flex-1"
            name="link_Technical"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link_Technical}
          />
          {formik.touched.link_Technical && formik.errors.link_Technical && (
            <p className="text-red-600">{formik.errors.link_Technical}</p>
          )}
        </div>

        {/* Logistics */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold w-24">Logistics</h3>
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={formik.values.Logistics_commitee}
            name="Logistics_commitee"
            onChange={(e) => handleCheckboxChange(e, "Logistics_commitee", "link_Logistics")}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            placeholder="Link Form..."
            className="form-control p-2 flex-1"
            name="link_Logistics"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link_Logistics}
          />
          {formik.touched.link_Logistics && formik.errors.link_Logistics && (
            <p className="text-red-600">{formik.errors.link_Logistics}</p>
          )}
        </div>

        <button type="submit" className="btn-primary disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
