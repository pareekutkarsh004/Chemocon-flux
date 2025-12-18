import { Award, BookOpen, Users } from "lucide-react";

export function Sponsors() {
  const sponsorshipTiers = [
    { category: "Platinum", amount: "₹4,00,000", delegates: "04", color: "from-slate-300 to-slate-100" },
    { category: "Gold", amount: "₹2,00,000", delegates: "03", color: "from-yellow-400 to-yellow-200" },
    { category: "Silver", amount: "₹1,00,000", delegates: "02", color: "from-gray-400 to-gray-200" },
  ];

  const souvenirSponsorship = [
    { type: "Inside Full Page", amount: "₹50,000" },
    { type: "Inside Half Page", amount: "₹25,000" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-conference-gold font-medium mb-2 tracking-wider text-sm uppercase">Support Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Sponsorship Opportunities
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The organizing committee requests support in the form of sponsorship from Government and private organizations for the success of this mega event.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Sponsorship Categories
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sponsorshipTiers.map((tier) => (
              <div 
                key={tier.category}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-conference-gold/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                  <Award className="w-8 h-8 text-conference-navy" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{tier.category}</h3>
                <p className="text-3xl font-bold text-conference-gold mb-4">{tier.amount}</p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{tier.delegates} Free Delegates</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Souvenir Sponsorship */}
        <div>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Souvenir Sponsorship
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {souvenirSponsorship.map((item) => (
              <div 
                key={item.type}
                className="group bg-card border border-border rounded-xl p-6 hover:border-conference-gold/50 hover:shadow-lg transition-all duration-300 w-64 text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-conference-gold" />
                </div>
                <p className="text-foreground font-medium mb-2">{item.type}</p>
                <p className="text-xl font-bold text-conference-gold">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Sponsorship */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            For sponsorship inquiries, contact: {" "}
            <a href="mailto:chemconflux26@gmail.com" className="text-conference-gold hover:underline font-medium">
              chemconflux26@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
