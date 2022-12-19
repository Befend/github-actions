// github api
// octokit
const { Octokit } = require("octokit");
const core = require("@actions/core");
const token = core.getInput("token");
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: token });

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello world from " + slug,
});
