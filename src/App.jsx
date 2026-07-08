// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import PasswordManager from "./PasswordManager";

function App() {
  return (
    <>
      <div className="main-container">
        <h1 className="title">Your Password Manager</h1>
        <PasswordManager />
        <div className="password-container">
          <h2 className="container-title">Your Passwords</h2>
          <div>You don't have any passwords yet.</div>
        </div>
      </div>
    </>
  );
}

export default App;
