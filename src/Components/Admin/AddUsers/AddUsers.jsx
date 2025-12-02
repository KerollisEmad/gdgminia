import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { apiGDG } from "../../../../services/api.gdg";
import UsersDisplayList from "../UsersDisplayList/UsersDisplayList";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
    
export default function AddUsers() {
   
  
  const [isError, setIsError] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    role: Yup.string()
      .oneOf(["admin", "media"], "Role must be either admin or media")
      .required("Role is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      role: "",
    },
    validationSchema,
    onSubmit,
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const options = {
        method: "POST",
        url: `/add_user`,
        data: {
          username: values.username,
          password: values.password,
          role: values.role,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const  data  = await apiGDG.request(options);
      formik.resetForm();
      setUsers(prev => [...prev, data.newUser]);
      Swal.fire({
      title: "User added successfully!",
      icon: "success",
      draggable: true
    });
    // window.location.reload();
    setIsLoading(false);
    } catch (error) {
      setIsError(error?.message || "Something went wrong");
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="min-h-screen shadow-sm py-16 px-8 flex flex-col items-center justify-center bg-gray-50 font-poppins">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-shadow-md  text-primary mb-8">
          Add Users
        </h2>

        <form
          className="bg-white p-12 rounded-xl shadow w-full max-w-7xl space-y-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid md:grid-cols-11 gap-2">
            {/* //^ Username */}
            <div className="col-span-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="form-control "
              />
              {formik.errors.username && formik.touched.username ? (
                <p className="text-red-500 text-sm">{formik.errors.username}</p>
              ) : null}
            </div>
            {/*//^  Password */}
            <div className="col-span-4">
              <input
                type="password"
                placeholder="Password"
                className="form-control "
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              ) : null}
            </div>
            {/* //^ Role Select */}
            <div className="col-span-2">
              {" "}
              <select
                className="form-control"
                name="role"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.role}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="media">Media</option>
              </select>
              {formik.errors.role && formik.touched.role ? (
                <p className="text-red-500 text-sm">{formik.errors.role}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn-primary col-span-2 md:col-span-1 h-fit cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>

        {/* //!~ USERS LIST BELOW */}
        <div className="container mt-10 bg-gray-100 md:p-20 p-5 max-sm:text-center  rounded-xl  shadow-inner w-full max-w-7xl">
          <UsersDisplayList />
        </div>
      </div>
    </>
  );
}
