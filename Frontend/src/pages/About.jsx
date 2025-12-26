import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Building,
  Home,
  GraduationCap,
  FileText,
  CreditCard,
  Users,
  Send,
  Target,
  Sparkles,
  Calendar,
  MapPin,
} from "lucide-react";
import mnnitCampus3 from "@/assets/mnnit-campus-3.jpeg";
import PrayagrajCarousel from "@/components/about/PrayagrajCarousel";
import MNNITCarousel from "@/components/about/MNNITCarousel";

const objectives = [
  {
    text: "Provide a forum for academicians, engineers, scientists and practitioners to exchange ideas",
    icon: Users,
  },
  {
    text: "Present recent technological developments in sustainable energy and environment",
    icon: Sparkles,
  },
  {
    text: "Discuss green technology and climate change solutions",
    icon: Target,
  },
  {
    text: "Establish business or research relations for future collaboration",
    icon: Building,
  },
  {
    text: "Share knowledge on innovative technologies for energy conservation",
    icon: CheckCircle,
  },
];

const registrationFees = [
  {
    category: "Delegates from Academics/Industries/Govt. Org",
    earlyBird: "₹5,900",
    standard: "₹7,080",
  },
  {
    category: "PG Students/Research Scholars",
    earlyBird: "₹3,540",
    standard: "₹4,130",
  },
  { category: "UG Students", earlyBird: "₹1,770", standard: "₹2,360" },
  {
    category: "Foreign Delegates/Participants",
    earlyBird: "$295",
    standard: "$354",
  },
  {
    category: "Foreign Accompanying Person",
    earlyBird: "$118",
    standard: "$118",
  },
];

