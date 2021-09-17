import "@aws-cdk/assert/jest";
import { RestApi } from "@aws-cdk/aws-apigateway";
import { App } from "@aws-cdk/core";
import { ApiStack } from "../lib/api-stack";
import { RouteStack } from "../lib/route-stack";

test("Stack has a repo", () => {
  const app = new App();
  const apiStack = new ApiStack(app, "ApiStack");
  const stack = new RouteStack(app, "TestRoutStack", {
    route: { path: "test", methods: ["GET"], auth: false },
    api: apiStack.api,
  });
  expect(stack).toHaveResource("AWS::ECR::Repository");
});
