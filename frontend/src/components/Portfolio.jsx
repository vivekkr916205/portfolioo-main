import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ReactTyped } from 'react-typed';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink,
  Code2,
  GraduationCap,
  Briefcase,
  User,
  ChevronRight,
  X,
  Send,
  CheckCircle,
  ArrowUp,
  Sun,
  Moon,
  Heart
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTensorflow, SiMysql } from 'react-icons/si';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Skill icons mapping
  const skillIcons = {
    'React.js': { icon: FaReact, color: '#61DAFB', level: 90 },
    'Node.js': { icon: FaNodeJs, color: '#68A063', level: 85 },
    'JavaScript': { icon: FaJs, color: '#F7DF1E', level: 88 },
    'Python': { icon: FaPython, color: '#3776AB', level: 82 },
    'HTML5': { icon: FaHtml5, color: '#E34F26', level: 95 },
    'CSS3': { icon: FaCss3Alt, color: '#1572B6', level: 90 },
    'Java': { icon: FaJava, color: '#ED8B00', level: 78 },
    'MongoDB': { icon: SiMongodb, color: '#47A248', level: 80 },
    'Express.js': { icon: SiExpress, color: '#000000', level: 85 },
    'TensorFlow': { icon: SiTensorflow, color: '#FF6F00', level: 70 },
    'MySQL': { icon: SiMysql, color: '#4479A1', level: 75 },
    'Git': { icon: FaGitAlt, color: '#F05032', level: 88 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Back to top button visibility
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Downloading Vivek Kumar's resume...",
    });
    
    // Create download link for the PDF file
    const link = document.createElement('a');
    link.href = '/Vivek_Kumar_Resume.pdf'; // PDF file in public folder
    link.download = 'Vivek_Kumar_Resume.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent! ✉️",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Animated Background Component
  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${darkMode ? 'bg-white/10' : 'bg-black/10'} rounded-full`}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
      
      {/* Gradient waves */}
      <motion.div
        className={`absolute inset-0 opacity-30`}
        style={{
          background: darkMode 
            ? 'radial-gradient(circle at 25% 25%, rgba(139, 148, 158, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(240, 246, 252, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  const themeClasses = darkMode 
    ? "min-h-screen bg-[#0D1117] text-[#F0F6FC]"
    : "min-h-screen bg-white text-gray-900";

  const cardClasses = darkMode
    ? "bg-[#161B22] border-[#21262D]"
    : "bg-white border-gray-200 shadow-lg";

  const inputClasses = darkMode
    ? "bg-[#0D1117] border-[#21262D] text-[#F0F6FC] focus:border-[#8B949E]"
    : "bg-white border-gray-300 text-gray-900 focus:border-gray-500";

  return (
    <div className={themeClasses}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-[#0D1117]/80' : 'bg-white/80'} backdrop-blur-sm border-b ${darkMode ? 'border-[#21262D]' : 'border-gray-200'} z-50`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div>Vivek Kumar | Portfolio</div>
              <motion.div 
                className={`text-sm ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mt-1`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Building Innovative Solutions with MERN & AI/ML
              </motion.div>
            </motion.div>
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} transition-colors capitalize`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              
              {/* Dark/Light Mode Toggle */}
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#F0F6FC] to-[#8B949E] bg-clip-text text-transparent">
              Vivek Kumar
            </h1>
            
            {/* Typing Animation */}
            <div className="text-2xl md:text-3xl mb-4 h-12">
              <ReactTyped
                strings={[
                  'Computer Engineering Student',
                  'MERN Stack Developer', 
                  'AI/ML Enthusiast'
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                className={darkMode ? 'text-[#8B949E]' : 'text-gray-600'}
              />
            </div>
            
            <div className={`flex items-center justify-center gap-2 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-6`}>
              <MapPin className="w-5 h-5" />
              <span>Gaya, Bihar, India</span>
            </div>
            <p className={`text-xl ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-12 max-w-4xl mx-auto leading-relaxed`}>
              Building innovative solutions through code | MERN Stack Developer | AI/ML Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className={`${darkMode ? 'bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]' : 'bg-gray-900 text-white hover:bg-gray-700'} px-8 py-3 text-lg font-medium`}
              >
                View My Work
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className={`border-[#21262D] ${darkMode ? 'text-[#F0F6FC] hover:bg-[#21262D]' : 'text-gray-900 hover:bg-gray-100'} px-8 py-3 text-lg font-medium`}
              >
                Get In Touch
                <Mail className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleDownloadResume}
                variant="outline"
                className={`border-[#21262D] ${darkMode ? 'text-[#F0F6FC] hover:bg-[#21262D]' : 'text-gray-900 hover:bg-gray-100'} px-8 py-3 text-lg font-medium`}
              >
                Download Resume
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible.about ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <User className={`w-8 h-8 mr-4 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
              About Me
            </motion.h2>
            <Card className={`${cardClasses} p-8`}>
              <motion.div 
                className="prose prose-invert max-w-none"
                initial={{ opacity: 0 }}
                animate={isVisible.about ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} text-lg leading-relaxed mb-6`}>
                  Hi! I'm <span className={`${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} font-semibold`}>Vivek Kumar</span>, a passionate Computer Engineering student at Government Engineering College, Banka, pursuing my Bachelor of Technology (B.Tech) in Computer Science from Bihar Engineering University (BEU), Patna (2025-2028).
                </p>
                <p className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} text-lg leading-relaxed mb-6`}>
                  I'm driven by the desire to solve real-world problems through technology. My journey in software development spans multiple programming languages including C++, Java, and Python, with growing expertise in the MERN stack (MongoDB, Express.js, React, Node.js).
                </p>
                <p className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} text-lg leading-relaxed`}>
                  Currently expanding my knowledge in AI/ML fundamentals and preparing to dive deeper into machine learning algorithms and neural networks.
                </p>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.education ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              <GraduationCap className={`w-8 h-8 mr-4 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
              Education
            </h2>
            <Card className={`${cardClasses} p-8`}>
              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-semibold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>
                    Bachelor of Technology (B.Tech) - Computer Science
                  </h3>
                  <p className={`text-xl ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-2`}>Government Engineering College, Banka</p>
                  <p className={`text-lg ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-2`}>Bihar Engineering University (BEU), Patna</p>
                  <Badge className={`${darkMode ? 'bg-[#21262D] text-[#8B949E]' : 'bg-gray-100 text-gray-700'}`}>2025 - 2028</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible.skills ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Code2 className={`w-8 h-8 mr-4 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
              Technical Skills
            </motion.h2>
            <div className="space-y-8">
              {/* Skills with progress bars */}
              <Card className={`${cardClasses} p-6`}>
                <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>Technical Proficiency</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skillIcons).map(([skill, { icon: Icon, color, level }], index) => (
                    <motion.div
                      key={skill}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible.skills ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-5 h-5" style={{ color }} />
                          <span className={`font-medium ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>{skill}</span>
                        </div>
                        <span className={`text-sm ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>{level}%</span>
                      </div>
                      <div className={`w-full ${darkMode ? 'bg-[#21262D]' : 'bg-gray-200'} rounded-full h-2`}>
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: color }}
                          initial={{ width: 0 }}
                          animate={isVisible.skills ? { width: `${level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.projects ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              <Briefcase className={`w-8 h-8 mr-4 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible.projects ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: darkMode 
                      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="cursor-pointer"
                >
                  <Card className={`${cardClasses} p-6 h-full hover:border-[#30363D] transition-all duration-300`}>
                    <div onClick={() => setActiveProject(project)}>
                      {/* Project thumbnail placeholder */}
                      <div className={`w-full h-48 ${darkMode ? 'bg-[#21262D]' : 'bg-gray-100'} rounded-lg mb-4 flex items-center justify-center`}>
                        <Code2 className={`w-12 h-12 ${darkMode ? 'text-[#8B949E]' : 'text-gray-400'}`} />
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>{project.title}</h3>
                      <p className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-4 line-clamp-3`}>{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            className={`${darkMode ? 'bg-[#21262D] text-[#8B949E]' : 'bg-gray-100 text-gray-700'} text-xs`}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge className={`${darkMode ? 'bg-[#21262D] text-[#8B949E]' : 'bg-gray-100 text-gray-700'} text-xs`}>
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <Button 
                        variant="ghost" 
                        className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} p-0`}
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center">
              <Mail className={`w-8 h-8 mr-4 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
              Get In Touch
            </h2>
            
            {/* Call to Action */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>
                Let's Build Something Together 🚀
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>Let's Connect</h3>
                <p className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} text-lg mb-8 leading-relaxed`}>
                  Open to Software Development Internships, AI/ML Research Opportunities, and Collaborations.
                </p>
                
                {/* Animated Social Media Icons */}
                <div className="space-y-6 mb-8">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaEnvelope className={`w-6 h-6 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
                    </motion.div>
                    <span className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>vivek888gaya@gmail.com</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaLinkedin className={`w-6 h-6 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
                    </motion.div>
                    <a 
                      href="https://www.linkedin.com/in/vivekkumar-285708383" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                    >
                      LinkedIn Profile
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaGithub className={`w-6 h-6 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
                    </motion.div>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                    >
                      GitHub Profile
                    </a>
                  </motion.div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className={`w-6 h-6 ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`} />
                    <span className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>Gaya, Bihar, India</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleDownloadResume}
                  className={`${darkMode ? 'bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <Card className={`${cardClasses} p-6`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>Name</label>
                    <motion.input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full ${inputClasses} rounded-md px-4 py-3 focus:outline-none transition-all duration-300`}
                      placeholder="Your name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>Email</label>
                    <motion.input 
                      type="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full ${inputClasses} rounded-md px-4 py-3 focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>Message</label>
                    <motion.textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full ${inputClasses} rounded-md px-4 py-3 focus:outline-none resize-none transition-all duration-300`}
                      placeholder="Your message..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${darkMode ? 'bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]' : 'bg-gray-900 text-white hover:bg-gray-700'} disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={`animate-spin rounded-full h-4 w-4 border-b-2 ${darkMode ? 'border-[#0D1117]' : 'border-white'} mr-2`}></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`${cardClasses} rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>{activeProject.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveProject(null)}
                    className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} text-lg leading-relaxed mb-6`}>
                  {activeProject.longDescription}
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, index) => (
                        <Badge key={index} className={`${darkMode ? 'bg-[#21262D] text-[#8B949E]' : 'bg-gray-100 text-gray-700'}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>Key Features</h4>
                    <ul className={`list-disc list-inside ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} space-y-1`}>
                      {activeProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {activeProject.demoUrl && (
                  <Button className={`${darkMode ? 'bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-[#21262D]' : 'border-gray-200'} py-12 px-6`}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            © 2025 Vivek Kumar | Built with React & Passion for Clean Code
          </motion.p>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>and React</span>
          </div>
          <div className="flex justify-center space-x-6">
            <motion.a 
              href="mailto:vivek888gaya@gmail.com" 
              className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/vivekkumar-285708383" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 ${darkMode ? 'bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]' : 'bg-gray-900 text-white hover:bg-gray-700'} p-3 rounded-full shadow-lg transition-colors z-40`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;