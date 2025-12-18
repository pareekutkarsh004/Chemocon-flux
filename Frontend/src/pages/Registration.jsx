import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Send, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const registrationFees = [
  { category: "Delegates from academics/Industries/Govt. org", earlyBird: "₹ 5900/-", standard: "₹ 7080/-" },
  { category: "PG Students/Research Scholars", earlyBird: "₹ 3540/-", standard: "₹ 4130/-" },
  { category: "UG students", earlyBird: "₹ 1770/-", standard: "₹ 2360/-" },
  { category: "Foreign Delegates/participants", earlyBird: "$ 295/-", standard: "$ 354/-" },
  { category: "Foreign accompanying person", earlyBird: "$ 118/-", standard: "$ 118/-" },
];

const importantDates = [
  { event: "Submission of Abstract", date: "August 15, 2026" },
  { event: "Intimation of Acceptance", date: "August 30, 2026" },
  { event: "Registration Deadline", date: "September 25, 2026" },
];

const Registration = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Registration
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Register for CHEM-CONFLUX²⁶ - International Conference on
            Sustainable Environment & Energy Innovations
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 bg-conference-gold/10 border-b border-conference-gold/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">
            Important Dates
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-lg border border-border"
              >
                <Calendar className="w-5 h-5 text-conference-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                  <p className="font-semibold text-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-16 bg-background" id="registration-fees">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-conference-gold font-medium mb-2">
              REGISTRATION FEE
            </p>
            <h2 className="font-display text-3xl font-bold mb-2">
              Conference Registration
            </h2>
            <p className="text-muted-foreground">
              Early Bird Registration till August 30, 2026
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="gradient-navy text-primary-foreground">
                  <th className="p-4 text-left border border-border/30">
                    Delegates
                  </th>
                  <th className="p-4 text-center border border-border/30">
                    <div>Early Bird</div>
                    <div className="text-xs font-normal opacity-80">
                      (till August 30, 2026)
                    </div>
                    <div className="text-xs font-normal opacity-80">
                      (including GST)
                    </div>
                  </th>
                  <th className="p-4 text-center border border-border/30">
                    <div>Standard Registration</div>
                    <div className="text-xs font-normal opacity-80">
                      (including GST)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}
                  >
                    <td className="p-4 border border-border font-medium">
                      {fee.category}
                    </td>
                    <td className="p-4 text-center border border-border font-bold text-conference-gold">
                      {fee.earlyBird}
                    </td>
                    <td className="p-4 text-center border border-border font-semibold">
                      {fee.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Methods */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-conference-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold mb-3">
                    Payment Methods
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-conference-gold mt-1 flex-shrink-0" />
                      <span>
                        Local Cheque or Demand Draft in favour of{" "}
                        <strong className="text-foreground">
                          "chemconflux26"
                        </strong>
                        , payable at Prayagraj along with registration form
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-conference-gold mt-1 flex-shrink-0" />
                      <span>Net Banking / Online Payment (see below)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Online Payment Button */}
            <div className="bg-conference-gold/10 rounded-lg p-8 border border-conference-gold/30 text-center">
              <h3 className="font-display text-xl font-bold mb-3">
                Pay Online
              </h3>
              <p className="text-muted-foreground mb-6">
                Complete your registration by paying securely through our online
                payment portal
              </p>
              <Button
                size=""
                className="bg-conference-gold hover:bg-conference-gold/90 text-conference-navy font-bold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Pay Registration Fee Online
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                You will be redirected to a secure payment gateway
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Submission */}
      <section className="py-16 bg-muted/50" id="paper-submission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-conference-gold font-medium mb-2">
              PAPER SUBMISSION
            </p>
            <h2 className="font-display text-3xl font-bold mb-2">
              Submit Your Research
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-conference-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome submissions on original research, reviews and
                    case studies on topics related to the thrust areas of the
                    conference.
                  </p>

                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">
                      Abstract Format (One Page)
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Abstract should be written in MS Word (A4 size pages)
                      containing:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Page Setup:</strong> A4 size pages with 1 inch
                          margin on all sides
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Font:</strong> Times New Roman, single line
                          spacing, 12 font size
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Title of Paper:</strong> Bold, 14 font size
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Author(s) Name:</strong> Bold, 12 font size
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Affiliation:</strong> 12 font size (mention
                          corresponding author)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-conference-gold font-bold">
                          •
                        </span>
                        <span>
                          <strong>Keywords:</strong> Maximum 5 keywords
                          (italics)
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Submission Methods */}
                  <div className="bg-conference-gold/10 rounded-lg p-6">
                    <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                      <Send className="w-5 h-5 text-conference-gold" />
                      Submission Methods
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      The extended abstract can be submitted through:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-conference-gold hover:bg-conference-gold/90 text-conference-navy font-bold">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Submit via Online Portal
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-conference-gold text-conference-gold hover:bg-conference-gold/10"
                      >
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Paper Submission for CHEM-CONFLUX’26"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Email to chemconflux26@gmail.com
                          </span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Registration */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Need Help with Registration?
          </h2>
          <p className="text-muted-foreground mb-6">
            For any queries regarding registration, payment, or paper
            submission, please contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chemconflux26@gmail.com"
              className="inline-flex items-center gap-2 text-conference-gold hover:underline font-semibold"
            >
              <Send className="w-4 h-4" />
              chemconflux26@gmail.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a
              href="tel:+919003670402"
              className="text-foreground hover:text-conference-gold"
            >
              +91-9003670402
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
