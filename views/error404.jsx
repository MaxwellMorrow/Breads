const React = require("react");
const Default = require("./layouts/Default");

function error404({ breads, title }) {
  return (
    <Default title={title}>
      <h2>Error 404! Page not found! Click the link to return home.</h2>
    </Default>
  );
}
module.exports = error404;