const participants = [
  { name: "Faculty Members", icon: GraduationCap },
  { name: "Scientists", icon: Sparkles },
  { name: "Research Scholars", icon: FileText },
  { name: "UG & PG Scholars", icon: Users },
  { name: "Industrial Representatives", icon: Building },
  { name: "Other Academicians", icon: Target },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-orange-400 font-semibold mb-4 tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              International Conference
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              About <span className="text-orange-400">CHEM-CONFLUX</span>²⁶
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              International Conference on Sustainable Environment & Energy
              Innovations
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span className="text-slate-300 text-sm">September 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-slate-300 text-sm">
                  MNNIT Allahabad, Prayagraj
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference */}
      <section
        className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
        id="about"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 tracking-wider uppercase">
                Conference Overview
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                About the Conference
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  CHEM-CONFLUX²⁶ is a multi-disciplinary international
                  conference that intends to cover the thrust areas concerning
                  sustainable development of energy and environment. Energy is
                  essential to society and has made considerable impact on the
                  environment as a consequence of large-scale energy-related
                  human activities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Despite the fact that energy and environment concerns were
                  earlier local in nature, they are currently regional and
                  global such as acid rain and the greenhouse effect. These
                  issues have now become dominating political issues and the
                  subject of international focus and regulation.
                </p>
                <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-4 border border-primary/20 mt-6">
                  <p className="text-primary font-medium flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    The Inaugural function and Keynote address will be held in
                    Institute Seminar Hall.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <img
                src={mnnitCampus3}
                alt="MNNIT Allahabad Campus"
                className="relative rounded-2xl shadow-2xl ring-1 ring-border dark:ring-white/10 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Our Goals
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Conference Objectives
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid gap-4">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-card dark:bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">
                    {objective.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Participants */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Who Can Attend
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Eligible Participants
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {participants.map((participant, index) => {
              const Icon = participant.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 bg-card dark:bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-border dark:border-white/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">
                    {participant.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Paper Submission */}
      <section
        className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900"
        id="paper-submission"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Submissions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Paper Submission Guidelines
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                    Submission Requirements
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome submissions on original research, reviews and
                    case studies on topics related to the thrust areas of the
                    conference.
                  </p>

                  <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 mb-6 border border-border dark:border-white/5">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Abstract Format (One Page)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { label: "Page Size", value: "A4 with 1 inch margin" },
                        {
                          label: "Font",
                          value: "Times New Roman, single spacing",
                        },
                        { label: "Title", value: "Bold, 14 font size" },
                        { label: "Author(s)", value: "Bold, 12 font size" },
                        { label: "Affiliation", value: "12 font size" },
                        { label: "Keywords", value: "Max 5 (italics)" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">
                            {item.label}:
                          </span>
                          <span className="text-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20 group hover:bg-primary/20 transition-all duration-300">
                    <Send className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                    <p className="text-foreground">
                      Submit to:{" "}
                      <a
                        href="mailto:chemconflux26@gmail.com"
                        className="text-primary font-semibold hover:underline"
                      >
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
      <section
        className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
        id="registration"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Registration
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Registration Fees
            </h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Early Bird deadline: August 30, 2026
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-border dark:border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/80">
                    <th className="p-5 text-left text-primary-foreground font-semibold">
                      Category
                    </th>
                    <th className="p-5 text-center text-primary-foreground font-semibold">
                      Early Bird
                    </th>
                    <th className="p-5 text-center text-primary-foreground font-semibold">
                      Standard
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr
                      key={index}
                      className="border-t border-border dark:border-white/5 hover:bg-muted dark:hover:bg-white/5 transition-colors"
                    >
                      <td className="p-5 text-muted-foreground">
                        {fee.category}
                      </td>
                      <td className="p-5 text-center">
                        <span className="font-bold text-primary text-lg">
                          {fee.earlyBird}
                        </span>
                      </td>
                      <td className="p-5 text-center text-muted-foreground">
                        {fee.standard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {registrationFees.map((fee, index) => (
                <div
                  key={index}
                  className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-border dark:border-white/10"
                >
                  <p className="text-foreground font-medium mb-3">
                    {fee.category}
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">
                        Early Bird
                      </p>
                      <p className="text-primary font-bold text-lg">
                        {fee.earlyBird}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground uppercase">
                        Standard
                      </p>
                      <p className="text-muted-foreground">{fee.standard}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * All fees include GST
            </p>

            {/* Payment Methods */}
            <div className="mt-8 bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    Payment Methods
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      Local Cheque or Demand Draft in favor of{" "}
                      <strong className="text-primary">"CHEMCONFLUX26"</strong>,
                      payable at Prayagraj
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      Net Banking (visit event website for details)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Prayagraj - Interactive Carousel */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Host City
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Discover Prayagraj
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One of India's most ancient and spiritually significant cities,
              where history, culture, and modernity converge at the sacred
              confluence of rivers.
            </p>
          </div>

          <PrayagrajCarousel />

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { value: "3000+", label: "Years of History" },
              { value: "3", label: "Sacred Rivers" },
              { value: "120M+", label: "Kumbh Visitors" },
              { value: "1887", label: "University Founded" },
            ].map((fact, index) => (
              <div
                key={index}
                className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  {fact.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About MNNIT - Interactive Carousel */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Host Institution
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              MNNIT Allahabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A premier technical institution in India, ranked among the top
              NITs, known for excellence in education and research.
            </p>
          </div>

          <MNNITCarousel />

          {/* Institution Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { value: "1961", label: "Established" },
              { value: "Top 10", label: "Among NITs" },
              { value: "10+", label: "Departments" },
              { value: "5000+", label: "Students" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section
        className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900"
        id="accommodation"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">
              Stay
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Accommodation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* On Campus */}
            <div className="group bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                On-Campus (Limited)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Limited accommodation will be available on a first-come,
                first-served basis. Campus stay provides convenient access to
                conference venues.
              </p>
            </div>

            {/* Off Campus */}
            <div className="group bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Home className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Off-Campus Hotels
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Several hotels near MNNIT campus cater to various budgets.
                Details will be shared with registered participants.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              For accommodation assistance, contact:
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary bg-transparent hover:bg-primary/10"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chemconflux26@gmail.com&su=Accommodation Inquiry for CHEM-CONFLUX'26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  chemconflux26@gmail.com
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
