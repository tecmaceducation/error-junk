import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Briefcase, DollarSign, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Full Stack Development",
      text: "Tecmac Education transformed my career. The practical training and placement assistance helped me land my dream job at a tech company.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      course: "Python Programming",
      text: "The faculty is excellent and the curriculum is industry-focused. I gained confidence in programming through their hands-on approach.",
      rating: 5
    },
    {
      name: "Anitha Reddy",
      course: "UI/UX Design",
      text: "Amazing experience! The multimedia courses are well-structured and the instructors are very supportive. Highly recommended!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute bottom-40 right-40 w-8 h-8 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
              Tecmac Education
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up opacity-90" style={{animationDelay: '0.3s'}}>
            Empowering careers through certified and industry-focused programs in Programming, Multimedia, and Finance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
              About Tecmac Education
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tecmac Education is a leading EdTech institute offering certified and career-focused programs in programming, multimedia, and finance. We are ISO 9001:2015 and MSME certified, committed to providing quality education that bridges the gap between academic learning and industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
              What We Offer
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive programs designed for career growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-in-left group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">&lt;/&gt;</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programming</h3>
              <p className="text-gray-600 mb-6">Master modern programming languages and frameworks with hands-on projects and real-world applications.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Java & Python Programming
                </li>
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Full Stack Development
                </li>
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Web Development
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in group relative overflow-hidden" style={{animationDelay: '0.2s'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multimedia</h3>
              <p className="text-gray-600 mb-6">Create stunning visuals and user experiences with industry-standard design tools and techniques.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  UI/UX Design
                </li>
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Adobe Creative Suite
                </li>
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Graphic Animation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-in-right group relative overflow-hidden" style={{animationDelay: '0.4s'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finance</h3>
              <p className="text-gray-600 mb-6">Build expertise in financial applications and accounting software used across industries.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Tally ERP & Prime
                </li>
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Computer Applications
                </li>
                <li className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Financial Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Tecmac Education?</h2>
            <p className="text-xl text-blue-100">Excellence in education with proven results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certified Faculty</h3>
              <p className="text-white">Learn from industry experts with years of practical experience and certified credentials.</p>
            </div>

            <div className="text-center group animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Practical Training</h3>
              <p className="text-white">Hands-on learning approach with real-world projects and industry-relevant assignments.</p>
            </div>

            <div className="text-center group animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Affordable Fees</h3>
              <p className="text-white">Quality education at competitive prices with flexible payment options and EMI facilities.</p>
            </div>

            <div className="text-center group animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Placement Assistance</h3>
              <p className="text-white">Dedicated placement support with interview preparation and job opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
              What Our Students Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600">Real feedback from our successful graduates</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 animate-fade-in shadow-xl border border-white/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].course}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-10 animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full opacity-5 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 animate-fade-in opacity-90" style={{animationDelay: '0.2s'}}>
            Join thousands of successful graduates and transform your career with Tecmac Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
