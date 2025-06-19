import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, PiggyBank, Brain, Shield } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinBuddy',
      description: 'A comprehensive financial management app with real-time analytics, expense tracking, and budget management features.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Chart.js', 'JWT'],
      features: ['Responsive UI', 'Real-time analytics', 'Expense management', 'Budget tracking'],
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://github.com/chaitanyatamira/FinBuddy'
    },
    {
      title: 'ActiGen',
      description: 'AI-powered activity logger and resume generator that tracks progress and optimizes resumes using advanced algorithms.',
      techStack: ['React', 'Flask', 'MongoDB', 'Google Generative AI', 'Material-UI', 'Recharts'],
      features: ['AI integration', 'Progress tracking', 'Resume optimization', 'Data visualization'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://github.com/chaitanyatamira/Resume-Generator'
    },
    {
      title: 'CatchPhish',
      description: 'Advanced phishing detection system achieving 96% accuracy with real-time URL analysis and web security enhancement.',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'JavaScript'],
      features: ['96% accuracy', 'Real-time analysis', 'API integration', 'Security enhancement'],
      gradient: 'from-red-500 to-pink-500',
      link: 'https://github.com/chaitanyatamira/PhishingDetection'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects that demonstrate my passion for solving real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass-effect overflow-hidden hover-scale fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  {project.title === 'FinBuddy' && <PiggyBank className="h-7 w-7 text-green-500" />}
                  {project.title === 'ActiGen' && <Brain className="h-7 w-7 text-blue-500" />}
                  {project.title === 'CatchPhish' && <Shield className="h-7 w-7 text-blue-400" />}
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button size="lg" className="gradient-bg text-white px-8 py-3 hover:scale-105 transition-transform" asChild>
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
