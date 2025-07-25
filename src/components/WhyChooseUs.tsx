import React from 'react';
import { Shield, Award, Clock, Users, Heart, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed by the state with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our caregivers are certified, trained, and committed to the highest standards of care."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and emergency assistance whenever you need it most."
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Every care plan is tailored to meet individual needs, preferences, and goals."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-[#1C4E80]/90 via-[#00796B]/90 to-[#1C4E80]/90 relative overflow-hidden">
      {/* Layered Background Shapes - matching the image design */}
      <div className="absolute inset-0">
        {/* Bottom layer - darkest blue */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-r from-[#1C4E80] to-[#003366] transform -skew-y-2 origin-bottom-left"></div>
        
        {/* Middle layer - green */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-r from-[#7CB342] to-[#33691E] transform -skew-y-1 origin-bottom-right"></div>
        
        {/* Top layer - teal */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-[#00ACC1] to-[#00796B] transform skew-y-1 origin-bottom-left"></div>
        
        {/* Additional flowing shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7CB342]/25 to-[#33691E]/15 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-br from-[#00ACC1]/25 to-[#00796B]/20 rounded-full -translate-x-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#7CB342]">CareConnect</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience, we've built our reputation on trust, compassion, and excellence in home health care services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/10 via-white/5 to-[#00ACC1]/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-[#7CB342]/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-[#7CB342]/50"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7CB342] to-[#33691E] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7CB342] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Trusted Healthcare Partner
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              At CareConnect, we understand that choosing a healthcare provider is one of life's most important decisions. That's why we've dedicated ourselves to earning your trust through consistent, compassionate care.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#7CB342] flex-shrink-0" />
                <span className="text-white/90">Rigorous background checks for all caregivers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#7CB342] flex-shrink-0" />
                <span className="text-white/90">Ongoing training and professional development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#7CB342] flex-shrink-0" />
                <span className="text-white/90">Regular quality assurance and family feedback</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#7CB342] flex-shrink-0" />
                <span className="text-white/90">Flexible scheduling to meet your needs</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 via-white/5 to-[#00ACC1]/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00ACC1] to-[#00796B] rounded-full mb-6">
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Our Promise</h4>
              <p className="text-white/90 leading-relaxed mb-6">
                We promise to treat every client with the same care, respect, and dignity we would want for our own family members.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[#7CB342]">500+</p>
                  <p className="text-sm text-white/80">Happy Families</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#7CB342]">10+</p>
                  <p className="text-sm text-white/80">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#7CB342]">24/7</p>
                  <p className="text-sm text-white/80">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;