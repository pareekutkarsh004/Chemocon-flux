import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gradient-navy text-primary-foreground py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Get in touch with the CHEM-CONFLUX²⁶ organizing committee
          </p>
        </div>
      </motion.section>

      {/* Registration CTA - Fixed Button with Arrow at End */}
      <section className="py-12 bg-conference-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Ready to Register?</h2>
          <p className="text-muted-foreground mb-6">
            Join us for the International Conference on Sustainable Environment & Energy Innovations.
          </p>
          <Button 
            asChild
            className="bg-conference-gold hover:bg-conference-gold-light text-primary font-semibold py-6 px-8 h-auto flex items-center gap-2 mx-auto w-fit"
          >
            <a href="https://forms.gle/w2xclc8rz1LQvusH7" target="_blank" rel="noopener noreferrer">
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section - Restored original grid and content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Your subject" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Your message..." rows={5} />
                </div>
                <Button className="w-full bg-conference-gold hover:bg-conference-gold-light text-primary py-6 h-auto font-bold">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information - Restored all 4 original cards */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-conference-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Venue</h3>
                      <p className="text-muted-foreground text-sm">
                        Department of Chemical Engineering<br />
                        Motilal Nehru National Institute of Technology<br />
                        Allahabad, Prayagraj<br />
                        Uttar Pradesh (U.P.) - 211004
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-conference-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        Office: +91-532-2271581<br />
                        Mobile: +91-9003670402<br />
                        Mobile: +91-9455421398<br />
                        Mobile: +91-8248954090
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-conference-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:chemconflux26@gmail.com" className="text-conference-gold hover:underline">
                          chemconflux26@gmail.com
                        </a>
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        For details visit: <a href="https://www.mnnit.ac.in" target="_blank" rel="noopener noreferrer" className="text-conference-gold hover:underline">www.mnnit.ac.in</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-conference-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Conference Dates</h3>
                      <p className="text-muted-foreground text-sm">
                        October 22-24, 2026<br />
                        9:00 AM - 5:00 PM (IST)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Restored original MNNIT Map iframe */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        className="py-16 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Location</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
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
      </motion.section>
    </Layout>
  );
};

export default Contact;