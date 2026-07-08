function CreatePasswordForm({ onClose }) {
  return (
    <form className="create-password-form">
      <div className="form-fields">
        <label className="form-label">
          Website name:
          <input type="text" name="website" className="form-input" />
        </label>
        <label className="form-label">
          Email/username:
          <input type="text" name="email" className="form-input" />
        </label>
        <label className="form-label">
          Password:
          <input type="password" name="password" className="form-input" />
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
