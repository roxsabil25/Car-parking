import React, { useState } from 'react';
// Lucide icons ইমপোর্ট করা হয়েছে (সাথে Loader2 আইকন যুক্ত করা হয়েছে)
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // লোডিং স্টেট হ্যান্ডেল করার জন্য
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // সাবমিট করার সাথে সাথে লোডিং শুরু হবে

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Message sent to Gmail successfully!');
        // ফর্ম রিসেট
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Server error! Could not send message.');
    } finally {
      setLoading(false); // কাজ শেষ (সফল বা ব্যর্থ) হলে লোডিং বন্ধ হবে
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Banner Section */}
      <div className="bg-[#002244] text-white text-center py-16">
        <h1 className="text-3xl font-bold tracking-wider uppercase">Contact Us</h1>
        <p className="text-sm text-gray-400 mt-2">
          
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-500">
            Get a free quote for your car parking shade project. Our team is ready to assist you.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                disabled={loading} // লোড হওয়ার সময় ইনপুট লক থাকবে
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#002244] disabled:bg-gray-100"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                required
                disabled={loading}
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#002244] disabled:bg-gray-100"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                required
                disabled={loading}
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#002244] disabled:bg-gray-100"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                disabled={loading}
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#002244] disabled:bg-gray-100"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="5"
                required
                disabled={loading}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#002244] resize-none disabled:bg-gray-100"
              ></textarea>
            </div>
            
            {/* ডাইনামিক বাটন: লোডিং এর সময় স্পিনার দেখাবে */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#002244] text-white px-6 py-3 rounded-md font-semibold uppercase text-sm hover:bg-opacity-90 transition duration-300 flex items-center gap-2 disabled:bg-opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Right Side: Contact Information Box */}
          <div className="bg-[#002b54] text-white p-8 rounded-xl space-y-6 shadow-lg">
            <h3 className="text-xl font-bold border-b border-gray-600 pb-3">Contact Information</h3>
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0a3a6b] p-3 rounded-full text-amber-500 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Address</h4>
                <p className="text-sm text-gray-400 mt-0.5">Shop No- 5, Ajman Industrial Area -2, Ajman, UAE</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0a3a6b] p-3 rounded-full text-amber-500 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Phone</h4>
                <p className="text-sm text-gray-400 mt-0.5">+971 56 238 8440</p>
                <p className="text-sm text-gray-400">+971 56 238 8440</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0a3a6b] p-3 rounded-full text-amber-500 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Email</h4>
                <p className="text-sm text-gray-400 mt-0.5">info@layalicarparking.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0a3a6b] p-3 rounded-full text-amber-500 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Working Hours</h4>
                <p className="text-sm text-gray-400 mt-0.5">Sat - Thu: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-96 bg-gray-300">
        <iframe 
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115403.49884518742!2d55.43152595!3d25.4052163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f576365fa3693%3A0xc07cf1c50e48ef0e!2sAjman%20Industrial%20Area%20-%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1720612000000!5m2!1sen!2sbd" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactComponent;