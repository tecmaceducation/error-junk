import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleEnrollment = (courseName) => {
    navigate('/enquiry');
    setSelectedCourse(null);
  };

  const courses = [
    // Programming Courses
    {
      id: 1,
      name: 'Master in Software Technology (MST)',
      category: 'programming',
      description: 'Comprehensive program covering advanced software development concepts, algorithms, and system design.',
      curriculum: [
        'Advanced Programming Concepts',
        'Data Structures & Algorithms',
        'System Design',
        'Database Management',
        'Software Engineering Principles',
        'Project Management',
        'Industry Best Practices'
      ]
    },
    {
      id: 2,
      name: 'Advanced Diploma in Basic Programming (ADBP)',
      category: 'programming',
      description: 'Foundation course in programming fundamentals and logic building.',
      curriculum: [
        'Programming Fundamentals',
        'Logic Building',
        'Basic Data Structures',
        'Problem Solving Techniques',
        'Introduction to Algorithms',
        'Code Optimization',
        'Debugging Techniques'
      ]
    },
    {
      id: 3,
      name: 'Advanced Diploma in Java Programming (ADJP)',
      category: 'programming',
      description: 'Master Java programming from basics to advanced concepts including frameworks.',
      curriculum: [
        'Java Fundamentals',
        'Object-Oriented Programming',
        'Collections Framework',
        'Multithreading',
        'JDBC & Database Connectivity',
        'Spring Framework',
        'Hibernate ORM',
        'RESTful Web Services'
      ]
    },
    {
      id: 4,
      name: 'Advanced Diploma in Python Programming (ADPP)',
      category: 'programming',
      description: 'Comprehensive Python programming course covering web development, data science, and automation.',
      curriculum: [
        'Python Basics & Syntax',
        'Data Structures in Python',
        'Object-Oriented Programming',
        'Web Development with Django/Flask',
        'Data Analysis with Pandas',
        'Machine Learning Basics',
        'API Development',
        'Automation & Scripting'
      ]
    },
    {
      id: 5,
      name: 'Advanced Diploma in AI/ML (ADAIML)',
      category: 'programming',
      description: 'Master Artificial Intelligence and Machine Learning with hands-on projects and real-world applications.',
      curriculum: [
        'AI/ML Fundamentals',
        'Python for Data Science',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'Computer Vision',
        'Natural Language Processing',
        'Model Deployment',
        'AI Ethics & Applications'
      ]
    },
    {
      id: 6,
      name: 'Advanced Diploma in Data Science (ADDS)',
      category: 'programming',
      description: 'Comprehensive data science program covering statistics, machine learning, and data visualization.',
      curriculum: [
        'Statistics & Probability',
        'Data Collection & Cleaning',
        'Exploratory Data Analysis',
        'Machine Learning',
        'Data Visualization',
        'Big Data Technologies',
        'Business Intelligence',
        'Project Portfolio'
      ]
    },
    {
      id: 7,
      name: 'Advanced Diploma in Data Analytics (ADDA)',
      category: 'programming',
      description: 'Learn to analyze and interpret complex data to drive business decisions and insights.',
      curriculum: [
        'Data Analytics Fundamentals',
        'Statistical Analysis',
        'Excel & Power BI',
        'SQL & Database Querying',
        'Python for Analytics',
        'Tableau & Visualization',
        'Business Intelligence',
        'Predictive Analytics'
      ]
    },
    {
      id: 8,
      name: 'Advanced Diploma in Data Engineering (ADDE)',
      category: 'programming',
      description: 'Build robust data pipelines and infrastructure for large-scale data processing and analytics.',
      curriculum: [
        'Data Engineering Fundamentals',
        'Database Design & Management',
        'ETL/ELT Processes',
        'Apache Spark & Hadoop',
        'Cloud Data Platforms',
        'Data Warehousing',
        'Real-time Data Processing',
        'Data Pipeline Automation'
      ]
    },
    {
      id: 9,
      name: 'Advanced Diploma in Cloud Technology (ADCT)',
      category: 'programming',
      description: 'Master cloud computing platforms and services for modern application deployment and management.',
      curriculum: [
        'Cloud Computing Fundamentals',
        'AWS/Azure/GCP Services',
        'Infrastructure as Code',
        'Containerization & Docker',
        'Kubernetes Orchestration',
        'Cloud Security',
        'DevOps & CI/CD',
        'Cloud Architecture Design'
      ]
    },
    {
      id: 10,
      name: 'Advanced Diploma in Android Development (ADAD)',
      category: 'programming',
      description: 'Create powerful mobile applications for Android platform using modern development tools and frameworks.',
      curriculum: [
        'Android Development Fundamentals',
        'Java/Kotlin Programming',
        'Android Studio & SDK',
        'UI/UX Design for Mobile',
        'Database Integration',
        'API Integration',
        'Google Play Store Publishing',
        'Mobile App Testing'
      ]
    },
    {
      id: 11,
      name: 'Full Stack Java Programming',
      category: 'programming',
      description: 'Complete full-stack development using Java technologies for both frontend and backend.',
      curriculum: [
        'HTML, CSS, JavaScript',
        'Java Programming',
        'Spring Boot Framework',
        'Database Design & MySQL',
        'RESTful API Development',
        'Frontend Frameworks',
        'Deployment & DevOps',
        'Project Development'
      ]
    },
    {
      id: 12,
      name: 'Full Stack Python Programming',
      category: 'programming',
      description: 'End-to-end web development using Python and modern frameworks.',
      curriculum: [
        'Python Programming',
        'Django/Flask Framework',
        'Database Management',
        'Frontend Technologies',
        'API Development',
        'Authentication & Security',
        'Testing & Deployment',
        'Cloud Integration'
      ]
    },
    {
      id: 13,
      name: 'Full Stack Web Development',
      category: 'programming',
      description: 'Modern web development using latest technologies and frameworks.',
      curriculum: [
        'HTML5, CSS3, JavaScript',
        'React.js/Angular/Vue.js',
        'Node.js & Express',
        'Database Design',
        'Version Control with Git',
        'Responsive Design',
        'Progressive Web Apps',
        'Performance Optimization'
      ]
    },

    // Financial Courses
    {
      id: 14,
      name: 'Advanced Diploma in Computer Application (ADCA)',
      category: 'financial',
      description: 'Comprehensive computer application course with focus on business applications.',
      curriculum: [
        'Computer Fundamentals',
        'MS Office Suite',
        'Database Management',
        'Internet & Email',
        'Accounting Basics',
        'Business Communication',
        'Project Work',
        'Practical Applications'
      ]
    },
    {
      id: 15,
      name: 'Diploma in Computer Application (DCA)',
      category: 'financial',
      description: 'Essential computer skills for modern business applications.',
      curriculum: [
        'Basic Computer Concepts',
        'Operating Systems',
        'MS Word, Excel, PowerPoint',
        'Internet Browsing',
        'Email Communication',
        'Data Entry',
        'File Management',
        'Practical Training'
      ]
    },
    {
      id: 16,
      name: 'Microsoft Office with AI',
      category: 'financial',
      description: 'Master Microsoft Office suite with modern AI-powered features and productivity tools.',
      curriculum: [
        'MS Word Advanced Features',
        'Excel with AI Functions',
        'PowerPoint with AI Design',
        'Outlook & Teams',
        'OneDrive & SharePoint',
        'AI-powered Templates',
        'Automation & Macros',
        'Business Productivity'
      ]
    },
    {
      id: 17,
      name: 'Tally ERP 9',
      category: 'financial',
      description: 'Master Tally ERP 9 for comprehensive business accounting and inventory management.',
      curriculum: [
        'Tally Fundamentals',
        'Company Creation',
        'Ledger Management',
        'Voucher Entry',
        'Inventory Management',
        'GST Implementation',
        'Report Generation',
        'Data Backup & Security'
      ]
    },
    {
      id: 18,
      name: 'GST & Taxation with Tally Prime',
      category: 'financial',
      description: 'Comprehensive GST and taxation management using latest Tally Prime software.',
      curriculum: [
        'GST Fundamentals',
        'Tally Prime Interface',
        'GST Registration & Setup',
        'Input & Output Tax Credit',
        'GST Returns Filing',
        'E-way Bills & E-invoicing',
        'TDS & TCS Management',
        'Compliance & Audit'
      ]
    },
    {
      id: 19,
      name: 'Business Analytics with Excel and Power BI',
      category: 'financial',
      description: 'Transform business data into actionable insights using Excel and Power BI analytics tools.',
      curriculum: [
        'Advanced Excel Functions',
        'Data Analysis & Modeling',
        'Power BI Fundamentals',
        'Dashboard Creation',
        'Data Visualization',
        'Business Intelligence',
        'KPI & Metrics Design',
        'Report Automation'
      ]
    },

    // Multimedia Courses
    {
      id: 20,
      name: 'Master Diploma in Graphic Animation (MDGA)',
      category: 'multimedia',
      description: 'Comprehensive course in graphic design and animation for digital media.',
      curriculum: [
        'Design Principles',
        '2D Animation Techniques',
        '3D Modeling & Animation',
        'Character Design',
        'Storyboarding',
        'Video Editing',
        'Motion Graphics',
        'Portfolio Development'
      ]
    },
    {
      id: 21,
      name: 'UI/UX Designing',
      category: 'multimedia',
      description: 'Design engaging user interfaces and experiences for web and mobile applications.',
      curriculum: [
        'Design Thinking',
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Tools (Figma, Adobe XD)',
        'Portfolio Creation'
      ]
    },
    {
      id: 22,
      name: 'Flutter Flow',
      category: 'multimedia',
      description: 'Build beautiful mobile and web applications using Flutter Flow visual development platform.',
      curriculum: [
        'Flutter Flow Fundamentals',
        'Visual App Development',
        'UI Components & Widgets',
        'Database Integration',
        'API Connections',
        'Authentication & Security',
        'App Publishing',
        'Performance Optimization'
      ]
    },
    {
      id: 23,
      name: 'Adobe Photoshop',
      category: 'multimedia',
      description: 'Master photo editing and digital imaging with Adobe Photoshop.',
      curriculum: [
        'Photoshop Interface',
        'Photo Editing Basics',
        'Layer Management',
        'Selection Tools',
        'Color Correction',
        'Retouching Techniques',
        'Digital Art Creation',
        'Print & Web Optimization'
      ]
    },
    {
      id: 24,
      name: 'Adobe Illustrator',
      category: 'multimedia',
      description: 'Create stunning vector graphics and illustrations with Adobe Illustrator.',
      curriculum: [
        'Vector Graphics Basics',
        'Drawing Tools',
        'Typography',
        'Logo Design',
        'Illustration Techniques',
        'Color Theory',
        'Print Design',
        'Brand Identity Creation'
      ]
    },
    {
      id: 25,
      name: 'Adobe XD',
      category: 'multimedia',
      description: 'Design and prototype user experiences with Adobe XD.',
      curriculum: [
        'XD Interface',
        'Design Systems',
        'Prototyping',
        'Interactive Elements',
        'Collaboration Features',
        'Mobile App Design',
        'Web Design',
        'User Testing'
      ]
    },
    {
      id: 26,
      name: 'CorelDRAW',
      category: 'multimedia',
      description: 'Professional vector illustration and layout design with CorelDRAW.',
      curriculum: [
        'CorelDRAW Basics',
        'Vector Drawing',
        'Page Layout',
        'Typography',
        'Logo Design',
        'Print Design',
        'Color Management',
        'Export Formats'
      ]
    },

    // Soft Skills & Career Development
    {
      id: 27,
      name: 'Spoken English & Business Communication',
      category: 'soft-skills',
      description: 'Enhance your English speaking skills and professional communication for career growth.',
      curriculum: [
        'English Grammar & Vocabulary',
        'Pronunciation & Accent Training',
        'Business Writing Skills',
        'Email Communication',
        'Phone & Video Conferencing',
        'Cross-cultural Communication',
        'Networking Skills',
        'Professional Etiquette'
      ]
    },
    {
      id: 28,
      name: 'Interview Preparation & Resume Building',
      category: 'soft-skills',
      description: 'Master the art of creating compelling resumes and excelling in job interviews.',
      curriculum: [
        'Resume Writing Techniques',
        'LinkedIn Profile Optimization',
        'Interview Skills & Techniques',
        'Mock Interview Sessions',
        'Behavioral Interview Questions',
        'Salary Negotiation',
        'Job Search Strategies',
        'Personal Branding'
      ]
    },
    {
      id: 29,
      name: 'Public Speaking & Presentation Skills',
      category: 'soft-skills',
      description: 'Develop confidence and skills for effective public speaking and presentations.',
      curriculum: [
        'Overcoming Stage Fright',
        'Presentation Structure & Design',
        'Voice Modulation & Body Language',
        'Audience Engagement',
        'Visual Aids & Technology',
        'Storytelling Techniques',
        'Q&A Handling',
        'Professional Presentations'
      ]
    },
    {
      id: 30,
      name: 'Entrepreneurship & Startup Essentials',
      category: 'soft-skills',
      description: 'Learn the fundamentals of starting and running a successful business venture.',
      curriculum: [
        'Business Idea Generation',
        'Market Research & Validation',
        'Business Plan Development',
        'Funding & Investment',
        'Legal & Regulatory Compliance',
        'Marketing & Sales Strategies',
        'Financial Management',
        'Scaling & Growth Strategies'
      ]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Courses' },
    { id: 'programming', name: 'Programming Courses' },
    { id: 'multimedia', name: 'Multimedia Courses' },
    { id: 'financial', name: 'Financial Courses' },
    { id: 'soft-skills', name: 'Soft Skills & Career Development' }
  ];

  const filteredCourses = selectedFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to advance your career in technology, design, finance, and professional development.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 animate-slide-in-left">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Courses</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedFilter === filter.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-3">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.category === 'programming' ? 'bg-blue-100 text-blue-800' :
                        course.category === 'multimedia' ? 'bg-purple-100 text-purple-800' :
                        course.category === 'financial' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {course.category === 'programming' ? 'Programming' :
                         course.category === 'multimedia' ? 'Multimedia' :
                         course.category === 'financial' ? 'Financial' :
                         'Soft Skills'}
                      </span>
                      <Eye className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedCourse.name}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Detailed course information and curriculum
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Course Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedCourse.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Course Curriculum</h4>
                  <ul className="space-y-2">
                    {selectedCourse.curriculum.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
                    onClick={() => handleEnrollment(selectedCourse.name)}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;
