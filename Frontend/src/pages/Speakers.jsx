import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Globe } from "lucide-react";

const speakers = [
  {
    name: "Prof. G. P. Rangaiah",
    affiliation: "NUS Singapore",
    country: "Singapore",
    expertise: "Process Optimization & Control",
  },
  {
    name: "Prof. Davide Manca",
    affiliation: "POLIMI",
    country: "Italy",
    expertise: "Chemical Process Systems",
  },
  {
    name: "Prof. Zainal Ahmad",
    affiliation: "USM",
    country: "Malaysia",
    expertise: "Process Modeling",
  },
  {
    name: "Prof. Nitin Kaistha",
    affiliation: "IIT Kanpur",
    country: "India",
    expertise: "Plantwide Control",
  },
  {
    name: "Dr. Dipesh S. Patle",
    affiliation: "MNNIT Allahabad",
    country: "India",
    expertise: "Process Intensification",
  },
  {
    name: "Dr. Ashish M. Gujarathi",
    affiliation: "S. Qaboos University",
    country: "Oman",
    expertise: "Multiobjective Optimization",
  },
  {
    name: "Prof. Sushil Kumar",
    affiliation: "MNNIT Allahabad",
    country: "India",
    expertise: "Chemical Engineering",
  },
  {
    name: "Dr. Anand Mohan Verma",
    affiliation: "MNNIT Allahabad",
    country: "India",
    expertise: "Machine Learning in Process Control",
  },
];

const Speakers = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Speakers</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Distinguished experts from world-renowned institutions
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">CONFIRMED SPEAKERS</p>
            <h2 className="font-display text-3xl font-bold mb-4">Expert Faculty</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from leading researchers and practitioners in chemical process optimization and control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card 
                key={speaker.name} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:border-conference-gold/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-conference-navy to-conference-navy-light mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-conference-gold">
                      {speaker.name.split(' ').slice(-2).map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{speaker.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4 text-conference-gold" />
                    <span>{speaker.affiliation}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-conference-gold" />
                    <span>{speaker.country}</span>
                  </div>
                  <p className="text-xs text-conference-gold font-medium pt-2">
                    {speaker.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">SCHEDULE</p>
            <h2 className="font-display text-3xl font-bold mb-4">Program Structure</h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-display text-xl font-bold mb-4 text-conference-gold">Morning Sessions</h3>
              <p className="text-muted-foreground">
                Two expert lectures per day covering theoretical foundations and 
                advanced concepts in process optimization and control.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-display text-xl font-bold mb-4 text-conference-gold">Afternoon Sessions</h3>
              <p className="text-muted-foreground">
                Hands-on practical sessions using industry-standard tools like 
                AspenTech and MATLAB for computational practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
