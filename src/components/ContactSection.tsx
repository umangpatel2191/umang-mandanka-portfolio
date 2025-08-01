
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, MessageCircle, Calendar, Zap, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AvailabilityStatus from "@/components/AvailabilityStatus";
import CalendarScheduling from "@/components/CalendarScheduling";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    "Website Development",
    "Web Application",
    "E-commerce Store",
    "Landing Page",
    "Dashboard/Admin Panel",
    "API Integration",
    "Other"
  ];

  const budgetRanges = [
    "$1K - $5K",
    "$5K - $10K",
    "$10K - $25K",
    "$25K+",
    "Let's discuss"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (formData: any) => {
    // EmailJS configuration - you'll need to set these up in EmailJS dashboard
    const serviceId = 'service_your_id'; // Replace with your EmailJS service ID
    const templateId = 'template_your_id'; // Replace with your EmailJS template ID
    const publicKey = 'your_public_key'; // Replace with your EmailJS public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
      to_email: 'umangp737@gmail.com'
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('EmailJS error:', error);
      // Fallback to mailto if EmailJS fails
      const emailContent = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
      `;

      const mailtoLink = `mailto:umangp737@gmail.com?subject=New Contact Form: ${formData.subject}&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailSent = await sendEmail(formData);

      if (emailSent) {
        toast({
          title: "Message Sent Successfully! 🚀",
          description: "Your message has been sent directly to my inbox. I'll get back to you within 24 hours!",
        });
      } else {
        toast({
          title: "Email Client Opened 📧",
          description: "Please send the email from your email client to complete the submission.",
        });
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
        timeline: ""
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "917600363306"; // India country code + your number
    const message = "Hi! I'm interested in discussing a project with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:umangp737@gmail.com";
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-accent-gradient">
            Let's Work Together
          </h2>
          <div className="w-16 h-1 accent-gradient mx-auto mb-4 rounded-full"></div>
          <p className="text-base text-gray-400 max-w-lg mx-auto">
            Have a project in mind? Let's discuss it.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Send a Message</h3>
                <p className="text-sm text-gray-400">Let's discuss your project</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-400 h-10 text-sm"
                      placeholder="Name *"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-400 h-10 text-sm"
                      placeholder="Email *"
                    />
                  </div>
                </div>

                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-400 h-10 text-sm"
                  placeholder="Subject"
                />

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-gray-800/50 border-gray-600 text-white focus:border-blue-400 resize-none text-sm"
                  placeholder="Your message *"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 text-sm transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={14} />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs mb-3">Or reach out directly</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-xs text-gray-400 hover:text-blue-400 p-2 h-auto"
                    onClick={handleEmailClick}
                  >
                    <Mail size={12} className="mr-2" />
                    umangp737@gmail.com
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-xs text-gray-400 hover:text-green-400 p-2 h-auto"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle size={12} className="mr-2" />
                    WhatsApp Chat
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-xs text-gray-400 hover:text-purple-400 p-2 h-auto"
                    onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Xx7rMk9o_z8_kp93yKlVi6Y_QjKwkPBFmwGGqjhOVvMi_QsWmVEg8qqCMRTpQEvts3Q0JQ7iB", "_blank")}
                  >
                    <Calendar size={12} className="mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
