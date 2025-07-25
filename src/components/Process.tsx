import React from 'react';
import { Phone, UserCheck, Calendar, Heart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Initial Consultation",
      description: "Contact us for a free consultation to discuss your care needs and preferences."
    },
    {
      icon: UserCheck,
      number: "02", 
      title: "Care Assessment",
      description: "Our team conducts a thorough assessment to create a personalized care plan."
    },
    {
      icon: Calendar,
      number: "03",
      title: "Schedule & Match",
      description: "We match you with the perfect caregiver and establish a flexible schedule."
    },
    {
      icon: Heart,
      number: "04",
      title: "Begin Care",
      description: "Your dedicated caregiver begins providing compassionate, professional care."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#1C4E80]/80 via-[#00796B]/70 to-[#1C4E80]/80 relative overflow-hidden">
      {/* Layered Background Shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-[#00ACC1]/70 to-[#00796B]/70 transform -skew-y-2 origin-bottom-left"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#7CB342]/70 transform -skew-y-1 origin-bottom-right"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1C4E80]/70 transform skew-y-1 origin-bottom-left"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4E80] mb-6 leading-tight">
            HOW IT <span className="block text-white">WORKS</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Getting started with CareConnect is simple. Our streamlined process ensures you receive the right care quickly and efficiently.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00ACC1]/50 to-[#00ACC1]/20 z-0"></div>
              )}
              
              <div className="relative z-10 group bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#00ACC1]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#00ACC1]/30 hover:border-[#7CB342]/50">
              <div className="relative z-10 group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-[#7CB342]/50">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1C4E80]/80 to-[#00796B]/80 rounded-full mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00ACC1]/80 to-[#00796B]/80 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7CB342] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards quality home care. Contact us today for your free consultation and discover how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#7CB342] text-white px-8 py-4 rounded-full hover:bg-[#33691E] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Free Consultation
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#1C4E80] text-[#1C4E80] px-8 py-4 rounded-full hover:bg-[#1C4E80] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;