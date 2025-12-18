import { Layout } from "@/components/layout/Layout";
import { Award, BookOpen, Target, Globe, CheckCircle, Building, Home, GraduationCap, FileText, CreditCard, Users, Send } from "lucide-react";
import mnnitCampus1 from "@/assets/mnnit-campus-1.jpeg";
import mnnitCampus2 from "@/assets/mnnit-campus-2.jpeg";
import mnnitCampus3 from "@/assets/mnnit-campus-3.jpeg";

const objectives = [
  "Provide a forum for academicians, engineers, scientists and practitioners to exchange ideas",
  "Present recent technological developments in sustainable energy and environment",
  "Discuss green technology and climate change solutions",
  "Establish business or research relations for future collaboration",
  "Share knowledge on innovative technologies for energy conservation",
];

const registrationFees = [
  { category: "Delegates from Academics/Industries/Govt. Org", earlyBird: "₹5,900", standard: "₹7,080" },
  { category: "PG Students/Research Scholars", earlyBird: "₹3,540", standard: "₹4,130" },
  { category: "UG Students", earlyBird: "₹1,770", standard: "₹2,360" },
  { category: "Foreign Delegates/Participants", earlyBird: "$295", standard: "$354" },
  { category: "Foreign Accompanying Person", earlyBird: "$118", standard: "$118" },
];

