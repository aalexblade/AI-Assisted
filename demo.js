// function to calculate the area of a circle
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

// function to validate an email address using regex
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// helper: fetch with timeout using AbortController
async function timeoutFetch(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const resp = await fetch(url, { ...options, signal: controller.signal });
    return resp;
  } finally {
    clearTimeout(id);
  }
}

// fetch data with async/await and 5s timeout (default)
async function fetchData(url, timeout = 5000) {
  try {
    const response = await timeoutFetch(url, {}, timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Error fetching data: request timed out");
    } else {
      console.error("Error fetching data:", error);
    }
    throw error;
  }
}

// fetchUser -> async version returning parsed JSON
// Accepts either a full URL as `userIdOrUrl` or a userId with `baseUrl` option.
async function fetchUser(userIdOrUrl, { baseUrl = "", timeout = 5000 } = {}) {
  const url = baseUrl
    ? `${baseUrl.replace(/\/$/, "")}/${userIdOrUrl}`
    : userIdOrUrl;
  try {
    const response = await timeoutFetch(url, {}, timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") throw new Error("Request timed out");
    throw error;
  }
}

// Backward-compatible callback wrapper (optional)
function fetchUserCallback(userIdOrUrl, callback, opts) {
  fetchUser(userIdOrUrl, opts)
    .then((data) => callback(null, data))
    .catch((err) => callback(err, null));
}
