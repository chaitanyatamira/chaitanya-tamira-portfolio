
import { Card } from '@/components/ui/card';
import { GraduationCap, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about using technology to solve real problems and constantly pushing myself to grow both technically and creatively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="space-y-6">
              <Card className="glass-effect p-6 hover-scale">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      B.Tech at VNR VJIET, expected 2026. Focused on computer science 
                      fundamentals and emerging technologies.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6 hover-scale">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mission</h3>
                    <p className="text-muted-foreground">
                      To leverage technology in creating innovative solutions that make a 
                      positive impact on people's lives and businesses.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6 hover-scale">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Philosophy</h3>
                    <p className="text-muted-foreground">
                      Every challenge is an opportunity to learn something new. 
                      I approach problems with curiosity and persistence.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative glass-effect p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm currently pursuing my B.Tech at VNR VJIET with an expected graduation in 2026. 
                  My journey in technology started with curiosity and has evolved into a passion for 
                  creating meaningful solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I specialize in Python, Java, the MERN stack, and Machine Learning. My approach 
                  combines technical expertise with creative problem-solving, always focusing on 
                  user experience and practical applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether working on hackathons, college projects, or freelance opportunities, 
                  I bring enthusiasm, dedication, and a growth mindset to every challenge.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
