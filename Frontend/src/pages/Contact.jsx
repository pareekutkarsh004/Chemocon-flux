import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
            <Mail className="w-5 h-5 text-orange-400" />
            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
              Get in Touch
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Get in touch with the CHEM-CONFLUX²⁶ organizing committee
          </p>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-12 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
            Ready to Register?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join us for the International Conference on Sustainable Environment
            & Energy Innovations.
          </p>
          <Button
            asChild
            // size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:scale-105 transition-all duration-300"
          >
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder=""
                      className="bg-card dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder=""
                      className="bg-card dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder=""
                    className="bg-card dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Subject
                  </label>
                  <Input
                    placeholder="Your subject"
                    className="bg-card dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    className="bg-card dark:bg-white/5 border-border dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:scale-[1.02] transition-all duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Venue",
                    content: (
                      <>
                        Department of Chemical Engineering
                        <br />
                        Motilal Nehru National Institute of Technology
                        <br />
                        Allahabad, Prayagraj
                        <br />
                        Uttar Pradesh (U.P.) - 211004
                      </>
                    ),
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <>
                        Office (MNNIT Allahabad), Ph No – 532-2271581
                        <br />
                        Dr. Dipesh S. Patle, Ph No – 9003670402
                        <br />
                        Prof. Sushil Kumar, Ph No – 9455421398
                        <br />
                        Dr. Karthick S., Ph No – 8248954090
                      </>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <>
                        <a
                          href="mailto:chemconflux26@gmail.com"
                          className="text-primary hover:underline"
                        >
                          chemconflux26@gmail.com
                        </a>
                        <br />
                        <span className="text-xs mt-1 block">
                          For details visit:{" "}
                          <a
                            href="https://www.mnnit.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            www.mnnit.ac.in
                          </a>
                        </span>
                      </>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Conference Dates",
                    content: (
                      <>
                        October 22-24, 2026
                        <br />
                        9:00 AM - 5:00 PM (IST)
                      </>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-foreground">
            Location
          </h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border dark:border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.9067055726!2d81.8591!3d25.4927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3c0b8b7b8d%3A0x8f8f8f8f8f8f8f8f!2sMNNIT%20Allahabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MNNIT Allahabad Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
