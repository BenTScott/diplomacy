import { Stack, App, StackProps, Duration, RemovalPolicy } from "@aws-cdk/core";
import { Repository, TagMutability } from "@aws-cdk/aws-ecr";
import { LambdaIntegration, RestApi } from "@aws-cdk/aws-apigateway";
import { Table } from "@aws-cdk/aws-dynamodb";
import {
  DockerImageCode,
  DockerImageFunction,
  Function,
} from "@aws-cdk/aws-lambda";

export interface IRoute {
  path: string;
  methods: string[];
  auth: boolean;
}

export interface IRouteStackProps extends StackProps {
  route: IRoute;
  api: RestApi;
  repository: Repository;
  table?: Table;
}

export class RouteStack extends Stack {
  constructor(scope: App, id: string, props: IRouteStackProps) {
    super(scope, id, props);

    const resource = props.api.root.addResource(props.route.path);

    const handler = new DockerImageFunction(this, `${id}Function`, {
      functionName: `${props.route.path}Function`,
      code: DockerImageCode.fromEcr(props.repository),
      environment: {
        TABLE_NAME: props?.table?.tableName ?? "",
      },
    });

    if (props.table) {
      props.table.grantFullAccess(handler);
    }

    const proxy = resource.addProxy({
      defaultIntegration: new LambdaIntegration(handler),
      anyMethod: !props.route.auth,
    });

    if (props.route.auth) {
      // TODO
    }
  }
}
