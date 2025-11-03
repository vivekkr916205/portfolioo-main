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
  Heart,
  Award
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
  FaEnvelope,
  FaNpm,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTensorflow, 
  SiMysql, 
  SiTypescript, 
  SiTailwindcss, 
  SiMui, 
  SiRedux, 
  SiPostgresql,
  SiVercel
} from 'react-icons/si';
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
  const getSkillIcon = (iconName) => {
    const iconMap = {
      'react': { icon: FaReact, color: '#61DAFB' },
      'javascript': { icon: FaJs, color: '#F7DF1E' },
      'typescript': { icon: SiTypescript, color: '#3178C6' },
      'html': { icon: FaHtml5, color: '#E34F26' },
      'tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
      'mui': { icon: SiMui, color: '#007FFF' },
      'redux': { icon: SiRedux, color: '#764ABC' },
      'nodejs': { icon: FaNodeJs, color: '#68A063' },
      'express': { icon: SiExpress, color: '#000000' },
      'api': { icon: Code2, color: '#FF6B6B' },
      'python': { icon: FaPython, color: '#3776AB' },
      'mongodb': { icon: SiMongodb, color: '#47A248' },
      'postgresql': { icon: SiPostgresql, color: '#336791' },
      'git': { icon: FaGitAlt, color: '#F05032' },
      'deploy': { icon: SiVercel, color: '#000000' },
      'vscode': { icon: Code2, color: '#007ACC' },
      'npm': { icon: FaNpm, color: '#CB3837' },
      'docker': { icon: FaDocker, color: '#2496ED' },
      'aws': { icon: FaAws, color: '#FF9900' }
    };
    
    return iconMap[iconName] || { icon: Code2, color: '#8B949E' };
  };

  // Certification logo mapping
  const getCertificationLogo = (logoName) => {
    const logoMap = {
      'meta': { icon: Award, color: '#0668E1', bgColor: '#E7F3FF' },
      'mckinsey': { icon: Award, color: '#00A3E0', bgColor: '#E0F7FF' },
      'deeplearning': { icon: Award, color: '#FF6F61', bgColor: '#FFE5E2' }
    };
    
    return logoMap[logoName] || { icon: Award, color: '#8B949E', bgColor: '#F0F0F0' };
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
                {['about', 'education', 'skills', 'certifications', 'projects', 'contact'].map((item) => (
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
      <section 
        className="pt-32 pb-20 px-6 relative min-h-screen flex items-center"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #0D1117 0%, #1a1f2e 50%, #2d1b4e 100%)'
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
        }}
      >
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left md:text-left max-w-4xl"
          >
            {/* Headline */}
            <motion.h1 
              className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Vivek Kumar</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.h2 
              className={`text-2xl md:text-4xl font-semibold mb-6 ${darkMode ? 'text-[#8B949E]' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              React & Node.js Developer | Building Modern Web Applications
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className={`text-lg md:text-xl ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} mb-8 leading-relaxed max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I help startups and businesses build fast, scalable web solutions using React, Node.js, and MongoDB. 
              From concept to deployment, I deliver professional web applications that solve real problems.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className={`
                    ${darkMode 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    } 
                    text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
                  `}
                  aria-label="View my projects"
                >
                  View My Work
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className={`
                    ${darkMode 
                      ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    } 
                    px-8 py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                  `}
                  aria-label="Contact me"
                >
                  Let's Talk
                  <Mail className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <motion.h2 
                className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Technical Skills
              </motion.h2>
              <motion.p 
                className={`text-lg ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} max-w-2xl mx-auto`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Technologies I work with to build modern web solutions
              </motion.p>
            </div>

            {/* Skills Categories */}
            <div className="space-y-12">
              {Object.entries(mockData.skills).map(([categoryKey, categoryData], categoryIndex) => (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  {/* Category Title */}
                  <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>
                    {categoryData.category}
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categoryData.items.map((skill, skillIndex) => {
                      const IconData = getSkillIcon(skill.icon);
                      const Icon = IconData.icon;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isVisible.skills ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: darkMode 
                              ? "0 10px 30px rgba(139, 148, 158, 0.2)"
                              : "0 10px 30px rgba(0, 0, 0, 0.1)"
                          }}
                          className={`
                            ${cardClasses} 
                            p-6 
                            rounded-lg 
                            flex 
                            flex-col 
                            items-center 
                            justify-center 
                            text-center 
                            cursor-pointer
                            transition-all 
                            duration-300
                            group
                          `}
                        >
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon 
                              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" 
                              style={{ color: IconData.color }}
                            />
                          </motion.div>
                          
                          {/* Skill Name */}
                          <h4 className={`text-sm font-semibold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>
                            {skill.name}
                          </h4>
                          
                          {/* Level Badge (optional, subtle) */}
                          <Badge 
                            className={`
                              mt-2 text-xs
                              ${skill.level === 'Advanced' 
                                ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                                : skill.level === 'Intermediate'
                                ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                                : darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                              }
                            `}
                          >
                            {skill.level}
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.certifications ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <motion.h2 
                className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.certifications ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Certifications
              </motion.h2>
              <motion.p 
                className={`text-lg ${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} max-w-2xl mx-auto`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.certifications ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Continuous learning and professional development
              </motion.p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockData.certifications.map((cert, index) => {
                const logoData = getCertificationLogo(cert.logo);
                const LogoIcon = logoData.icon;
                
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible.certifications ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: darkMode 
                        ? "0 20px 40px rgba(139, 148, 158, 0.3)"
                        : "0 20px 40px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    <Card className={`${cardClasses} p-6 h-full flex flex-col items-center text-center transition-all duration-300`}>
                      {/* Logo/Badge */}
                      <motion.div
                        className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                          darkMode ? 'bg-opacity-10' : 'bg-opacity-100'
                        }`}
                        style={{ backgroundColor: logoData.bgColor }}
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <LogoIcon 
                          className="w-12 h-12" 
                          style={{ color: logoData.color }}
                        />
                      </motion.div>

                      {/* Certificate Name */}
                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'}`}>
                        {cert.name}
                      </h3>

                      {/* Issuer */}
                      <p className={`text-sm font-semibold ${darkMode ? 'text-[#8B949E]' : 'text-gray-700'} mb-2`}>
                        {cert.issuer}
                      </p>

                      {/* Platform & Date */}
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className={`${darkMode ? 'bg-[#21262D] text-[#8B949E]' : 'bg-gray-100 text-gray-700'} text-xs`}>
                          {cert.platform}
                        </Badge>
                        <Badge className={`${darkMode ? 'bg-[#21262D] text-[#8B949E]' : 'bg-gray-100 text-gray-700'} text-xs`}>
                          {cert.date}
                        </Badge>
                      </div>

                      {/* Verify Credential Link (if available) */}
                      {cert.credentialUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} mt-auto`}
                          onClick={() => window.open(cert.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Credential
                        </Button>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
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
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'} text-xs`}>
                          {project.status}
                        </Badge>
                        {project.role && (
                          <Badge className={`${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'} text-xs`}>
                            {project.role}
                          </Badge>
                        )}
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
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC]' : 'text-gray-600 hover:text-gray-900'} p-0`}
                        >
                          View Details
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                        {project.liveUrl && (
                          <Button 
                            variant="ghost" 
                            className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} p-0`}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                          >
                            Live Site
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </Button>
                        )}
                      </div>
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
                      href="www.linkedin.com/in/vivekkumar-developer" 
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
                      href="https://github.com/vivekkr91" 
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
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>{activeProject.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={`${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                        {activeProject.status}
                      </Badge>
                      {activeProject.role && (
                        <Badge className={`${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                          {activeProject.role}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveProject(null)}
                    className={`${darkMode ? 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                {activeProject.note && (
                  <div className={`${darkMode ? 'bg-yellow-900/20 border-yellow-700/50' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-3 mb-4`}>
                    <p className={`${darkMode ? 'text-yellow-400' : 'text-yellow-700'} text-sm font-medium`}>
                      📝 {activeProject.note}
                    </p>
                  </div>
                )}
                
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
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#F0F6FC]' : 'text-gray-900'} mb-2`}>Key Achievements</h4>
                    <ul className={`${darkMode ? 'text-[#8B949E]' : 'text-gray-600'} space-y-2`}>
                      {activeProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {activeProject.liveUrl && (
                    <Button 
                      className={`${darkMode ? 'bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
                      onClick={() => window.open(activeProject.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </Button>
                  )}
                  {activeProject.demoUrl && activeProject.demoUrl !== activeProject.liveUrl && (
                    <Button 
                      variant="outline"
                      className={`${darkMode ? 'border-[#21262D] text-[#F0F6FC] hover:bg-[#21262D]' : 'border-gray-300 text-gray-900 hover:bg-gray-100'}`}
                      onClick={() => window.open(activeProject.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  )}
                </div>
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