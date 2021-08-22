import { Stack, App, StackProps, Duration } from "@aws-cdk/core";
import { Repository, TagMutability } from "@aws-cdk/aws-ecr";

export class RepoStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    var repo = new Repository(this, "Repository", {
      imageTagMutability: TagMutability.IMMUTABLE,
    });

    repo.addLifecycleRule({ maxImageAge: Duration.days(30) });
  }
}
