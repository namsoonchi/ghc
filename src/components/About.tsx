import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Families Served" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Certified Aides" },
    { icon: Shield, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#00ACC1]/10 relative overflow-hidden">
      {/* Geometric Shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-[#00ACC1] to-[#00796B] transform -skew-y-2 origin-bottom-left"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#7CB342] transform -skew-y-1 origin-bottom-right"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1C4E80] transform skew-y-1 origin-bottom-left"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4E80] mb-6 leading-tight">
              ABOUT <span className="block text-[#33691E]">CARECONNECT</span>
            </h2>
            <p className="text-lg text-[#1C4E80] mb-6 leading-relaxed">
              For over a decade, CareConnect has been a trusted partner in providing exceptional home health aide services. We understand that choosing care for yourself or a loved one is one of life's most important decisions.
            </p>
            <p className="text-lg text-[#1C4E80] mb-8 leading-relaxed">
              Our team of certified, compassionate caregivers is dedicated to helping individuals maintain their independence, dignity, and quality of life in the comfort of their own homes. We believe that personalized care makes all the difference.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#1C4E80] mb-1">Compassionate Care</h4>
                  <p className="text-[#1C4E80]">Every interaction is guided by empathy, respect, and genuine concern for wellbeing.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#1C4E80] mb-1">Professional Excellence</h4>
                  <p className="text-[#1C4E80]">Our caregivers are thoroughly screened, trained, and committed to the highest standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#1C4E80] mb-1">Personalized Approach</h4>
                  <p className="text-[#1C4E80]">Every care plan is tailored to meet individual needs, preferences, and goals.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#7CB342] text-white px-8 py-4 rounded-full hover:bg-[#33691E] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Meet Our Team
            </button>
          </div>

          {/* Stats and Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#F3F3F3]/90 via-[#E0E0E0]/90 to-[#00ACC1]/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#00ACC1]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7CB342]/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#00ACC1] to-[#00796B] rounded-xl mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-[#1C4E80] mb-1">{stat.number}</p>
                  <p className="text-sm text-[#33691E] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Featured Card */}
            <div className="bg-gradient-to-br from-[#F3F3F3]/95 via-[#E0E0E0]/90 to-[#00796B]/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#00ACC1]/40">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7CB342] to-[#33691E] rounded-full mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C4E80] mb-3">Licensed & Accredited</h3>
                <p className="text-[#1C4E80] leading-relaxed mb-4">
                  Fully licensed by the state and accredited by leading healthcare organizations, ensuring the highest quality of care.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E0E0E0] to-[#00ACC1]/20 rounded flex items-center justify-center border border-[#00ACC1]/30">
                    <Shield className="w-5 h-5 text-[#1C4E80]" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E0E0E0] to-[#00ACC1]/20 rounded flex items-center justify-center border border-[#00ACC1]/30">
                    <Award className="w-5 h-5 text-[#1C4E80]" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E0E0E0] to-[#00ACC1]/20 rounded flex items-center justify-center border border-[#00ACC1]/30">
                    <Users className="w-5 h-5 text-[#1C4E80]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;