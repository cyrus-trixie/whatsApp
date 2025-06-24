import { useState } from "react";

export default function WhatsAppMessenger() {
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const generateMessage = () => {
    return `Hey! I came across your business online and thought I’d reach out.
I’m Cyrus a web developer based in Nairobi. I help local businesses set up clean, professional websites that make it easier for customers to learn more, reach out, and access your services online.

If you don’t have a website yet or you’re thinking of upgrading I’d love to send over a quick free preview. No pressure at all. Let me know if you’re open to it.`;
  };

  const sendMessage = () => {
    if (!phoneNumber) return; // Business name is no longer a strict requirement for message generation, only phone number
    const encodedMessage = encodeURIComponent(generateMessage());
    const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold text-purple-400">⚡ Quick WhatsApp Pitch Tool</h1>

        {/* Removed the Business Name input field */}
        {/*
        <div>
          <label className="block text-sm mb-1">Business Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            placeholder="e.g. Linda's Boutique"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        */}

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            placeholder="e.g. 254712345678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button
          onClick={sendMessage}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow"
        >
          Send WhatsApp Message
        </button>
      </div>
    </div>
  );
}