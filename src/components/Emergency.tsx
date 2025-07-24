import React from 'react';
import { Phone, Clock, Shield, AlertCircle, Headphones, MapPin } from 'lucide-react';

const Emergency = () => {
  const emergencyFeatures = [
    {
      icon: Phone,
      title: "24/7 Emergency Line",
      description: "Direct access to our emergency response team any time of day or night."
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Average response time of under 15 minutes for emergency situations."
    },
    {
      icon: Shield,
      title: "Trained Professionals",
      description: "All our emergency responders are certified in first aid and CPR."
    },
    {
      icon: Headphones,
      title: "Family Notification",
      description: "Immediate notification system to keep family members informed."
    }
  ];

  return (
    <section id="emergency" className="py-20 bg-gradient-to-br from-[#7CB342] via-[#33691E] to-[#00ACC1] relative overflow-hidden">
      {/* Layered Background Shapes */}
      <div className="absolute inset-0">
        {/* Flowing bottom layers */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-r from-[#1C4E80] to-[#003366] transform -skew-y-2 origin-bottom-left"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-[#00ACC1] to-[#00796B] transform skew-y-1 origin-bottom-right"></div>
        
        {/* Accent shapes */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#1C4E80]/25 to-[#003366]/15 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-gradient-to-br from-[#00ACC1]/25 to-[#00796B]/20 rounded-full -translate-x-24"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-[#1C4E80]/20 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1C4E80] to-[#003366] rounded-full mb-6">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Emergency <span className="text-[#1C4E80]">Support</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            When emergencies happen, you need immediate, professional assistance. Our 24/7 emergency support ensures help is always just a phone call away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Emergency Features */}
          <div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {emergencyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/15 via-white/10 to-[#1C4E80]/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-gradient-to-br hover:from-white/25 hover:via-white/15 hover:to-[#1C4E80]/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-[#1C4E80]/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1C4E80] to-[#003366] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1C4E80] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white/15 via-white/10 to-[#1C4E80]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-[#1C4E80]" />
                Coverage Area
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our emergency response team covers the entire metropolitan area with strategically located response units to ensure the fastest possible assistance when you need it most.
              </p>
            </div>
          </div>

          {/* Emergency Contact Card */}
          <div>
            <div className="bg-gradient-to-br from-white/20 via-white/15 to-[#1C4E80]/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1C4E80] to-[#003366] rounded-full mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Emergency Hotline</h3>
                <p className="text-white/80">Available 24 hours a day, 7 days a week</p>
              </div>

              <div className="text-center mb-8">
                <a 
                  href="tel:555-911-CARE" 
                  className="text-4xl font-bold text-[#1C4E80] hover:text-white transition-colors duration-300 block mb-2"
                >
                  (555) 911-CARE
                </a>
                <p className="text-white/90 text-sm">Call immediately for any emergency situation</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20">
                  <span className="text-white/90">Average Response Time</span>
                  <span className="text-[#1C4E80] font-bold">< 15 minutes</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20">
                  <span className="text-white/90">Coverage</span>
                  <span className="text-[#1C4E80] font-bold">24/7/365</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20">
                  <span className="text-white/90">Certified Staff</span>
                  <span className="text-[#1C4E80] font-bold">100%</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-[#1C4E80]/20 to-[#003366]/10 rounded-lg border border-[#1C4E80]/30">
                <p className="text-white/90 text-sm text-center">
                  <strong>Remember:</strong> For life-threatening emergencies, always call 911 first, then contact our emergency line for additional support and coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;