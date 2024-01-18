import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { lazy } from "react";

const Accounts = lazy(() => import("pages/Accounts"));
const Profiles = lazy(() => import("pages/Profiles"));
const Campaigns = lazy(() => import("pages/Campaigns"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accounts />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="*" element={<Accounts />} />
      </Route>
    </Routes>
  )
};