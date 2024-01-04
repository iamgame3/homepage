/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import "./normalize.css";
import "./index.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <div className="header-bg-color" />
      <Header />
      <Main />
    </div>
  );
}

export default App;
