import { Chart } from "cdk8s";
import { Container, Deployment, Pod, Service, ServiceType } from "cdk8s-plus";
import { Construct } from "constructs";

export class ApiChart extends Chart {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    var deployment = new Deployment(this, "ApiDeployment", {
      replicas: 1,
    });

    deployment.addContainer(
      new Container({
        image: "stefanprodan/podinfo",
        port: 9898,
      })
    );

    deployment.expose(80, {
      serviceType: ServiceType.LOAD_BALANCER,
    });
  }
}
