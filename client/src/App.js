import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from "./routes";

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
