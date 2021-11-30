import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="footer">
          Coded by
          <a href="https://www.rosycella.com" target="_blank" rel="noreferrer">
            Rosy Cella{" "}
          </a>
          and is
          <a
            href="https://github.com/RosyCella/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
