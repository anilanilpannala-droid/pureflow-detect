import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, BarChart } from "lucide-react";
import { toast } from "sonner";

const Demo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalysis = () => {
    if (!file) {
      toast.error("Please upload a data file first");
      return;
    }

    // Simulated analysis results
    setTimeout(() => {
      setResults({
        ph: 7.2,
        turbidity: 2.5,
        temperature: 22.5,
        quality: "Good",
        status: "Safe for consumption"
      });
      toast.success("Analysis complete!");
    }, 1500);
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Try Demo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Upload sample water quality data to see our detection system in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-border bg-card shadow-card animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-card-foreground">Upload Data</CardTitle>
              <CardDescription>Upload your water sample data file (CSV or JSON format)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="file-upload">Data File</Label>
                <div className="mt-2 flex items-center gap-4">
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv,.json"
                    onChange={handleFileChange}
                    className="flex-1"
                  />
                  <Upload className="w-5 h-5 text-muted-foreground" />
                </div>
                {file && <p className="text-sm text-muted-foreground mt-2">Selected: {file.name}</p>}
              </div>
              <Button 
                onClick={handleAnalysis} 
                className="w-full bg-gradient-ocean text-white hover:opacity-90"
              >
                <BarChart className="w-4 h-4 mr-2" />
                Analyze Water Quality
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="text-card-foreground">Analysis Results</CardTitle>
              <CardDescription>Water quality assessment from uploaded data</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">pH Level</p>
                      <p className="text-2xl font-bold text-foreground">{results.ph}</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Turbidity (NTU)</p>
                      <p className="text-2xl font-bold text-foreground">{results.turbidity}</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Temperature (°C)</p>
                      <p className="text-2xl font-bold text-foreground">{results.temperature}</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Quality</p>
                      <p className="text-2xl font-bold text-primary">{results.quality}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-ocean rounded-lg text-center">
                    <p className="text-white font-semibold">{results.status}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 text-muted-foreground">
                  <p>Upload and analyze data to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;