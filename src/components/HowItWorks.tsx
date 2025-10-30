import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Brain, BarChart3, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Beaker,
      title: "Data Collection",
      description: "Sensors collect real-time data on pH levels, turbidity, temperature, and other water quality parameters."
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Machine learning algorithms analyze the collected data to identify patterns and anomalies."
    },
    {
      icon: BarChart3,
      title: "Result Processing",
      description: "The system processes the analysis and generates comprehensive quality reports."
    },
    {
      icon: CheckCircle,
      title: "Quality Assessment",
      description: "Final assessment determines if water meets safety standards and provides recommendations."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our system uses a combination of IoT sensors and artificial intelligence to provide 
            accurate, real-time water quality assessment.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-ocean -translate-y-1/2 opacity-20" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className="border-border bg-card shadow-card hover:shadow-ocean transition-all duration-300 hover:-translate-y-1 animate-fade-in-up relative"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="p-4 bg-gradient-ocean rounded-full">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center text-card-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;