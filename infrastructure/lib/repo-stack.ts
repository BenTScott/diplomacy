import { Stack, App, StackProps, Duration, RemovalPolicy } from "@aws-cdk/core";
import { Repository, TagMutability } from "@aws-cdk/aws-ecr";

export class RepoStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    var repo = new Repository(this, "Repository", {
      repositoryName: "diplomacy",
      removalPolicy: RemovalPolicy.DESTROY,
    });

    repo.addLifecycleRule({ maxImageAge: Duration.days(30) });
  }
}
