import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Target, Globe } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Droplets,
      title: "Water Safety",
      description: "Ensure access to clean and safe drinking water through advanced detection methods."
    },
    {
      icon: Target,
      title: "Early Detection",
      description: "Identify water contamination and quality issues before they affect communities."
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Protect aquatic ecosystems and promote sustainable water resource management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-wave">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About the Project</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our Water Quality Detection System leverages cutting-edge technology and AI to monitor 
            and analyze water quality parameters in real-time, ensuring safe and clean water for all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {objectives.map((obj, index) => (
            <Card 
              key={index} 
              className="border-border bg-card shadow-card hover:shadow-ocean transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-ocean rounded-full">
                    <obj.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{obj.title}</h3>
                <p className="text-muted-foreground">{obj.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;