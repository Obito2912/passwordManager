import { useState } from "react";
import CreatePasswordForm from "./CreatePasswordForm";

function PasswordManager({ onPasswordCreated }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="create-password-btn-container">
        <button onClick={() => setShowForm(true)} className="create-btn">
          Create your first password
        </button>

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
