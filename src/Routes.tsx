import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "./Home.tsx"),
  route("/error", "./PageNotFound.tsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;
