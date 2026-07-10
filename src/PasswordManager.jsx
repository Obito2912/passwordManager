import { useState } from "react";
import CreatePasswordForm from "./CreatePasswordForm";

function PasswordManager({ onPasswordCreated }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="create-password-btn-container">
        {/* Button to show the create password form */}
        <button onClick={() => setShowForm(true)} className="create-btn">
          Create your password
        </button>
        {/* Show the create password form when the button is clicked */}
        {showForm && (
          <CreatePasswordForm
            onClose={() => setShowForm(false)}
            onPasswordCreated={onPasswordCreated}
          />
        )}
      </div>
    </>
  );
}
export default PasswordManager;
