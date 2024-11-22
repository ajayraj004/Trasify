import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"; // Correct imports
import { app } from "../firebaseConfig"; // Ensure this is correctly set up
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Register.css"; // Import the CSS for styling

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true); // State to control the popup visibility

  // Initialize Firebase Auth
  const auth = getAuth(app);

  // Initialize navigate hook
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(null); // Clear previous error messages
    try {
      // Register user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);

      // Clear input fields
      setEmail("");
      setPassword("");
      setName("");

      alert("Registration successful!");
      setIsPopupOpen(false); // Close the popup after successful registration

      // Navigate to the home page
      navigate("/");
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup when user clicks close
  };

  return (
    <>
      {/* Render popup modal if isPopupOpen is true */}
      {isPopupOpen && (
        <div className="register-overlay">
          <div className="register">
            {/* Close button */}
            <button onClick={handleClosePopup} className="close-btn">
              &times;
            </button>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              {/* Username Input */}
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Submit Button */}
              <button type="submit">Register</button>
            </form>
            {/* Display error if any */}
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
