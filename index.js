// github api
// octokit
const { Octokit } = require("octokit");
const core = require("@actions/core");
const dayjs = require("dayjs");

const token = core.getInput("token");
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: token });

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
octokit.rest.issues.create({
  owner: "Befend",
  repo: "create actions",
  title: getTitle(),
  body: getBody()
});


function getTitle() {
  return dayjs().format("YYYY-MM-DD");
}

function getBody() {
  return "[Github Docs](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)";
}