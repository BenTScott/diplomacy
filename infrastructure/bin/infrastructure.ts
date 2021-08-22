#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { RepoStack } from "../lib/repo-stack";

const app = new cdk.App();
new RepoStack(app, "RepoStack");
