
import React from 'react';
import { Award, Users, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Tecmac Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering students with industry-relevant skills and knowledge since our inception, 
            we are committed to bridging the gap between academic learning and professional excellence.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to democratize quality education, Tecmac Education has emerged as a leading 
                  EdTech institute in South India. We specialize in providing certified and career-focused programs 
                  that prepare students for the dynamic demands of the modern workplace.
                </p>
                <p>
                  Our commitment to excellence is reflected in our <span className="font-semibold text-blue-600">ISO 9001:2015 certification</span> and <span className="font-semibold text-blue-600">MSME recognition</span>. 
                  We believe in practical, hands-on learning that combines theoretical knowledge with real-world applications.
                </p>
                <p>
                  With state-of-the-art facilities and industry-experienced faculty, we ensure that every student 
                  receives personalized attention and comprehensive training that goes beyond traditional classroom learning.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and preferred educational partner for students aspiring to build 
                successful careers in technology, design, and finance. We envision a future where every 
                student has access to world-class education that transforms their potential into success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl animate-scale-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-8 h-8 text-purple-600 mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide high-quality, industry-relevant education that empowers students with practical 
                skills, critical thinking abilities, and professional competencies. We are committed to 
                fostering innovation, creativity, and lifelong learning among our students.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of the Tecmac Education family and transform your career with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/courses" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Courses
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
