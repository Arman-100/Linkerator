const { Client } = require("pg");
const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost:5432/links-dev"
);

async function getEverything() {
  const { rows } = await client.query(`SELECT * FROM links;`);
  return rows;
}

async function createLinkForTable({ name, url, logo }) {
  try {
    const {
      rows: [links],
    } = await client.query(
      `
            INSERT INTO links(name, url, logo)
            VALUES ($1, $2, $3)
            ON CONFLICT (name) DO NOTHING
            RETURNING *;
            `,
      [name, url, logo]
    );
    return links;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  client,
  getEverything,
  createLinkForTable,
};
