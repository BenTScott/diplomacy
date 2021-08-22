import { Stack, App, StackProps } from "@aws-cdk/core";
import {
  Cluster,
  FargateCluster,
  KubernetesManifest,
  KubernetesVersion,
} from "@aws-cdk/aws-eks";

export class EksStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    var cluster = new FargateCluster(this, "FargateCluster", {
      version: KubernetesVersion.V1_21,
    });

    cluster.addHelmChart("NginxIngress", {
      chart: "nginx-ingress",
      repository: "https://helm.nginx.com/stable",
      namespace: "kube-system",
    });
  }
}
