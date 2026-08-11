import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    terms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle all inputs
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Select */}
        <div>
          <label>Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <br />

        {/* Checkbox */}
        <div>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />

          <label>I agree to the terms</label>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>

          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Terms Accepted: {submittedData.terms ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default App;