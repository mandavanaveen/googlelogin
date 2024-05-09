// src/setupProxy.js

import { createProxyMiddleware } from "http-proxy-middleware";

function setup(app) {
  app.use(
    "/googlelogin",
    createProxyMiddleware({
      target: "https://mandavanaveen.github.io",
      changeOrigin: true,
      pathRewrite: {
        "^/googlelogin": "/googlelogin",
      },
    })
  );
}

export default setup;
