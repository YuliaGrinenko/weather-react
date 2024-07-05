import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer className="footer">
        <p>
          This project was coded by {}
          <a
            href="https://github.com/YuliaGrinenko"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Yulia Hrinenko
          </a>
          {} and is {}
          <a
            href="https://github.com/YuliaGrinenko/weather-react"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            on GitHub
          </a>
          {} and {}
          <a
            href="https://weather-app-react-yulia.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
