#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { ApiStack } from "../lib/api-stack";
import { readFileSync } from "fs";
import { IRoute, RouteStack } from "../lib/route-stack";

const app = new cdk.App();
var apiStack = new ApiStack(app, "DiplomacyApiStack");

const raw = readFileSync("../routes.json");
const routes = JSON.parse(raw.toString()) as IRoute[];

for (const route of routes) {
  new RouteStack(app, formatRouteToID(route.path), {
    route,
    api: apiStack.api,
  });
}

function formatRouteToID(txt: string) {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
}
