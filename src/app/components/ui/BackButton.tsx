"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-block text-xs font-black tracking-widest uppercase px-4 py-2 mb-6 transition-opacity hover:opacity-70"
      style={{ background: "#000", color: "#ffbd3f" }}
    >
      ← VOLVER
    </button>
  );
}
