import { useState } from "react";

export default function WhatsAppMessenger() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [section, setSection] = useState("business"); // 'business' or 'restaurant' or 'clinic'

  const genericMessage = `Hey! I came across your business online and thought I’d reach out.
I’m Cyrus a web developer based in Nairobi. I help local businesses set up clean, professional websites that make it easier for customers to learn more, reach out, and access your services online.

If you don’t have a website yet or you’re thinking of upgrading I’d love to send over a quick free preview. No pressure at all. Let me know if you’re open to it.`;

  const restaurantMessage = `Hey! I’m Cyrus, a web dev based in Nairobi.
I help restaurants upgrade to clean digital menus that customers can access on their phones.
It helps you look more professional, saves time, and even brings in more customers through Google.
I recently did one for another spot and they loved it — happy to show you how yours could look.
I build full sites for just 2K–5K. Interested?`;

  const clinicMessage = `Hey! I’m Cyrus, a web dev based in Nairobi.
I help beauty businesses like yours get clean, professional websites to show off your work, take bookings, and attract more clients through Google.

It makes you look more legit, helps people trust you, and makes it easier for clients to find + contact you.

I recently built one for another business and they loved it — I can show you how yours could look too.

I build full sites for just 2K–5K, start to finish. Super affordable, mobile-friendly, and built to match your vibe.

Let me know if that sounds interesting — I can send you a sample.`;

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
          <button
            className={`flex-1 py-2 rounded-xl font-semibold ${section === 'clinic' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            onClick={() => setSection('clinic')}
          >
            For Clinics
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
          {section === 'business' ? genericMessage : section === 'restaurant' ? restaurantMessage : clinicMessage}
        </div>
        <button
          onClick={() => sendMessage(section === 'business' ? genericMessage : section === 'restaurant' ? restaurantMessage : clinicMessage)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow"
        >
          {section === 'business' ? 'Send Business Message' : section === 'restaurant' ? 'Send Restaurant Menu Message' : 'Send Clinic Message'}
        </button>
      </div>
    </div>
  );
}