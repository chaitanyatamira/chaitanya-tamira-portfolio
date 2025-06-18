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
                      B.Tech at VNR VJIET, expected 2026. Specialising in Computer Science Artificial Intelligence and Machine Learning Engineering. Focused on emerging technologies.
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
              <Card className="relative glass-effect p-8 hover-scale">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Why Work With Me?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 mt-2 rounded-full bg-purple-400 mr-3"></span>
                    <span className="text-muted-foreground leading-relaxed">Eager to learn and adapt to new technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 mt-2 rounded-full bg-pink-400 mr-3"></span>
                    <span className="text-muted-foreground leading-relaxed">Strong problem-solving and analytical skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 mt-2 rounded-full bg-blue-400 mr-3"></span>
                    <span className="text-muted-foreground leading-relaxed">Committed to delivering high-quality results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 mt-2 rounded-full bg-green-400 mr-3"></span>
                    <span className="text-muted-foreground leading-relaxed">Creative approach to technical challenges</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
