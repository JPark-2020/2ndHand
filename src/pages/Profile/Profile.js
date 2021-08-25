import { fire, db } from '../../util/firebase';

const Profile = () => {
    const userEmail = fire.auth().currentUser.email;
  return <div> {userEmail} Profile Page</div>;
};

export default Profile;
