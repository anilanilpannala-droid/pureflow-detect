import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2 } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-wave">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated individuals working towards cleaner water for all
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-border bg-card shadow-card animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-ocean rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground">Project Developer</h3>
              </div>
              <div className="pl-14">
                <p className="text-lg font-medium text-foreground mb-2">Kunchapu Gowthami</p>
                <p className="text-muted-foreground">Lead Developer & Researcher</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-ocean rounded-full">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground">Supporting Organizations</h3>
              </div>
              <div className="pl-14 space-y-4">
                <div>
                  <p className="text-lg font-medium text-foreground">Magic Bus India Foundation</p>
                  <p className="text-muted-foreground">Project Partner & Mentor Organization</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">IBM</p>
                  <p className="text-muted-foreground">Technology Partner</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;