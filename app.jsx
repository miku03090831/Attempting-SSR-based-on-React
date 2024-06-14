const React = require("react");

const App = () => {
  return (
    <div
      onClick={() => {
        console.log("111");
      }}
    >
      {" "}
      this is a classic SSR App{" "}
    </div>
  );
};

module.exports = App;
