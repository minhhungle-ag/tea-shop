import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HomeDetail } from "./pages/HomeDetail";

export default function Home() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":id" element={<HomeDetail />} />
    </Routes>
  );
}
