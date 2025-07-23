import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#00ACC1]/10"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-[#00ACC1] to-[#00796B] transform -skew-y-2 origin-bottom-left"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#7CB342] transform -skew-y-1 origin-bottom-right"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1C4E80] transform skew-y-1 origin-bottom-left"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1C4E80] mb-6 leading-tight">
              HEALTHCARE
              <span className="block text-[#33691E]">AT HOME</span>
            </h1>
            <p className="text-lg text-[#1C4E80] mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Professional, compassionate home health aide services designed to help you or your loved ones maintain independence and dignity in the comfort of home.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToContact}
                className="bg-[#7CB342] text-white px-8 py-4 rounded-full hover:bg-[#33691E] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#1C4E80] text-[#1C4E80] px-8 py-4 rounded-full hover:bg-[#1C4E80] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#7CB342] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#1C4E80]">Licensed</p>
                <p className="text-xs text-[#33691E]">& Insured</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#7CB342] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#1C4E80]">24/7</p>
                <p className="text-xs text-[#33691E]">Available</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-[#7CB342] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#1C4E80]">Trusted</p>
                <p className="text-xs text-[#33691E]">Caregivers</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F3F3F3]/90 via-[#E0E0E0]/90 to-[#00ACC1]/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#00ACC1]/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00ACC1] to-[#00796B] rounded-full mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#1C4E80] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#7CB342] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1C4E80] mb-2">Quality Care</h3>
                <p className="text-[#33691E] leading-relaxed">
                  Our certified home health aides provide personalized care tailored to your unique needs, ensuring comfort, safety, and peace of mind for you and your family.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-[#E0E0E0] to-[#F3F3F3] rounded-lg p-4 border border-[#00ACC1]/20">
                  <p className="text-2xl font-bold text-[#1C4E80]">500+</p>
                  <p className="text-sm text-[#33691E]">Families Served</p>
                </div>
                <div className="bg-gradient-to-br from-[#E0E0E0] to-[#F3F3F3] rounded-lg p-4 border border-[#00ACC1]/20">
                  <p className="text-2xl font-bold text-[#1C4E80]">10+</p>
                  <p className="text-sm text-[#33691E]">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;