const { client, createLinkForTable, getEverything } = require("./index");

async function buildTables() {
  try {
    console.log("its working");
    client.connect();

    await client.query(`DROP TABLE IF EXISTS links;`);
    await client.query(
      `
        CREATE TABLE links (
            id SERIAL PRIMARY KEY,
            name varchar(255) UNIQUE NOT NULL,
            url varchar(255) NOT NULL,
            logo varchar(255) NOT NULL
        );
        `
    );
  } catch (error) {
    console.log(error);
  }
}

async function populateInitialData() {
  try {
    console.log("creating links");
    const google = await createLinkForTable({
      name: "Google",
      url: "www.google.com",
      logo: "//logo.clearbit.com/google.com",
    });
    console.log(google);
  } catch (error) {
    console.log(error);
  }
}

buildTables()
  .then(populateInitialData)
  .then(getEverything)
  .catch(console.error)
  .finally(() => client.end());