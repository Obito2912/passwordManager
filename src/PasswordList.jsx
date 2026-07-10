function PasswordList({ data, onPasswordDeleted }) {
  return (
    <>
      {data.length === 0 ? (
        <div>You don't have any passwords yet.</div>
      ) : (
        data.map((item, index) => (
          <div key={item.id} className="password-entry">
            {/* delete button could go here */}
            <div className="mini-header">
              <h3>Password #{index + 1}</h3>
              <button
                className="delete-btn"
                onClick={() => onPasswordDeleted(item.id)}
              >
                Delete
              </button>
            </div>
            <div className="password-container">
              <strong className="password-label">Website:</strong>
              <span>{item.website}</span>
              <strong className="password-label">Email:</strong>
              <span>{item.email}</span>
              <strong className="password-label">Password:</strong>
              <span>{item.password}</span>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default PasswordList;
