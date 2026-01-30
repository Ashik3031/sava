import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "971567870072"; 
  const message = "Hi! I’d like to book an appointment.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes ring {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2); opacity: 0; }
        }
        .pulse { animation: pulse 2.5s ease-in-out infinite; }
        .ring { animation: ring 2s ease-out infinite; }
      `}</style>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Chat"
        className="fixed bottom-6 right-6 z-[999]"
      >
        {/* Outer ring (gold) */}
        <span className="absolute inset-0 rounded-full bg-brushed-gold/40 ring" />

        {/* Button (gold) */}
        <span
          className="relative pulse flex items-center justify-center w-14 h-14 rounded-full
          bg-brushed-gold text-soft-ivory shadow-xl
          hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
        </span>
      </a>
    </>
  );
}
