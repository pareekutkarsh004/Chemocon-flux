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
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Get in touch with the FDP 2026 organizing committee
          </p>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-12 bg-conference-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Ready to Register?</h2>
          <p className="text-muted-foreground mb-6">
            Registration is FREE and open to all faculty members and scientists.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-conference-gold hover:bg-conference-gold-light text-primary font-semibold"
          >
            <a href="https://forms.gle/w2xclc8rz1LQvusH7" target="_blank" rel="noopener noreferrer">
              Register Now <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
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
                <Button className="w-full bg-conference-gold hover:bg-conference-gold-light text-primary">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
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
                        Uttar Pradesh, India - 211004
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-conference-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:amverma@mnnit.ac.in" className="text-conference-gold hover:underline">
                          amverma@mnnit.ac.in
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-conference-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Program Dates</h3>
                      <p className="text-muted-foreground text-sm">
                        January 05-09, 2026<br />
                        9:00 AM - 5:00 PM (IST)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
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
      </section>
    </Layout>
  );
};

export default Contact;
