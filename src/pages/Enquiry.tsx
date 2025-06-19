
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    courseCategory: '',
    courseInterest: '',
    pincode: '',
    city: '',
    state: '',
    town: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const courseCategories = {
    'Programming Courses': [
      'Master in Software Technology (MST)',
      'Advanced Diploma in Basic Programming (ADBP)',
      'Advanced Diploma in Java Programming (ADJP)',
      'Advanced Diploma in Python Programming (ADPP)',
      'Advanced Diploma in AI/ML (ADAIML)',
      'Advanced Diploma in Data Science (ADDS)',
      'Advanced Diploma in Data Analytics (ADDA)',
      'Advanced Diploma in Data Engineering (ADDE)',
      'Advanced Diploma in Cloud Technology (ADCT)',
      'Advanced Diploma in Android Development (ADAD)',
      'Full Stack Java Programming',
      'Full Stack Python Programming',
      'Full Stack Web Development'
    ],
    'Financial Courses': [
      'Advanced Diploma in Computer Application (ADCA)',
      'Diploma in Computer Application (DCA)',
      'Microsoft Office with AI',
      'Tally ERP 9',
      'GST & Taxation with Tally Prime',
      'Business Analytics with Excel and Power BI'
    ],
    'Multimedia Courses': [
      'Master Diploma in Graphic Animation (MDGA)',
      'UI/UX Designing',
      'Flutter Flow',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe XD',
      'CorelDRAW'
    ],
    'Soft Skills & Career Development': [
      'Spoken English & Business Communication',
      'Interview Preparation & Resume Building',
      'Public Speaking & Presentation Skills',
      'Entrepreneurship & Startup Essentials'
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset course interest when category changes
      ...(name === 'courseCategory' && { courseInterest: '' })
    }));
  };

  const fetchLocationData = async (pincode: string) => {
    if (pincode.length === 6) {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();
        
        if (data[0].Status === 'Success' && data[0].PostOffice.length > 0) {
          const location = data[0].PostOffice[0];
          setFormData(prev => ({
            ...prev,
            city: location.District,
            state: location.State,
            town: location.Name
          }));
        } else {
          toast({
            title: "Invalid Pincode",
            description: "Please enter a valid pincode.",
            variant: "destructive"
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch location data. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pincode = e.target.value.replace(/\D/g, '').slice(0, 6);
    setFormData(prev => ({
      ...prev,
      pincode,
      city: '',
      state: '',
      town: ''
    }));
    
    if (pincode.length === 6) {
      fetchLocationData(pincode);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest! Our team will contact you shortly.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      courseCategory: '',
      courseInterest: '',
      pincode: '',
      city: '',
      state: '',
      town: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Course Enquiry</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your dream career. Fill out the form below and our team will get in touch with you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Personal Information
              </h2>
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
            </div>

            {/* Address Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Address Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handlePincodeChange}
                    required
                    maxLength={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter 6-digit pincode"
                  />
                  {isLoading && (
                    <p className="text-sm text-blue-600 mt-1">Fetching location data...</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    placeholder="Auto-filled from pincode"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    placeholder="Auto-filled from pincode"
                  />
                </div>

                <div>
                  <label htmlFor="town" className="block text-sm font-medium text-gray-700 mb-2">
                    Town/Area
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    value={formData.town}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    placeholder="Auto-filled from pincode"
                  />
                </div>
              </div>
            </div>

            {/* Course Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Course Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="courseCategory" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Category *
                  </label>
                  <select
                    id="courseCategory"
                    name="courseCategory"
                    value={formData.courseCategory}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a category</option>
                    {Object.keys(courseCategories).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest *
                  </label>
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleInputChange}
                    required
                    disabled={!formData.courseCategory}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:text-gray-400"
                  >
                    <option value="">
                      {formData.courseCategory ? 'Select a course' : 'Select category first'}
                    </option>
                    {formData.courseCategory && 
                      courseCategories[formData.courseCategory as keyof typeof courseCategories]?.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Enquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
