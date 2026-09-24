import { useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  const [form, setForm] = useState({
    username: "",
    aadharName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    photo: null,
    terms: false,
    course: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "phone" || name === "pincode") {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };

  const validate = () => {
    let newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.aadharName.trim()) {
      newErrors.aadharName = "Aadhar name is required";
    } else if (
      form.username.trim().toLowerCase() !==
      form.aadharName.trim().toLowerCase()
    ) {
      newErrors.aadharName = "Username and Aadhar name must match";
    }

    if (!form.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must contain 8 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (!form.gender) {
      newErrors.gender = "Select gender";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.state) {
      newErrors.state = "Select state";
    }

    if (!form.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (form.pincode.length !== 6) {
      newErrors.pincode = "Pincode must contain 6 digits";
    }

    if (!form.photo) {
      newErrors.photo = "Photo is required";
    }

    if (!form.terms) {
      newErrors.terms = "You must accept the terms";
    }

    if (!form.course) {
      newErrors.course = "Select a course";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Form submitted successfully!");
  };

  const handleClear = () => {
    setForm({
      username: "",
      aadharName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      photo: null,
      terms: false,
      course: ""
    });

    setErrors({});
    setSuccess("");

    document.getElementById("photo").value = "";
  };

  return (
    <div className="form-container">
      <div className="form-card">

        <h1>Student Registration Form</h1>
        <p className="subtitle">Please fill in all required details</p>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* 1 */}
            <div className="form-group">
              <label>Username *</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
              <span>{errors.username}</span>
            </div>

            {/* 2 */}
            <div className="form-group">
              <label>Aadhar Name *</label>
              <input
                type="text"
                name="aadharName"
                value={form.aadharName}
                onChange={handleChange}
                placeholder="Enter Aadhar name"
              />
              <span>{errors.aadharName}</span>
            </div>

            {/* 3 */}
            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
              <span>{errors.dob}</span>
            </div>

            {/* 4 */}
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
              <span>{errors.email}</span>
            </div>

            {/* 5 */}
            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
              />
              <span>{errors.password}</span>
            </div>

            {/* 6 */}
            <div className="form-group">
              <label>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
              <span>{errors.confirmPassword}</span>
            </div>

            {/* 7 */}
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength="10"
                placeholder="10 digit number"
              />
              <span>{errors.phone}</span>
            </div>

            {/* 8 */}
            <div className="form-group">
              <label>Gender *</label>

              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={handleChange}
                  />
                  Male
                </label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>

              <span>{errors.gender}</span>
            </div>

            {/* 9 */}
            <div className="form-group full-width">
              <label>Address *</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your address"
              ></textarea>
              <span>{errors.address}</span>
            </div>

            {/* 10 */}
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
              <span>{errors.city}</span>
            </div>

            {/* 11 */}
            <div className="form-group">
              <label>State *</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
              <span>{errors.state}</span>
            </div>

            {/* 12 */}
            <div className="form-group">
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                maxLength="6"
                placeholder="6 digit pincode"
              />
              <span>{errors.pincode}</span>
            </div>

            {/* 13 */}
            <div className="form-group">
              <label>Photo *</label>
              <input
                id="photo"
                type="file"
                name="photo"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
              <small>JPG/PNG only - recommended 300 × 300 pixels</small>
              <span>{errors.photo}</span>
            </div>

            {/* 14 */}
            <div className="form-group">
              <label>Course *</label>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="CSE">Computer Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics</option>
              </select>
              <span>{errors.course}</span>
            </div>

            {/* 15 */}
            <div className="form-group terms full-width">
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                />
                I agree to the Terms and Conditions *
              </label>
              <span>{errors.terms}</span>
            </div>

          </div>

          {success && <div className="success">{success}</div>}

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default FormValidation;