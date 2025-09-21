import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a mock resume download - in real implementation, this would be an actual PDF
    toast({
      title: "Resume Download",
      description: "Resume download started! (Mock implementation - add actual PDF in production)",
    });
    
    // Mock download functionality
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFZpdmVrIEt1bWFyIC0gUmVzdW1lKQovQ3JlYXRvciAoTm90aW9uLWluc3BpcmVkIFBvcnRmb2xpbykKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDMgMCBSCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbNCAwIFJdCi9Db3VudCAxCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMyAwIFIKL01lZGlhQm94IFswIDAgNjEyIDc5Ml0KPj4KZW5kb2JqCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZgowMDAwMDAwMDA5IDAwMDAwIG4KMDAwMDAwMDA3NCAwMDAwMCBuCjAwMDAwMDAxMjEgMDAwMDAgbgowMDAwMDAwMTc4IDAwMDAwIG4KdHJhaWxlcgo8PAovU2l6ZSA1Ci9Sb290IDIgMCBSCi9JbmZvIDEgMCBSCj4+CnN0YXJ0eHJlZgoyNTUKJSVFT0Y=';
    link.download = 'Vivek_Kumar_Resume.pdf';
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
      // EmailJS configuration - These would be real values in production
      const serviceID = 'service_portfolio'; // Mock service ID
      const templateID = 'template_contact'; // Mock template ID
      const userID = 'user_portfolio'; // Mock user ID

      // Mock successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent! ✉️",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });

      // Reset form
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

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F6FC]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0D1117]/80 backdrop-blur-sm border-b border-[#21262D] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Vivek Kumar
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-[#8B949E] hover:text-[#F0F6FC] transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#F0F6FC] to-[#8B949E] bg-clip-text text-transparent">
              Vivek Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#8B949E] mb-4">
              Computer Engineering Student & Aspiring Software Developer
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#8B949E] mb-6">
              <MapPin className="w-5 h-5" />
              <span>Gaya, Bihar, India</span>
            </div>
            <p className="text-xl text-[#8B949E] mb-12 max-w-4xl mx-auto leading-relaxed">
              Building innovative solutions through code | MERN Stack Developer | AI/ML Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E] px-8 py-3 text-lg font-medium"
              >
                View My Work
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-[#21262D] text-[#F0F6FC] hover:bg-[#21262D] px-8 py-3 text-lg font-medium"
              >
                Get In Touch
                <Mail className="w-5 h-5 ml-2" />
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
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              <User className="w-8 h-8 mr-4 text-[#8B949E]" />
              About Me
            </h2>
            <Card className="bg-[#161B22] border-[#21262D] p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-[#8B949E] text-lg leading-relaxed mb-6">
                  Hi! I'm <span className="text-[#F0F6FC] font-semibold">Vivek Kumar</span>, a passionate Computer Engineering student at Government Engineering College, Banka, pursuing my Bachelor of Technology (B.Tech) in Computer Science from Bihar Engineering University (BEU), Patna (2025-2028).
                </p>
                <p className="text-[#8B949E] text-lg leading-relaxed mb-6">
                  I'm driven by the desire to solve real-world problems through technology. My journey in software development spans multiple programming languages including C++, Java, and Python, with growing expertise in the MERN stack (MongoDB, Express.js, React, Node.js).
                </p>
                <p className="text-[#8B949E] text-lg leading-relaxed">
                  Currently expanding my knowledge in AI/ML fundamentals and preparing to dive deeper into machine learning algorithms and neural networks.
                </p>
              </div>
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
              <GraduationCap className="w-8 h-8 mr-4 text-[#8B949E]" />
              Education
            </h2>
            <Card className="bg-[#161B22] border-[#21262D] p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#F0F6FC] mb-2">
                    Bachelor of Technology (B.Tech) - Computer Science
                  </h3>
                  <p className="text-xl text-[#8B949E] mb-2">Government Engineering College, Banka</p>
                  <p className="text-lg text-[#8B949E] mb-2">Bihar Engineering University (BEU), Patna</p>
                  <Badge className="bg-[#21262D] text-[#8B949E]">2025 - 2028</Badge>
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
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              <Code2 className="w-8 h-8 mr-4 text-[#8B949E]" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {mockData.skills.map((category, index) => (
                <Card key={index} className="bg-[#161B22] border-[#21262D] p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#F0F6FC]">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-[#21262D] text-[#8B949E] hover:bg-[#30363D] transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
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
              <Briefcase className="w-8 h-8 mr-4 text-[#8B949E]" />
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#161B22] border-[#21262D] p-6 h-full cursor-pointer hover:border-[#30363D] transition-colors">
                    <div onClick={() => setActiveProject(project)}>
                      <h3 className="text-xl font-semibold mb-3 text-[#F0F6FC]">{project.title}</h3>
                      <p className="text-[#8B949E] mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            className="bg-[#21262D] text-[#8B949E] text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-[#8B949E] hover:text-[#F0F6FC] p-0"
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
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              <Mail className="w-8 h-8 mr-4 text-[#8B949E]" />
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#F0F6FC]">Let's Connect</h3>
                <p className="text-[#8B949E] text-lg mb-8 leading-relaxed">
                  Open to Software Development Internships, AI/ML Research Opportunities, and Collaborations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#8B949E]" />
                    <span className="text-[#8B949E]">vivek888gaya@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-5 h-5 text-[#8B949E]" />
                    <a 
                      href="https://www.linkedin.com/in/vivekkumar-285708383" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8B949E] hover:text-[#F0F6FC] transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-[#8B949E]" />
                    <span className="text-[#8B949E]">Gaya, Bihar, India</span>
                  </div>
                </div>
                <Button 
                  onClick={handleDownloadResume}
                  className="mt-8 bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              <Card className="bg-[#161B22] border-[#21262D] p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#F0F6FC] mb-2">Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#0D1117] border border-[#21262D] rounded-md px-4 py-3 text-[#F0F6FC] focus:border-[#8B949E] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F0F6FC] mb-2">Email</label>
                    <input 
                      type="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#0D1117] border border-[#21262D] rounded-md px-4 py-3 text-[#F0F6FC] focus:border-[#8B949E] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F0F6FC] mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-[#0D1117] border border-[#21262D] rounded-md px-4 py-3 text-[#F0F6FC] focus:border-[#8B949E] focus:outline-none resize-none transition-colors"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0D1117] mr-2"></div>
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
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#161B22] border border-[#21262D] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-[#F0F6FC]">{activeProject.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveProject(null)}
                  className="text-[#8B949E] hover:text-[#F0F6FC]"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-[#8B949E] text-lg leading-relaxed mb-6">
                {activeProject.longDescription}
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#F0F6FC] mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-[#21262D] text-[#8B949E]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F0F6FC] mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-[#8B949E] space-y-1">
                    {activeProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {activeProject.demoUrl && (
                <Button className="bg-[#F0F6FC] text-[#0D1117] hover:bg-[#8B949E]">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#21262D] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#8B949E] mb-4">
            © 2025 Vivek Kumar. Built with React and passion for clean code.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:vivek888gaya@gmail.com" className="text-[#8B949E] hover:text-[#F0F6FC] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/vivekkumar-285708383" target="_blank" rel="noopener noreferrer" className="text-[#8B949E] hover:text-[#F0F6FC] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8B949E] hover:text-[#F0F6FC] transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;