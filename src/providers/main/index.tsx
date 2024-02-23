import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pages } from "../../pages";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { MainLayout } from "../../layouts/main";

interface IMainProviderProps {}

const MainProvider: React.FunctionComponent<IMainProviderProps> = () => {
  return (
    <BrowserRouter basename="/">
      <MainLayout>
        <Routes>
          {pages.map((e, i) => (
            <Route path={e.path} element={<e.Component />} key={i} />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainProvider;
