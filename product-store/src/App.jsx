import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const { state } = useContext(SettingsContext);

  return (
    <div className={state.theme === "dark" ? "dark bg-black text-white" : "bg-gray-100"}>
      <Navbar />
      <AppRoutes />
    </div>
  );
}