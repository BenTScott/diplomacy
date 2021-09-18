import { Stack, App, StackProps, Duration, RemovalPolicy } from "@aws-cdk/core";
import { Repository, TagMutability } from "@aws-cdk/aws-ecr";
import { LambdaIntegration, RestApi } from "@aws-cdk/aws-apigateway";
import { Table } from "@aws-cdk/aws-dynamodb";
import {
  DockerImageCode,
  DockerImageFunction,
  Function,
} from "@aws-cdk/aws-lambda";
import { IRoute } from "./route-stack";

export interface IEcrStackProps extends StackProps {
  route: IRoute;
}

export class EcrStack extends Stack {
  repo: Repository;

  constructor(scope: App, id: string, props: IEcrStackProps) {
    super(scope, id, props);

    this.repo = new Repository(this, "Repository", {
      repositoryName: `diplomacy_${props.route.path}`,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.repo.addLifecycleRule({ maxImageAge: Duration.days(30) });
  }
}
