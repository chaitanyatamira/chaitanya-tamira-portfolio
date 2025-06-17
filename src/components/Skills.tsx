
import { Card } from '@/components/ui/card';
import { Code, Database, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development',
      icon: Database,
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'HTML/CSS'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Scikit-learn', 'TensorFlow', 'Data Analysis', 'Flask'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: ['Tailwind CSS', 'Material-UI', 'Chart.js', 'JWT'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="glass-effect p-6 hover-scale fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-muted px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
