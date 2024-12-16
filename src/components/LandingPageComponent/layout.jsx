import { Footer } from "./footer";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      

      <main className="flex grow w-full flex-col justify-start">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
