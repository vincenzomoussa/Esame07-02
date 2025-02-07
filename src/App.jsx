import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";

function App() {
  return (
    <>
      <MyNavbar />
      <MyHome />
      {/* <ProfilePage /> */}
      {/* <SettingsPage /> */}
      <MyFooter />
    </>
  );
}

export default App;
