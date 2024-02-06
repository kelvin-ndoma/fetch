import { useState } from 'react';
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/registrations", 
        { user: formData }, 
        { withCredentials: true } // Include CORS credentials
      );

      alert("User registered successfully!" , response);
      
      // Optionally, you can reset the form fields after successful registration
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        registrationErrors: ''
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setFormData({ ...formData, registrationErrors: error.response.data.error });
        alert("Registration failed: " + error.response.data.error.join(', '));
      } else {
        console.error("Unexpected error during registration:", error);
        alert("Unexpected error during registration. Please try again later.");
      }
    }
  }
    

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required // Adding required attribute
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required // Adding required attribute
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Adding required attribute
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required // Adding required attribute
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            required // Adding required attribute
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
