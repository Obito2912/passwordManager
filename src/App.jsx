// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import PasswordList from "./PasswordList";
import PasswordManager from "./PasswordManager";
import { useState, useEffect } from "react";

function App() {
  // State to manage the list of passwords
  const [passwords, setPasswords] = useState([]);

  // Fetch the list of passwords from the API when the component mounts
  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/passwords`,
        );
        const result = await response.json();
        setPasswords(result);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchPasswords();
  }, []);

  // Function to handle the creation of a new password entry
  const handlePasswordCreated = (newPassword) => {
    setPasswords((prevPasswords) => [...prevPasswords, newPassword]);
  };

  // Function to handle the deletion of a password entry
  const handlePasswordDeleted = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/passwords/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        throw new Error("Failed to delete password");
      }
      setPasswords((prevPasswords) =>
        prevPasswords.filter((password) => password.id !== id),
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="main-container">
        <h1 className="title">Your Password Manager</h1>
        <PasswordManager onPasswordCreated={handlePasswordCreated} />
        <div className="password-container">
          <h2 className="container-title">Your Passwords</h2>
          <PasswordList
            data={passwords}
            onPasswordDeleted={handlePasswordDeleted}
          />
        </div>
      </div>
    </>
  );
}

export default App;
