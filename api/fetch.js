// Fetches API data and returns the parsed JSON response or logs an error.
export async function getApiData(path) {
  try {
    const response = await fetch(path);

    // Check if the response is okay (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getApiData error:", error);
    return null; // Return null on error for better error handling
  }
}
