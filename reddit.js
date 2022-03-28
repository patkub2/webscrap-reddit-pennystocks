const puppeteer = require("puppeteer");

const SUBREDDIT_URL = (reddit) => "https://old.reddit.com/r/" + reddit + "/";
const self = {
  browser: null,
  pages: null,
  initialize: async (reddit) => {
    self.browser = await puppeteer.launch();
    self.page = await self.browser.newPage();

    await self.page.goto(SUBREDDIT_URL(reddit), { waitUntil: "networkidle0" });
  },
};
