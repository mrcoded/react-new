import classes from './ProfileForm.module.css';
import { useRef, useState } from 'react';
import { getAuth, updatePassword } from "@firebase/auth";
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUpdatePassword = async (newPassword) => {
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      if (!user) {
        throw new Error("No user signed in"); // Handle case where no user is signed in
      }

      await updatePassword(user, newPassword);
      console.log("Password updated successfully!");
      setErrorMessage(null); // Clear any previous error messages
      // Handle successful password update (e.g., display success message)
    } catch (error) {
      console.error("Error updating password:", error);
      setErrorMessage(error.message); // Set a user-friendly error message
      // Handle specific errors here (e.g., weak password, network issues)
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const newPassword = newPasswordInputRef.current.value;

    setErrorMessage(null); // Clear any previous error messages

    await handleUpdatePassword(newPassword);

    navigate("/");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      {errorMessage && <p className={classes.error}>{errorMessage}</p>}
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
