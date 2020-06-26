const {
  client,
  createLinkForTable,
  getEverything,
  createTagsForTable,
} = require("./index");

async function buildTables() {
  try {
    console.log("its working");
    client.connect();

    await client.query(`
    DROP TABLE IF EXISTS taglinks;
    DROP TABLE IF EXISTS tags;
    DROP TABLE IF EXISTS links;`);
    await client.query(
      `
        CREATE TABLE links (
            id SERIAL PRIMARY KEY,
            name varchar(255) UNIQUE NOT NULL,
            url varchar(255) NOT NULL,
            logo varchar(255) NOT NULL
        );

        CREATE TABLE tags (
          id SERIAL PRIMARY KEY,
          name varchar(255) UNIQUE NOT NULL
        );

        CREATE TABLE tagLinks (
          id SERIAL PRIMARY KEY,
          "linksId" INTEGER REFERENCES links(id),
          "tagsId" INTEGER REFERENCES tags(id)
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
    const reddit = await createLinkForTable({
      name: "Reddit",
      url: "https://www.reddit.com/",
      logo: "//logo.clearbit.com/reddit.com",
    });
    const espn = await createLinkForTable({
      name: "ESPN",
      url: "https://www.espn.com/",
      logo: "//logo.clearbit.com/espn.com",
    });
    const amazon = await createLinkForTable({
      name: "Amazon",
      url: "https://amazon.com/",
      logo: "//logo.clearbit.com/amazon.com",
    });
    const googleTags = await createTagsForTable([
      "search",
      "engine",
      "popular",
    ]);
    console.log(googleTags);
  } catch (error) {
    console.log(error);
  }
}

buildTables()
  .then(populateInitialData)
  .then(getEverything)
  .catch(console.error)
  .finally(() => client.end());
