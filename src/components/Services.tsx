import React from 'react';
import { Heart, Home, Utensils, Bath, Pill, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Assistance with bathing, grooming, dressing, and maintaining personal hygiene with dignity and respect."
    },
    {
      icon: Home,
      title: "Companionship",
      description: "Friendly conversation, social activities, and emotional support to reduce isolation and loneliness."
    },
    {
      icon: Utensils,
      title: "Meal Preparation",
      description: "Planning, preparing, and serving nutritious meals according to dietary requirements and preferences."
    },
    {
      icon: Bath,
      title: "Light Housekeeping",
      description: "Maintaining a clean, safe home environment including laundry, cleaning, and organization."
    },
    {
      icon: Pill,
      title: "Medication Reminders",
      description: "Ensuring medications are taken on schedule and monitoring for any adverse reactions."
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Observing and reporting changes in condition, vital signs, and overall wellness."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#00ACC1]/5 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7CB342]/10 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#00ACC1]/15 to-transparent rounded-full translate-y-32 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4E80] mb-6">
            Our <span className="text-[#33691E]">Services</span>
          </h2>
          <p className="text-lg text-[#1C4E80] max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive home health aide services designed to support independence, 
            promote wellness, and enhance quality of life in the comfort of your own home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#00ACC1]/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#00ACC1]/30 hover:border-[#7CB342]/50"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00ACC1] to-[#00796B] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C4E80] mb-3 group-hover:text-[#33691E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#1C4E80] leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="pt-4 border-t border-[#00ACC1]/30">
                <button className="text-[#7CB342] font-semibold hover:text-[#33691E] transition-colors duration-300 flex items-center group">
                  Learn More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#00ACC1] to-[#00796B] rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation and learn how our professional home health aide services can help you or your loved one.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0] text-[#1C4E80] px-8 py-4 rounded-full hover:from-[#E0E0E0] hover:to-[#F3F3F3] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-[#00ACC1]/30"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;