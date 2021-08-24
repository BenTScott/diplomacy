import { Chart } from "cdk8s";
import {
  Container,
  Deployment,
  Ingress,
  IngressBackend,
  Pod,
  Service,
  ServiceType,
} from "cdk8s-plus";
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

    var service = deployment.expose(80, {
      serviceType: ServiceType.CLUSTER_IP,
    });

    const ingress = new Ingress(this, "ApiIngress");
    ingress.addRule("/api", IngressBackend.fromService(service));

    var deployment2 = new Deployment(this, "ApiDeployment2", {
      replicas: 1,
    });

    deployment2.addContainer(
      new Container({
        image: "stefanprodan/podinfo",
        port: 9898,
      })
    );

    var service2 = deployment.expose(8080, {
      serviceType: ServiceType.CLUSTER_IP,
    });

    const ingress2 = new Ingress(this, "ApiIngress2");
    ingress2.addRule("/", IngressBackend.fromService(service2));
  }
}
