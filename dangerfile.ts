import { danger, warn } from "danger";
import { includes } from "lodash";
import spellcheck from "danger-plugin-spellcheck";

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn("A PR description is helpful for reviewers, eg: test cases to consider. 🤓");
}

// Request changes to src also include changes to tests.
const allFiles = danger.git.modified_files.concat(danger.git.created_files);
const hasLibChanges = allFiles.some(p => includes(p, "src/"));
const hasTestChanges = allFiles.some(p => includes(p, "__tests__/"));
const hasExampleChanges = allFiles.some(p => includes(p, "example/"));

if (hasLibChanges && !hasTestChanges) {
  warn(
    "Thank you for the PR 🙌🏽 There're library changes, but no tests 😱"
  );
}

if (hasLibChanges && !hasExampleChanges) {
  warn(
    "Updating the example app helps demonstrate new features to users 🧐"
  );
}

// Check if package-lock was updated
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('package-lock.json');

if (packageChanged && !lockfileChanged) {
  warn(
    "Updatess were made to package.json, but not to package-lock.json - <i>Need to run `npm install`</i>"
    );
}

// Perform a spell check
spellcheck()