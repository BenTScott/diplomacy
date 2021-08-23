import * as cdk from "@aws-cdk/core";
import { FargateCluster, KubernetesVersion } from "@aws-cdk/aws-eks";
import { Role, AccountRootPrincipal } from "@aws-cdk/aws-iam";
import { ApiChart } from "./api-chart";
import * as cdk8s from "cdk8s";

export class EksStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const masterRole = new Role(this, "ClusterMasterRole", {
      assumedBy: new AccountRootPrincipal(),
    });

    var cluster = new FargateCluster(this, "DiplomacyCluster", {
      version: KubernetesVersion.V1_21,
      mastersRole: masterRole,
      clusterName: "DiplomacyCluster",
    });

    cluster.addHelmChart("IngressNginx", {
      chart: "ingress-nginx",
      repository: "https://kubernetes.github.io/ingress-nginx",
      release: "ingress-controller",
    });

    var chart = new ApiChart(new cdk8s.App(), "ApiChart");
    cluster.addCdk8sChart("ApiChart", chart);
  }
}
