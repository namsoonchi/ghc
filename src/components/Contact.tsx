import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-4567",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@careconnect.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Care Street, City, ST 12345",
      description: "Monday - Friday, 8 AM - 6 PM"
    },
    {
      icon: Clock,
      title: "Service Hours",
      content: "24/7 Care Available",
      description: "Flexible scheduling options"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#E0E0E0] via-[#F3F3F3] to-[#00ACC1]/8 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00ACC1]/25 to-[#00796B]/15 rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#7CB342]/25 to-[#33691E]/15 rounded-full translate-y-32 translate-x-32"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-[#7CB342]/10 to-[#00ACC1]/10 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4E80] mb-6">
            Get In <span className="text-[#33691E]">Touch</span>
          </h2>
          <p className="text-lg text-[#1C4E80] max-w-3xl mx-auto leading-relaxed">
            Ready to learn more about our home health aide services? Contact us today for a free consultation and discover how we can help you or your loved one.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#1C4E80] mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ACC1] to-[#00796B] rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C4E80] mb-1">{info.title}</h4>
                    <p className="text-[#1C4E80] font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-[#33691E]">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="bg-gradient-to-br from-[#F3F3F3]/90 via-[#E0E0E0]/85 to-[#00ACC1]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#00ACC1]/40 shadow-lg">
              <h4 className="font-bold text-[#1C4E80] mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#7CB342]" />
                24/7 Emergency Support
              </h4>
              <p className="text-[#1C4E80] text-sm leading-relaxed">
                For immediate assistance or emergencies, call us anytime. Our on-call team is always ready to help when you need it most.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-[#F3F3F3]/95 via-[#E0E0E0]/90 to-[#00796B]/8 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#00ACC1]/40">
              <h3 className="text-2xl font-bold text-[#1C4E80] mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1C4E80] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#00ACC1]/30 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-transparent transition-colors duration-300 bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0]/80"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1C4E80] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#00ACC1]/30 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-transparent transition-colors duration-300 bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0]/80"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1C4E80] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#00ACC1]/30 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-transparent transition-colors duration-300 bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0]/80"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[#1C4E80] mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#00ACC1]/30 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-transparent transition-colors duration-300 bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0]/80"
                    >
                      <option value="">Select a service</option>
                      <option value="personal-care">Personal Care</option>
                      <option value="companionship">Companionship</option>
                      <option value="meal-prep">Meal Preparation</option>
                      <option value="housekeeping">Light Housekeeping</option>
                      <option value="medication">Medication Reminders</option>
                      <option value="health-monitoring">Health Monitoring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1C4E80] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#00ACC1]/30 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-transparent transition-colors duration-300 resize-vertical bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0]/80"
                    placeholder="Tell us about your care needs or ask any questions you may have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7CB342] text-white px-8 py-4 rounded-lg hover:bg-[#33691E] transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;