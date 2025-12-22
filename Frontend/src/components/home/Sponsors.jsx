import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, BookOpen, Users } from "lucide-react";

// Helper component for the counting animation
function CountUp({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract the number from the string (e.g., "₹4,00,000" -> 400000)
  const numericValue = parseInt(value.replace(/[₹,]/g, ""), 10);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      ₹{displayValue.toLocaleString("en-IN")}
    </span>
  );
}

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
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section with Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-conference-gold font-medium mb-2 tracking-wider text-sm uppercase">Support Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Sponsorship Opportunities
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The organizing committee requests support in the form of sponsorship from Government and private organizations for the success of this mega event.
          </p>
        </motion.div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Sponsorship Categories
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div 
                key={tier.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-conference-gold/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4 shadow-inner`}>
                  <Award className="w-8 h-8 text-conference-navy" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{tier.category}</h3>
                <p className="text-3xl font-bold text-conference-gold mb-4">
                  <CountUp value={tier.amount} />
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{tier.delegates} Free Delegates</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Souvenir Sponsorship */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Souvenir Sponsorship
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {souvenirSponsorship.map((item, index) => (
              <motion.div 
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-conference-gold/50 hover:shadow-lg transition-all duration-300 w-64 text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-conference-gold" />
                </div>
                <p className="text-foreground font-medium mb-2">{item.type}</p>
                <p className="text-xl font-bold text-conference-gold">
                  <CountUp value={item.amount} />
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for Sponsorship */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            For sponsorship inquiries, contact: {" "}
            <a href="mailto:chemconflux26@gmail.com" className="text-conference-gold hover:underline font-medium">
              chemconflux26@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}