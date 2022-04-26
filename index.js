const core = require("@actions/core");
const github = require("@actions/github");

const getState = (payload) => {
  const { review: { state = "" } = {} } = payload;
  if (state) return state;

  const { action = "", pull_request: { merged = false } = {} } = payload;
  switch (action) {
    case "closed":
      return merged ? "approved" : "closed";
    default:
      return action;
  }
};

const { context: { payload = {} } = {} } = github;
const { pull_request: { number: pr_number } = {} } = payload;

try {
  /**
   * We need to fetch all the inputs that were provided to our action
   * and store them in variables for us to use.
   **/
  const owner = core.getInput("owner", { required: true });
  const repo = core.getInput("repo", { required: true });
  const token = core.getInput("token", { required: true });

  console.log(`${owner}/${repo} (#${pr_number}) [${token}]`);

  const state = getState(payload);
  console.log(`state: ${state}`);
  core.setOutput("state", state);

  console.log(`payload: ${JSON.stringify(payload, 0, 1)}`);
} catch (error) {
  core.setFailed(error.message);
}
