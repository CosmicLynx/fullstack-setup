import { Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
    </Routes>
  );
}
