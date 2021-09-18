import "@aws-cdk/assert/jest";
import { RestApi } from "@aws-cdk/aws-apigateway";
import { App } from "@aws-cdk/core";
import { ApiStack } from "../lib/api-stack";
import { EcrStack } from "../lib/ecr-stack";

test("Stack has a repo", () => {
  const app = new App();
  const apiStack = new ApiStack(app, "ApiStack");
  const stack = new EcrStack(app, "TestStack", {
    route: { path: "test", methods: ["GET"], auth: false },
  });
  expect(stack).toHaveResource("AWS::ECR::Repository");
});
