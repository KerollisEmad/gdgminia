import { apiGDG } from "./api.gdg";

export async function deleteUsersList(username,id) {
  try {
    const options = {
      method: "POST",
      url: `/delete_user`,
      data: {
         username,
        id,
      },
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const  data  = await apiGDG.request(options);
    // console.log(data);
  } catch (error) {
    throw error;
  }
}
