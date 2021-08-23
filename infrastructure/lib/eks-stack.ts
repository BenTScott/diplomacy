import { Stack, App, StackProps } from "@aws-cdk/core";
import {
  Cluster,
  FargateCluster,
  KubernetesManifest,
  KubernetesVersion,
} from "@aws-cdk/aws-eks";
import { Role, AccountRootPrincipal } from "@aws-cdk/aws-iam";

export class EksStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const masterRole = new Role(this, "ClusterMasterRole", {
      assumedBy: new AccountRootPrincipal(),
    });

    var cluster = new FargateCluster(this, "DiplomacyCluster", {
      version: KubernetesVersion.V1_21,
      mastersRole: masterRole,
      clusterName: "DiplomacyCluster",
    });

    cluster.addHelmChart("NginxIngress", {
      chart: "nginx-ingress",
      repository: "https://helm.nginx.com/stable",
      namespace: "kube-system",
    });
  }
}
