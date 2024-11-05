// Import necessary functions
import { getApiData } from "../api/fetch.js";
import {
  renderHtml,
  millisecondsToSeconds,
  searchAndRender,
  debounce,
} from "../utils/utils.js";

async function fetchAndRenderData() {
  const startTime = performance.now(); // Start timer for performance measurement
  const API_PATH = "https://jsonplaceholder.typicode.com/users";

  try {
    const apiResponse = await getApiData(API_PATH); // Fetch API data
    const inputSearcBox = document.getElementById("searchUser");
    // Check if data was retrieved successfully
    if (apiResponse && Array.isArray(apiResponse) && apiResponse.length > 0) {
      apiResponse.forEach(renderHtml); // Render each item
      inputSearcBox.addEventListener(
        "input",
        debounce((e) => {
          let searchText = e.target.value;
          searchAndRender(apiResponse, searchText);
        })
      );
    }
  } catch (error) {
    console.error("Error fetching and rendering data:", error);
  } finally {
    const endTime = performance.now(); // End timer
    const finalTime = endTime - startTime; // Calculate elapsed time
    const roundedValue = millisecondsToSeconds(finalTime); // Convert and round time
    console.log("Time taken to process:", roundedValue); // Log rounded time
  }
}

// Call the function to execute
fetchAndRenderData();
