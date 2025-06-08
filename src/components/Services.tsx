
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Brain, Smartphone, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Creating responsive, user-friendly websites with modern technologies and best practices.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'SEO Friendly'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Building intelligent applications that leverage data to solve complex business problems.',
      features: ['Predictive Analytics', 'Data Processing', 'Custom AI Models', 'API Integration'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Full-Stack Applications',
      description: 'End-to-end application development using the MERN stack and modern frameworks.',
      features: ['Database Design', 'API Development', 'Real-time Features', 'Cloud Deployment'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions for unique business requirements and technical challenges.',
      features: ['Problem Analysis', 'Custom Solutions', 'Code Optimization', 'Technical Consulting'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="glass-effect p-8 hover-scale fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${service.gradient}`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <Card className="glass-effect p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Why Choose My Services?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">96%</div>
                <p className="text-muted-foreground">Project Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
