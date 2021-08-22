import "@aws-cdk/assert/jest";
import { App } from "@aws-cdk/core";
import { RepoStack } from "../lib/repo-stack";

test("Stack has a repo", () => {
  const app = new App();
  const stack = new RepoStack(app, "TestRepoStack");
  expect(stack).toHaveResource("AWS::ECR::Repository");
});
