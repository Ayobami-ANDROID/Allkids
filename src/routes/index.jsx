import { Suspense } from "react";
import { Loader } from "../components/LandingPageComponent/loader";
import { Layout } from "../components/LandingPageComponent/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages";
import Page404 from "../pages/404";
import Missed from "../pages/missed";
import Success from "../pages/success";

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="*" Component={Page404} />
            <Route path="/oops" Component={Missed} />
            <Route path="/success" Component={Success} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
