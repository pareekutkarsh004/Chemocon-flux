import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const committeeData = {
  patron: [
    { name: "Prof. Rama Shanker Verma", role: "Director, MNNIT Allahabad" },
  ],
  chairperson: [
    { name: "Dr. Dipesh S. Patle", role: "Head, ChED, MNNIT Allahabad" },
  ],
  conveners: [
    { name: "Prof. Sushil Kumar", role: "MNNIT Allahabad", type: "Convener/Technical Chair" },
    { name: "Dr. Dipesh S. Patle", role: "MNNIT Allahabad", type: "Convener/Technical Chair" },
    { name: "Dr. Karthick S.", role: "MNNIT Allahabad", type: "Convener/Technical Chair" },
  ],
  organizingSecretaries: [
    { name: "Prof. Sadhana Sachan", role: "MNNIT Allahabad" },
    { name: "Prof. M. Siraj Alam", role: "MNNIT Allahabad" },
    { name: "Dr. Ashish N. Sawarkar", role: "MNNIT Allahabad" },
    { name: "Dr. Suantak Kamsonlian", role: "MNNIT Allahabad" },
    { name: "Dr. Shabih Ul Hasan", role: "MNNIT Allahabad" },
    { name: "Dr. Parul Katiyar", role: "MNNIT Allahabad" },
    { name: "Dr. Manju Verma", role: "MNNIT Allahabad" },
    { name: "Dr. Dheeraj Ahuja", role: "MNNIT Allahabad" },
    { name: "Dr. Anand Mohan Verma", role: "MNNIT Allahabad" },
  ],
  advisory: [
    { name: "Prof. A.B. Pandit", role: "ICT Mumbai" },
    { name: "Prof. B. N. Thorat", role: "ICT Mumbai" },
    { name: "Prof. Shishir Sinha", role: "DG, CIPET Chennai" },
    { name: "Prof. Davide Manca", role: "Polimi, Italy" },
    { name: "Prof. G.P. Rangaiah", role: "NUS Singapore" },
    { name: "Prof. Hasan Uslu", role: "Beykent Univ., Turkey" },
    { name: "Prof. K.K. Pant", role: "Director, IIT Roorkee" },
    { name: "Prof. Nishith Verma", role: "IIT Kanpur" },
    { name: "Prof. P.K. Mishra", role: "IIT BHU" },
    { name: "Prof. R. S. Singh", role: "IIT BHU" },
    { name: "Prof. Anil Verma", role: "IIT Delhi" },
    { name: "Prof. Vimal Katiyar", role: "IIT Guwahati" },
    { name: "Prof. Zainal Ahmad", role: "USM, Malaysia" },
    { name: "Dr. Ajay Kumar", role: "Oklahoma Univ., USA" },
    { name: "Er. Sanjay Kudesia", role: "IFFCO Phulpur" },
  ],
};

const Committee = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Organizing Committee</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Meet the organizing team behind CHEM-CONFLUX²⁶
          </p>
        </div>
      </section>

      {/* Patron & Chairperson */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Patron */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-center text-conference-gold">Patron</h2>
              {committeeData.patron.map((member) => (
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
            {/* Chairperson */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-center text-conference-gold">Chairperson</h2>
              {committeeData.chairperson.map((member) => (
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
        </div>
      </section>

      {/* Conveners */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-conference-gold">Conveners / Technical Chairs</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committeeData.conveners.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
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

      {/* Organizing Secretaries */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-conference-gold">Organizing Secretaries</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {committeeData.organizingSecretaries.map((member) => (
              <Card key={member.name} className="text-center p-4">
                <div className="w-14 h-14 rounded-full bg-conference-navy/10 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-conference-navy">
                    {member.name.split(' ').slice(-1)[0][0]}
                  </span>
                </div>
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-muted-foreground text-xs">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-conference-gold">Advisory Committee</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {committeeData.advisory.map((member) => (
              <Card key={member.name} className="text-center p-4">
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-muted-foreground text-xs">{member.role}</p>
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
          <div className="space-y-2">
            <a 
              href="mailto:chemconflux26@gmail.com" 
              className="text-conference-gold hover:underline text-lg font-medium block"
            >
              chemconflux26@gmail.com
            </a>
            <p className="text-muted-foreground text-sm">
              Phone: +91-532-2271581 (O)
            </p>
            <p className="text-muted-foreground text-sm">
              Mobile: +91-9003670402, +91-9455421398, +91-8248954090
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committee;
