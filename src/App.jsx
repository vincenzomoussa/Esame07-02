import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";
import { useState } from "react";

function App() {
  const [actualPage, setActualPage] = useState("main");

  function handlePage(page) {
    setActualPage(page);
  }
  return (
    <>
      {actualPage == "main" && (
        <div>
          <MyNavbar callbackDetailPage={handlePage} />
          <MyHome />
          <MyFooter />
        </div>
      )}
      {actualPage == "profile" && <ProfilePage callbackDetailPage={handlePage} />}
      {actualPage == "settings" && <SettingsPage callbackDetailPage={handlePage} />}
    </>
  );
  /*  return (
    <>
      <MyNavbar />
      <MyHome />
      <ProfilePage />
      <SettingsPage />
      <MyFooter />
    </>
  ); */
}

export default App;
