import axios from "axios";

export async function getAll() {
  try {
    const { data } = await axios.get("/api");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
