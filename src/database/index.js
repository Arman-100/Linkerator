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

async function createTagsForTable(tagList) {
  if (tagList.length === 0) {
    return;
  }

  const insertValues = tagList.map((_, index) => `$${index + 1}`).join("), (");
  const selectValues = tagList.map((_, index) => `$${index + 1}`).join(", ");

  try {
    await client.query(
      `
    INSERT INTO tags(name)
    VALUES (${insertValues})
    ON CONFLICT (name) DO NOTHING;
    `,
      tagList
    );

    const { rows } = await client.query(
      `
    SELECT * FROM tags
    WHERE name IN (${selectValues});
    `,
      tagList
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getEverything,
  createLinkForTable,
  createTagsForTable,
};

//mongo stuff below

// const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/test";

// async function connectMongoose() {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(url, { useNewUrlParser: true });
//     const db = mongoose.connection;
//     db.on("connect", () => {
//       console.log("i connected");
//       resolve("Done connecting");
//     });
//     db.on("error", (error) => {
//       console.error("Did not connect");
//       reject(error);
//     });
//   });
// }

// module.exports = { connectMongoose };
