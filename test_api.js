const fetch = global.fetch || require("node-fetch");

const BASE = "http://localhost:3000";

async function run() {
  const ts = Date.now();
  const email = `test+${ts}@example.com`;
  const username = `testuser${ts}`;
  const password = "Passw0rd!";

  console.log("Registering:", email, username);
  let res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  console.log("Register status", res.status);
  console.log(await res.text());

  console.log("\nLogging in...");
  res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  console.log("Login status", res.status);
  const loginJson = await res.json().catch(() => null);
  console.log("Login body", loginJson);

  const token = loginJson && loginJson.token;
  if (!token) {
    console.error("No token, aborting protected request.");
    process.exit(1);
  }

  console.log("\nFetching /users/me");
  res = await fetch(`${BASE}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("Protected status", res.status);
  console.log(await res.text());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
