"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  setError("");

  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      router.push("/admin");
    } else {
      setError(data.message);
    }
  } catch (err) {
    setError("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur"
      >
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-white/10 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-white/10 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-3">{error}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold"
        >
          Login
        </button>

      </form>
    </div>
  );
}