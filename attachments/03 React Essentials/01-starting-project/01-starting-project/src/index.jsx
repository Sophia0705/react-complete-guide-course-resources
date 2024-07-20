import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// 앱 컴포넌트는 이 렌더 방식에 JSX 코드를 통과시켜 렌더링 
ReactDOM.createRoot(entryPoint).render(<App />);
