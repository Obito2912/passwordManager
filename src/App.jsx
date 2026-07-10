// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import PasswordList from "./PasswordList";
import PasswordManager from "./PasswordManager";
import { useState, useEffect } from "react";

function App() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await fetch("http://localhost:3001/passwords");
        const result = await response.json();
        setPasswords(result);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchPasswords();
  }, []);

  const handlePasswordCreated = (newPassword) => {
    setPasswords((prevPasswords) => [...prevPasswords, newPassword]);
  };

  const handlePasswordDeleted = (id) => {
    setPasswords((prevPasswords) => {
      return prevPasswords.filter((password) => password.id !== id);
    });
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
