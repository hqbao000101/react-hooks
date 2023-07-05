import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import DemoUseState from "./pages/DemoUseState/DemoUseState";
import DemoUseEffect from "./pages/DemoUseEffect/DemoUseEffect";
import Detail from "./pages/DemoUseEffect/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="usestate" element={<DemoUseState />} />
          <Route path="useeffect" element={<DemoUseEffect />} />
          <Route path="shoes">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
