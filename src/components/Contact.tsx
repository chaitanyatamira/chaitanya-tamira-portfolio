
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chaitanya.tamira@example.com',
      link: 'mailto:chaitanya.tamira@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 12345 67890',
      link: 'tel:+911234567890'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/chaitanya-tamira'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/chaitanya-tamira'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in-up">
            <Card className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 bg-primary/10 p-4 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <social.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-muted-foreground text-sm">Connect with me</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <Card className="glass-effect p-8 fade-in-up">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Project Discussion" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Tell me about your project..." rows={6} />
              </div>
              <Button className="w-full gradient-bg text-white">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
