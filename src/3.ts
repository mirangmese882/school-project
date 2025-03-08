import { get } from "axios";

async function fetchData() {
  try {
    const response = await get("https://api.example.com");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
