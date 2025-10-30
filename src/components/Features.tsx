import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Gauge, Thermometer, FlaskConical, AlertCircle, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Droplet,
      title: "pH Detection",
      description: "Precise monitoring of pH levels to ensure water acidity/alkalinity is within safe ranges."
    },
    {
      icon: Gauge,
      title: "Turbidity Analysis",
      description: "Measures water clarity and detects suspended particles that affect water quality."
    },
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description: "Continuous tracking of water temperature, a key indicator of ecosystem health."
    },
    {
      icon: FlaskConical,
      title: "Chemical Detection",
      description: "Identifies harmful chemicals and contaminants in water samples."
    },
    {
      icon: AlertCircle,
      title: "Real-time Alerts",
      description: "Instant notifications when water quality parameters exceed safe thresholds."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analysis",
      description: "AI-powered predictions to forecast potential water quality issues."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-wave">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced capabilities designed to provide comprehensive water quality assessment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-card shadow-card hover:shadow-ocean transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-3 inline-block p-3 bg-gradient-ocean rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;