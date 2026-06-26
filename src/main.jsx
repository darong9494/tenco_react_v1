import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// index.html >> main.jsx >> App.jsx
// 최상위 루트로 만들어주는 함수
createRoot(document.getElementById("root")).render(<App />);
