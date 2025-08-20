"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
  prefix: "",         // คำนำหน้า
  firstName: "",      // ชื่อ
  lastName: "",       // นามสกุล
  address: "",        // ที่อยู่
  gender: "",         // เพศ
  birthDate: "",      // วันเกิด
  username: "",       // Username
  email: "",          // Email
  password: "",       // Password
  confirmPassword: "",// Confirm Password
  acceptTerms: false, // Checkbox
});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password และ Confirm Password ไม่ตรงกัน");
      return;
    }

    if (!formData.acceptTerms) {
      alert("กรุณายอมรับเงื่อนไข");
      return;
    }

    try {
      const res = await fetch("http://itdev.cmtc.ac.th:3000/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json", // สำคัญ!
        },
        body: JSON.stringify({
  prefix: formData.prefix,
  firstname: formData.firstName,
  lastname: formData.lastName,
  address: formData.address,
  gender: formData.gender,
  birthDate: formData.birthDate,
  username: formData.username,
  email: formData.email,
  password: formData.password,
}),
      });

      const result = await res.json();
      console.log(result);
      if (res.ok) {
        Swal.fire("สมัครสมาชิกสำเร็จ", "", "success");
      } else {
        Swal.fire(
          "เกิดข้อผิดพลาด",
          result.message || "ไม่สามารถสมัครได้",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("เกิดข้อผิดพลาด", error.message, "error");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sign Up</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>คำนำหน้าชื่อ</label>
          <select
            className="form-control"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          >
            <option value="">-- เลือก --</option>
            <option value="นาย">นาย</option>
            <option value="นางสาว">นางสาว</option>
            <option value="นาง">นาง</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>ชื่อ</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>นามสกุล</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>ที่อยู่</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>เพศ</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="ชาย"
                checked={formData.gender === "ชาย"}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">ชาย</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="หญิง"
                checked={formData.gender === "หญิง"}
                onChange={handleChange}
              />
              <label className="form-check-label">หญิง</label>
            </div>
          </div>
        </div>

        <div className="form-group mb-3">
          <label>วันเกิด</label>
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="form-group mb-3">
          <label>Confirm Password</label>
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          />
          <label className="form-check-label">
            ฉันยอมรับเงื่อนไขการใช้บริการ
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}
