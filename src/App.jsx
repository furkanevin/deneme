import Component0 from "./components/Component0";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import "./style.scss";

function App() {
  return (
    <div className="container">
      <div className="container-left">
        <Component0 />

        <div className="left-bottom">
          <Component1 />

          <div className="wrapper">
            <Component2 />
            <Component3 />
          </div>
        </div>
      </div>

      <div className="container-right">
        <h2>Smart Maple Software</h2>

        <Component5 />
        <Component4 />
      </div>
    </div>
  );
}

export default App;
