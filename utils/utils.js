// Renders an item's name in the specified HTML element.
export function renderHtml(user) {
  const app = document.getElementById("app");

  // Use textContent for better security (avoids XSS)
  const divElement = document.createElement("li");
  // divElement.textContent = user.name + "\n" + user.email + "\n" + user.website;

  divElement.textContent = user.name;
  app.appendChild(divElement);
}

// Converts milliseconds to seconds and rounds to the specified decimal places.
export function millisecondsToSeconds(ms, decimalPlaces = 2) {
  return parseFloat((ms / 1000).toFixed(decimalPlaces)); // Use toFixed for rounding
}

// Function to handle search and render results
export function searchAndRender(apiResponse, searchText) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear previous results

  const filterResult = apiResponse.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (filterResult.length > 0) {
    filterResult.forEach(renderHtml);
  } else {
    app.innerHTML = "<p>No results found</p>";
  }
}

// Debounce function to limit how often search executes
export function debounce(func, delay = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
