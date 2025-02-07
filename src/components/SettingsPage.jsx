import SettingsPageMain from "./SettingsPageMain";
import SettingsPageNavBar from "./SettingsPageNavBar";

function SettingsPage(props) {
  return (
    <div className="bg-settings">
      <SettingsPageNavBar callbackDetailPage={props.callbackDetailPage} />
      <SettingsPageMain />
    </div>
  );
}

export default SettingsPage;
