"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [username, setUsername] = useState(""); // เปลี่ยนจาก email → username
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://itdev.cmtc.ac.th:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        Swal.fire({
          icon: "success",
          title: "<h3>Login Successfully!</h3>",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          router.push("/admin/users"); // ล็อกอินสำเร็จ → ไปหน้า admin
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "<h3>Login Failed!</h3>",
          text: data.message || "กรุณาตรวจสอบ Username/Password",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: error.message,
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Login</h2>

      <form className="w-50 mx-auto" onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            จำฉันไว้
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          Login
        </button>

        <div className="text-center">
          <Link href="/auth/signup" className="me-2">
            สมัครสมาชิก
          </Link>
          |
          <Link href="/forgot-password" className="ms-2">
            ลืมรหัสผ่าน
          </Link>
        </div>
      </form>
    </div>
  );
}
