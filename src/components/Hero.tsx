import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up visible">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-500 p-2">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/chaitu_pic.jpg"
                    alt="Chaitanya Tamira"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Chaitanya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            A curious and creative individual who enjoys building smart tech solutions. 
            I take on every challenge with a mindset to learn, build, and deliver results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-bg text-white px-8 py-3 hover:scale-105 transition-transform"
              onClick={() => {
                const section = document.getElementById('portfolio');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:scale-105 transition-transform"
              asChild
            >
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Animated Character Scroll Down Indicator */}
      <div className="absolute left-1/2 bottom-3 transform -translate-x-1/2 flex flex-col items-center z-20">
        <div className="animate-bounce">
          <img
            src="/hairy-purple-alien-monster-cartoon-character.png"
            alt="Scroll Down Character"
            className="w-[50px] h-[50px] object-contain rounded-full shadow-lg"
          />
        </div>
        <div className="mt-0.5 px-3 py-0.5 rounded-full text-xs font-semibold shadow-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white border-2 border-white">
          Scroll down
        </div>
      </div>
    </section>
  );
};

export default Hero;