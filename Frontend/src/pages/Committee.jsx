import { Layout } from "@/components/layout/Layout";
import { Users, Sparkles, Mail, Phone } from "lucide-react";

const committeeData = {
  patron: [
    { name: "Prof. Rama Shanker Verma", role: "Director, MNNIT Allahabad" },
  ],
  chairperson: [
    { name: "Dr. Dipesh S. Patle", role: "Head, ChED, MNNIT Allahabad" },
  ],
  conveners: [
    {
      name: "Prof. Sushil Kumar",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
    },
    {
      name: "Dr. Dipesh S. Patle",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
    },
    {
      name: "Dr. Karthick S.",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
    },
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
  technicalSupport: [
    { name: "Mr Abdul Rehman", role: "Technical Support" },
    { name: "Vansh", role: "Technical Support" },
    { name: "Vivek Kumar Sulaniya", role: "Technical Support" },
    { name: "Utkarsh Pareek", role: "Technical Support" },
  ],
};

const MemberCard = ({ member, size = "default" }) => {
  const sizeClasses = {
    large: "w-20 h-20 text-2xl",
    default: "w-16 h-16 text-xl",
    small: "w-12 h-12 text-sm",
    tiny: "w-10 h-10 text-xs",
  };

  return (
    <div className="group bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center">
      <div
        className={`${sizeClasses[size]} rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300`}
      >
        <span className="font-display font-bold text-primary">
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
        {member.name}
      </p>
      <p className="text-muted-foreground text-xs mt-1">{member.role}</p>
    </div>
  );
};

const Committee = () => {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-orange-400" />
            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
              Our Team
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Organizing Committee
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Meet the distinguished team behind CHEM-CONFLUX²⁶
          </p>
        </div>
      </section>

      {/* Patron & Chairperson */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-center text-primary">
                Patron
              </h2>
              {committeeData.patron.map((member) => (
                <MemberCard key={member.name} member={member} size="large" />
              ))}
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-center text-primary">
                Chairperson
              </h2>
              {committeeData.chairperson.map((member) => (
                <MemberCard key={member.name} member={member} size="large" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conveners */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-primary">
            Conveners / Technical Chairs
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committeeData.conveners.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Secretaries */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-primary">
            Organizing Secretaries
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {committeeData.organizingSecretaries.map((member) => (
              <MemberCard key={member.name} member={member} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-primary">
            Advisory Committee
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {committeeData.advisory.map((member) => (
              <MemberCard key={member.name} member={member} size="tiny" />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-primary">
            Technical Support
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {committeeData.technicalSupport.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground mb-6">
            For any queries, please contact:
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:chemconflux26@gmail.com"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 px-6 py-3 rounded-full border border-primary/30 text-primary font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              chemconflux26@gmail.com
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +91-532-2271581 (O)
              </span>
              <span>+91-9003670402</span>
              <span>+91-9455421398</span>
              <span>+91-8248954090</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committee;
