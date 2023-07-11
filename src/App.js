import Header from "./components/header";
import Left from "./components/left";
import Right from "./components/right";

function App() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-6">
          <Left />
        </div>
        <div className="col-6">
          <Right />
        </div>

      </div>
    </>
  );
}

export default App;