const participants = [
  "Faculty Members",
  "Scientists",
  "Research Scholars",
  "UG & PG Scholars",
  "Industrial Representatives",
  "Other Academicians",
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="gradient-navy text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About CHEM-CONFLUX²⁶</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            International Conference on Sustainable Environment & Energy Innovations
          </p>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-16 bg-background" id="about">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-conference-gold font-medium mb-2">CONFERENCE OVERVIEW</p>
              <h2 className="font-display text-3xl font-bold mb-6">About the Conference</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CHEM-CONFLUX²⁶ is a multi-disciplinary international conference that intends to cover 
                the thrust areas concerning sustainable development of energy and environment. Energy 
                is essential to society and has made considerable impact on the environment as a 
                consequence of large-scale energy-related human activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Despite the fact that energy and environment concerns were earlier local in nature, 
                they are currently regional and global such as acid rain and the greenhouse effect. 
                These issues have now become dominating political issues and the subject of 
                international focus and regulation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Inaugural function and Keynote address will be held in Institute Seminar Hall.
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

      {/* Objectives */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">OUR GOALS</p>
            <h2 className="font-display text-3xl font-bold mb-4">Conference Objectives</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-conference-gold flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Participants */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">WHO CAN ATTEND</p>
            <h2 className="font-display text-3xl font-bold mb-4">Eligible Participants</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {participants.map((participant, index) => (
              <div key={index} className="flex items-center gap-2 bg-card px-4 py-3 rounded-full border border-border">
                <Users className="w-4 h-4 text-conference-gold" />
                <span className="text-foreground font-medium">{participant}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Submission */}
      <section className="py-16 bg-muted/50" id="paper-submission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">SUBMISSIONS</p>
            <h2 className="font-display text-3xl font-bold mb-4">Paper Submission Guidelines</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-conference-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-4">Submission Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We welcome submissions on original research, reviews and case studies on topics 
                    related to the thrust areas of the conference.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Abstract Format (One Page):</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• <strong>Page Size:</strong> A4 with 1 inch margin on all sides</li>
                      <li>• <strong>Font:</strong> Times New Roman, single line spacing</li>
                      <li>• <strong>Title:</strong> Bold, 14 font size</li>
                      <li>• <strong>Author(s) Name:</strong> Bold, 12 font size</li>
                      <li>• <strong>Affiliation:</strong> 12 font size (mention corresponding author)</li>
                      <li>• <strong>Keywords:</strong> Maximum 5 keywords (italics)</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 p-4 bg-conference-gold/10 rounded-lg">
                    <Send className="w-5 h-5 text-conference-gold" />
                    <p className="text-foreground">
                      Submit via online portal or email to: {" "}
                      <a href="mailto:chemconflux26@gmail.com" className="text-conference-gold font-semibold hover:underline">
                        chemconflux26@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-16 bg-background" id="registration">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">REGISTRATION</p>
            <h2 className="font-display text-3xl font-bold mb-4">Registration Fees</h2>
            <p className="text-muted-foreground">Early Bird deadline: August 30, 2026</p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="gradient-navy text-primary-foreground">
                  <th className="p-4 text-left rounded-tl-lg">Category</th>
                  <th className="p-4 text-center">Early Bird (till Aug 30)</th>
                  <th className="p-4 text-center rounded-tr-lg">Standard</th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                    <td className="p-4 border-b border-border">{fee.category}</td>
                    <td className="p-4 text-center border-b border-border font-semibold text-conference-gold">{fee.earlyBird}</td>
                    <td className="p-4 text-center border-b border-border">{fee.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * All fees include GST
            </p>
          </div>

          {/* Payment Methods */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-conference-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Payment Methods</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Local Cheque or Demand Draft in favor of <strong>"CHEMCONFLUX26"</strong>, payable at Prayagraj</li>
                    <li>• Net Banking (visit event website for details)</li>
                  </ul>
                </div>
              </div>
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
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <Globe className="w-7 h-7 text-conference-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-4">The Sacred Confluence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prayagraj, formerly known as Allahabad, is one of the largest and historically 
                    significant cities of Uttar Pradesh. It is renowned for being the sacred confluence 
                    (Sangam) of three rivers—Ganga, Yamuna, and the mythical Saraswati. The city holds 
                    immense cultural and spiritual importance and is a major center for learning and 
                    heritage. Prayagraj is well connected to major cities across India via air, rail, 
                    and road networks, making it easily accessible for visitors from all regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About MNNIT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">HOST INSTITUTION</p>
            <h2 className="font-display text-3xl font-bold mb-4">About MNNIT Allahabad</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-conference-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-4">Institute of National Importance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Motilal Nehru National Institute of Technology (MNNIT) Allahabad, Prayagraj is an 
                    Institute with total commitment to quality and excellence in academic pursuits. It 
                    was established in the year 1961 as a joint enterprise of Government of India and 
                    Government of Uttar Pradesh as MNREC, and was an associated college of University 
                    of Allahabad.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    On June 26, 2002 MNREC was transformed into National Institute of Technology fully 
                    funded by Government of India. The Institute has been granted the status of 
                    institution of national importance w.e.f. 15th August 2007.
                  </p>
                </div>
              </div>
            </div>

            {/* About the Department */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                  <Building className="w-7 h-7 text-conference-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-4">Department of Chemical Engineering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Chemical Engineering Department at MNNIT Allahabad was established as a new academic 
                    unit under Mechanical Engineering in 2006. The department offers B.Tech., M.Tech. and 
                    Ph.D. programs in Chemical Engineering. The chemical engineering department strives to 
                    impart high quality technical education with a fine balance of fundamental knowledge, 
                    practical exposure and novel concepts. The department is endued with young, vibrant 
                    and dynamic faculty well qualified to impart high quality teaching and research in 
                    conventional and frontier areas of Chemical Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-conference-gold font-medium mb-2">STAY</p>
            <h2 className="font-display text-3xl font-bold mb-4">Accommodation</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-conference-gold" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">On-Campus Accommodation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Accommodation in Guest House/Hostels of the Institute will be provided on payment 
                basis with an advance request. Please indicate your accommodation requirements in 
                the registration form.
              </p>
              <p className="text-sm text-muted-foreground">
                For accommodation queries, contact: <a href="mailto:chemconflux26@gmail.com" className="text-conference-gold hover:underline">chemconflux26@gmail.com</a>
              </p>
            </div>
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
