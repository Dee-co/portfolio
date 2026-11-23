"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className="btn-ghost" aria-live="polite">
      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
