import UseContextComponent1 from "./UseContextComponent1";
import UseEffectComponent1 from "./UseEffectComponent1";
import UseStateComponent1 from "./UseStateComponent1";
import UseStateComponent2 from "./UseStateComponent2";
import UseStateComponent3 from "./UseStateComponent3";

function App() {
  return (
    <div className="App">
      <div className="useState">
        <h1>1. useState</h1>
        <UseStateComponent1 />
        <hr />
        <h1>2. useState</h1>
        <UseStateComponent2 />
        <hr />
        <h1>3. useState</h1>
        <UseStateComponent3 />
      </div>
      <hr />

      <div className="useEffect">
        <h1>1. useEffect</h1>
        <UseEffectComponent1 />
      </div>
      <hr />

      <div className="useContext">
        <h1>1. useContext</h1>
        <UseContextComponent1 />
      </div>
      <hr />
    </div>
  );
}

export default App;
