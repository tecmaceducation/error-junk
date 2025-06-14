
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your career? Get in touch with us today and discover how Tecmac Education can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information - Left Side (1/3 width) */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-0 bg-white h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6 pt-0">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold mb-1 text-base text-gray-900">Address</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Tecmac Education<br />
                      243, 1st Floor, Sow-Ma Complex<br />
                      Sathy Road, Gandhipuram<br />
                      Coimbatore, Tamil Nadu – 641012<br />
                      <strong>Landmark:</strong> Cross Cut Main Signal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold mb-1 text-base text-gray-900">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+919994779308" 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300 block"
                      >
                        +91 99947 79308
                      </a>
                      <a 
                        href="tel:+917305057133" 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300 block"
                      >
                        +91 73050 57133
                      </a>
                      <a 
                        href="tel:+917075512719" 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300 block"
                      >
                        +91 70755 12719
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold mb-1 text-base text-gray-900">Email & WhatsApp</h3>
                    <a 
                      href="mailto:tecmaceducation@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300 block mb-2"
                    >
                      tecmaceducation@gmail.com
                    </a>
                    <a 
                      href="https://wa.me/+917305057133" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-300 block"
                    >
                      WhatsApp: +91 73050 57133
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Right Side (2/3 width) */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Send className="w-6 h-6 text-blue-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                        Course of Interest
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a course</option>
                        <option value="programming">Programming</option>
                        <option value="multimedia">Multimedia</option>
                        <option value="financial">Financial</option>
                        <option value="soft-skills">Soft Skills & Career Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your goals and how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
