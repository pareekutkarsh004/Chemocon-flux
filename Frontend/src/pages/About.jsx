import { Layout } from "@/components/layout/Layout";
import { Award, BookOpen, Target, Globe, CheckCircle } from "lucide-react";
import mnnitCampus1 from "@/assets/mnnit-campus-1.jpeg";
import mnnitCampus2 from "@/assets/mnnit-campus-2.jpeg";
import mnnitCampus3 from "@/assets/mnnit-campus-3.jpeg";

const programHighlights = [
  "Advanced optimization and control techniques for chemical process systems",
  "Insights into plantwide control strategies",
  "Machine Learning (ML) tools for process modeling",
  "Blend of theoretical foundations, computational practice, and case studies",
  "Two expert lectures per day",
  "Afternoon hands-on sessions",
  "Certificate of participation for all attendees",
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About FDP 2026</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Faculty Development Program on Intelligent Optimization and Control of Chemical Processes
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-conference-gold font-medium mb-2">PROGRAM OVERVIEW</p>
              <h2 className="font-display text-3xl font-bold mb-6">About the Program</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The ANRF Sponsored Faculty Development Program on "Intelligent Optimization and 
                Control of Chemical Processes" is designed to provide faculty members and 
                scientists with comprehensive knowledge on modern optimization and control 
                techniques used in the chemical process industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The program brings together leading experts from prestigious institutions 
                worldwide including NUS Singapore, POLIMI Italy, USM Malaysia, IIT Kanpur, 
                S. Qaboos University Oman, and MNNIT Allahabad.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Participants will gain hands-on experience with industry-standard tools 
                like AspenTech and MATLAB through afternoon practical sessions.
              </p>
            </div>
            <div>
              <img
                src={mnnitCampus3}
                alt="MNNIT Allahabad Campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">WHAT YOU'LL LEARN</p>
            <h2 className="font-display text-3xl font-bold mb-4">Program Highlights</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {programHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-conference-gold flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Fee */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-conference-gold" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Who Can Attend</h3>
              <p className="text-muted-foreground">
                Faculty members and Scientists from academic institutions, research 
                organizations, and industry are eligible to attend the program.
              </p>
            </div>
            <div className="bg-conference-gold/10 p-8 rounded-lg border border-conference-gold/30">
              <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-conference-gold" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Registration Fee</h3>
              <p className="text-3xl font-display font-bold text-conference-gold mb-2">FREE</p>
              <p className="text-muted-foreground">
                There is no registration fee for this ANRF sponsored program. 
                Certificate will be provided upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Prayagraj */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">HOST CITY</p>
            <h2 className="font-display text-3xl font-bold mb-4">About Prayagraj</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prayagraj (formerly Allahabad) is a historic city in Uttar Pradesh, India, 
              known for its rich cultural heritage, spiritual significance, and educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <img
              src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&h=400&fit=crop"
              alt="Triveni Sangam Prayagraj"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1621427642795-c72edbecea1c?w=600&h=400&fit=crop"
              alt="Prayagraj City"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1558431382-f1e5f4d4a7c4?w=600&h=400&fit=crop"
              alt="Heritage Architecture"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-display text-xl font-bold mb-4">About MNNIT Allahabad</h3>
            <p className="text-muted-foreground leading-relaxed">
              Motilal Nehru National Institute of Technology (MNNIT) Allahabad is one of the 
              premier technical institutes in India, established in 1961. It is one of the 
              31 NITs in India and is recognized as an Institute of National Importance. 
              MNNIT offers undergraduate, postgraduate, and doctoral programs in various 
              branches of engineering, sciences, and management. The Department of Chemical 
              Engineering at MNNIT is renowned for its excellence in research and education.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">VENUE</p>
            <h2 className="font-display text-3xl font-bold mb-4">MNNIT Campus</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src={mnnitCampus1}
              alt="MNNIT Campus View 1"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src={mnnitCampus2}
              alt="MNNIT Campus View 2"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src={mnnitCampus3}
              alt="MNNIT Campus View 3"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
