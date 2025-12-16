import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const committeeData = {
  conveners: [
    { name: "Dr. Dipesh S. Patle", role: "Assistant Professor, Chemical Engineering, MNNIT", type: "Convener" },
    { name: "Prof. Sushil Kumar", role: "Professor, Chemical Engineering, MNNIT", type: "Coordinator" },
    { name: "Dr. Anand Mohan Verma", role: "Assistant Professor, Chemical Engineering, MNNIT", type: "Coordinator" },
  ],
  organizing: [
    { name: "Prof. R. S. Verma", role: "Director, MNNIT Allahabad" },
    { name: "Prof. S. Kumar", role: "HOD, Chemical Engineering, MNNIT" },
  ],
};

const Committee = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Committee</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Meet the organizing team behind the Faculty Development Program
          </p>
        </div>
      </section>

      {/* Patrons */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Patrons</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {committeeData.organizing.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-conference-navy/10 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-conference-navy">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-base">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conveners & Coordinators */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Conveners & Coordinators</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committeeData.conveners.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-conference-gold font-medium text-sm">{member.type}</p>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-4">
            For any queries, please contact:
          </p>
          <a 
            href="mailto:amverma@mnnit.ac.in" 
            className="text-conference-gold hover:underline text-lg font-medium"
          >
            amverma@mnnit.ac.in
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Committee;
