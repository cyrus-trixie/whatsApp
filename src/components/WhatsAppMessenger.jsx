import { useState } from "react";

export default function WhatsAppMessenger() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [section, setSection] = useState("business"); // 'business' or 'restaurant'

  const genericMessage = `Hey! I came across your business online and thought I’d reach out.
I’m Cyrus a web developer based in Nairobi. I help local businesses set up clean, professional websites that make it easier for customers to learn more, reach out, and access your services online.

If you don’t have a website yet or you’re thinking of upgrading I’d love to send over a quick free preview. No pressure at all. Let me know if you’re open to it.`;

  const restaurantMessage = `Hey! 👋🏾
My name is Cyrus, I’m a web developer based in Nairobi.
I create custom digital menus for restaurants — clean, mobile-friendly, and easy for your customers to access online.

Here’s one I recently built for a client:
👉 www.redcube.co.ke

The service costs 2,000 Ksh for the menu design.
If you’d like your own domain name (like the one above), it’s an additional 500 Ksh.

Would you like me to make one for your restaurant?`;

  const sendMessage = (message) => {
    if (!phoneNumber) return;
    const encodedMessage = encodeURIComponent(message);
    const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold text-purple-400">⚡ Quick WhatsApp Pitch Tool</h1>

        {/* Section Toggle */}
        <div className="flex space-x-2 mb-2">
          <button
            className={`flex-1 py-2 rounded-xl font-semibold ${section === 'business' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            onClick={() => setSection('business')}
          >
            For Any Business
          </button>
          <button
            className={`flex-1 py-2 rounded-xl font-semibold ${section === 'restaurant' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            onClick={() => setSection('restaurant')}
          >
            For Restaurants
          </button>
        </div>

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

        {/* Message Preview and Send Button */}
        <div className="bg-gray-800 rounded-xl p-3 text-sm text-gray-200 whitespace-pre-line mb-2">
          {section === 'business' ? genericMessage : restaurantMessage}
        </div>
        <button
          onClick={() => sendMessage(section === 'business' ? genericMessage : restaurantMessage)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow"
        >
          {section === 'business' ? 'Send Business Message' : 'Send Restaurant Menu Message'}
        </button>
      </div>
    </div>
  );
}