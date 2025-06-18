import { Card } from '@/components/ui/card';
import { Code, Database, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: ['HTML/CSS', 'React', 'Tailwind CSS'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'Flask', 'JWT'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI / Machine Learning',
      icon: Brain,
      skills: [
        'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Pandas', 'NumPy', 'Matplotlib','OpenCV'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Ecosystem & LLMs',
      icon: Brain,
      skills: ['OpenAI', 'Hugging Face', 'LangChain'],
      color: 'from-indigo-500 to-violet-500'
    },
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
          {skillCategories.slice(0, 4).map((category, index) => (
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
          <div className="hidden lg:block"></div>
          {skillCategories.slice(4).map((category, index) => (
            <Card key={category.title} className="glass-effect p-6 hover-scale fade-in-up" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
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
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
