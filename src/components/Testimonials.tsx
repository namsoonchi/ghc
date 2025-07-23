import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Margaret Johnson",
      role: "Daughter of Care Recipient",
      content: "CareConnect has been a blessing for our family. The aide who cares for my mother is not just professional, but genuinely caring. Mom looks forward to her visits, and I have peace of mind knowing she's in good hands.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Care Recipient",
      content: "After my surgery, I wasn't sure how I'd manage at home. The team at CareConnect helped me regain my independence while ensuring I was safe and comfortable. I couldn't have asked for better care.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Family Caregiver",
      content: "As a working daughter trying to care for my aging father, CareConnect gave me the support I needed. Their flexible scheduling and compassionate caregivers have made all the difference in our lives.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#7CB342]/5 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00ACC1]/15 to-[#00796B]/10 rounded-full -translate-y-40 translate-x-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#7CB342]/15 to-[#33691E]/10 rounded-full translate-y-48 -translate-x-48"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#00ACC1]/20 to-transparent rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4E80] mb-6">
            What Our <span className="text-[#33691E]">Families Say</span>
          </h2>
          <p className="text-lg text-[#1C4E80] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what families across our community have to say about their experience with CareConnect.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#F3F3F3] via-[#E0E0E0] to-[#00ACC1]/8 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#00ACC1]/30 hover:border-[#7CB342]/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-[#7CB342] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#7CB342] fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#1C4E80] leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-[#00ACC1]/30 pt-4">
                <h4 className="font-semibold text-[#1C4E80] mb-1">{testimonial.name}</h4>
                <p className="text-sm text-[#33691E]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#7CB342] to-[#33691E] rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Family of Satisfied Clients
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the CareConnect difference. Let us show you how personalized, compassionate care can make a meaningful impact in your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#F3F3F3] to-[#E0E0E0] text-[#1C4E80] px-8 py-4 rounded-full hover:from-[#E0E0E0] hover:to-[#F3F3F3] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-[#00ACC1]/30"
              >
                Start Your Care Journey
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#F3F3F3] text-[#F3F3F3] px-8 py-4 rounded-full hover:bg-gradient-to-r hover:from-[#F3F3F3] hover:to-[#E0E0E0] hover:text-[#1C4E80] transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;