import ProfilePageMain from "./ProfilePageMain";
import ProfilePageNavBar from "./ProfilePageNavBar";

function ProfilePage(props) {
  return (
    <div className="bg-darkgray" data-bs-theme="dark">
      <ProfilePageNavBar callbackDetailPage={props.callbackDetailPage} />
      <ProfilePageMain />
    </div>
  );
}

export default ProfilePage;
