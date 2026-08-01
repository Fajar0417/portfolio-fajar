"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-10">
      <h2 className="font-semibold mb-4">Atau kirimkan saya pesan</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          required
          rows={4}
          className="bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-card border border-border hover:border-accent transition-colors font-medium text-sm px-5 py-3 rounded-xl disabled:opacity-50"
        >
          {status === "loading" ? "Mengirim..." : "Kirim Email"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-500">
            Pesan terkirim! Saya akan membalas secepatnya.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">
            Gagal mengirim pesan. Coba lagi atau hubungi lewat email langsung.
          </p>
        )}
      </form>
    </div>
  );
}