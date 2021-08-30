import { Stack, App, StackProps } from "@aws-cdk/core";
import { AuthorizationType, Cors, RestApi } from "@aws-cdk/aws-apigateway";

export class ApiStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "DiplomacyApi", {
      restApiName: "Diplomacy Service",
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
      },
    });
  }
}
