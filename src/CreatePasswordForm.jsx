import { useState } from "react";

function CreatePasswordForm({ onClose, onPasswordCreated }) {
  const [formData, setFormData] = useState({
    website: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/passwords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create password");
      }
      // Clear the form after successful submission
      setFormData({
        website: "",
        email: "",
        password: "",
      });
      onPasswordCreated(formData);
      onClose();
    } catch (error) {
      console.error("Error creating password:", error);
    }
  };

  return (
    <form className="create-password-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <label className="form-label">
          Website name:
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email/username:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="form-input"
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="form-input"
          />
        </label>

        <div className="form-buttons">
          <button className="form-button" type="submit">
            Create Password
          </button>
          <button
            className="form-button"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreatePasswordForm;
