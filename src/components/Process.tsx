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
    <section id="process" className="py-20 bg-gradient-to-br from-[#00ACC1] via-[#00796B] to-[#7CB342] relative overflow-hidden">
      {/* Layered Background Shapes */}
      <div className="absolute inset-0">
        {/* Bottom flowing layer */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-r from-[#7CB342] to-[#33691E] transform skew-y-2 origin-bottom-right"></div>
        
        {/* Middle flowing layer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-[#1C4E80] to-[#003366] transform -skew-y-1 origin-bottom-left"></div>
        
        {/* Circular accent shapes */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#1C4E80]/25 to-[#003366]/15 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#7CB342]/25 to-[#33691E]/15 rounded-full translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-[#1C4E80]/20 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It <span className="text-[#1C4E80]">Works</span>
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
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/50 to-white/20 z-0"></div>
              )}
              
              <div className="relative z-10 group bg-gradient-to-br from-white/15 via-white/10 to-[#1C4E80]/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-gradient-to-br hover:from-white/25 hover:via-white/15 hover:to-[#1C4E80]/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-[#1C4E80]/50">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1C4E80] to-[#003366] rounded-full mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-white/90 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-[#00796B]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1C4E80] transition-colors duration-300">
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
          <div className="bg-gradient-to-br from-white/15 via-white/10 to-[#1C4E80]/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards quality home care. Contact us today for your free consultation and discover how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#1C4E80] to-[#003366] text-white px-8 py-4 rounded-full hover:from-[#003366] hover:to-[#1C4E80] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Free Consultation
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#00796B] transition-all duration-300 font-semibold"
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