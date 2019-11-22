const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    // eslint-disable-next-line no-sparse-arrays
    proxy(["/api", , "/otherApi"], { target: "http://localhost:5000" })
  );
};