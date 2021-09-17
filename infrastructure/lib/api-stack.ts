import { Stack, App, StackProps } from "@aws-cdk/core";
import { AuthorizationType, Cors, RestApi } from "@aws-cdk/aws-apigateway";

export class ApiStack extends Stack {
  api: RestApi;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    this.api = new RestApi(this, "DiplomacyApi", {
      restApiName: "Diplomacy Service",
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
      },
    });
  }
}
