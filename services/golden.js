import { apiGDG } from "./api.gdg";

export async function getGoldenDetails() {
  try {
    const options = {
      method: "GET",
      url: `/get_golden_members`,
    };
    const response = await apiGDG.request(options);
    return response;
  } catch (error) { 
    throw error;
  }
}
