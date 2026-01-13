import { Layout } from "@/components/layout/Layout";
import { Users, Sparkles, Mail, Phone } from "lucide-react";

const committeeData = {
  patron: [
    {
      name: "Prof. Rama Shanker Verma",
      role: "Director, MNNIT Allahabad",
      image: "/Committes Image/dir_img_250423.jpeg",
    },
  ],
  chairperson: [
    {
      name: "Dr. Dipesh S. Patle",
      role: "Head, ChED, MNNIT Allahabad",
      image: "/Committes Image/Dipesh_Photo_MNNIT.jpg",
    },
  ],
  conveners: [
    {
      name: "Prof. Sushil Kumar",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
      image: "/Committes Image/drSushilkumar-chemicalengineering.jpg",
    },
    {
      name: "Dr. Dipesh S. Patle",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
      image: "/Committes Image/Dipesh-210x300.jpg",
    },
    {
      name: "Dr. Karthick S.",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
      image: "/Committes Image/karthick_-2-1.jpg",
    },
  ],
  organizingSecretaries: [
    {
      name: "Prof. Sadhana Sachan",
      role: "MNNIT Allahabad",
      image: "/Committes Image/HOD_Chemical_Deptt._pic.jpg",
    },
    {
      name: "Prof. M. Siraj Alam",
      role: "MNNIT Allahabad",
      image: "/Committes Image/med_ce_sa.jpg",
    },
    {
      name: "Dr. Ashish N. Sawarkar",
      role: "MNNIT Allahabad",
      image: "/Committes Image/drashishsawarkar.jpg",
    },
    {
      name: "Dr. Suantak Kamsonlian",
      role: "MNNIT Allahabad",
      image: "/Committes Image/Suantak.jpg",
    },
    {
      name: "Dr. Shabih Ul Hasan",
      role: "MNNIT Allahabad",
      image: "/Committes Image/Dr._Shabih_Ul_Hasan.jpg",
    },
    {
      name: "Dr. Parul Katiyar",
      role: "MNNIT Allahabad",
      image: "/Committes Image/DSC_3365-crop.jpeg",
    },
    {
      name: "Dr. Manju Verma",
      role: "MNNIT Allahabad",
      image: "/Committes Image/mv_photo.jpg",
    },
    {
      name: "Dr. Dheeraj Ahuja",
      role: "MNNIT Allahabad",
      image: "/Committes Image/ahuja_chem.jpg",
    },
    {
      name: "Dr. Anand Mohan Verma",
      role: "MNNIT Allahabad",
      image: "/Committes Image/90317-20230430_120334 - Copy (1).jpg",
    },
  ],
  advisory: [
    {
      name: "Prof. Aniruddha Bhalchandra Pandit",
      role: "Vice Chancellor & UGC Professor, ICT Mumbai",
      image: "/advisory/pandit.jpg",
    },
    {
      name: "Prof. Bhaskar Narayan Thorat",
      role: "Professor, Chemical Engineering, ICT Mumbai",
      image: "/advisory/thorat.jpg",
    },
    {
      name: "Prof. Shishir Sinha",
      role: "Director General, CIPET, Govt. of India",
      image: "/advisory/sinha.jpg",
    },
    {
      name: "Prof. Davide Manca",
      role: "Professor, Process Systems Engineering, Politecnico di Milano, Italy",
      image: "/advisory/manca.jpg",
    },
    {
      name: "Prof. G. P. Rangaiah",
      role: "Emeritus Professor, National University of Singapore",
      image: "/advisory/rangaiah.jpg",
    },
    {
      name: "Prof. Hasan Uslu",
      role: "Professor, Nigde Omer Halisdemir University, Turkey",
      image: "/advisory/uslu.jpg",
    },
    {
      name: "Prof. K. K. Pant",
      role: "Professor, Chemical Engineering, IIT Roorkee",
      image: "/advisory/kkpant.jpg",
    },
    {
      name: "Prof. Nishith Verma",
      role: "Chevron Chair Professor, Chemical Engineering, IIT Kanpur",
      image: "/advisory/nishith.jpg",
    },
    {
      name: "Prof. P. K. Mishra",
      role: "Professor (HAG), Chemical Engineering, IIT (BHU) Varanasi",
      image: "/advisory/pkmishra.jpg",
    },
    {
      name: "Prof. R. S. Singh",
      role: "Professor (HAG), Chemical Engineering, IIT (BHU) Varanasi",
      image: "/advisory/rssingh.jpg",
    },
    {
      name: "Prof. Anil Verma",
      role: "Professor, Chemical Engineering, IIT Delhi",
      image: "/advisory/anilverma.jpg",
    },
    {
      name: "Prof. Vimal Katiyar",
      role: "Professor, Chemical Engineering, IIT Guwahati",
      image: "/advisory/vkatiyar.jpg",
    },
    {
      name: "Prof. Zainal Ahmad",
      role: "Professor, Chemical Engineering, Universiti Sains Malaysia",
      image: "/advisory/zainal.jpg",
    },
    {
      name: "Dr. Ajay Kumar",
      role: "Professor, Oklahoma State University, USA",
      image: "/advisory/ajaykumar.jpg",
    },
    {
      name: "Er. Sanjay Kudesia",
      role: "Managing Director, IFFCO Phulpur",
      image: "/advisory/kudesia.jpg",
    },
  ],

  technicalSupport: [
    {
      name: "Mr Abdul Rehman",
      role: "Technical Support",
      image: "/Committes Image/abdul.jpeg",
    }, // CHANGE THIS
    {
      name: "Vansh",
      role: "Technical Support",
      image: "/Committes Image/WhatsApp Image 2026-01-10 at 14.16.42.jpeg",
    }, // CHANGE THIS
    {
      name: "Vivek Kumar Sulaniya",
      role: "Technical Support",
      image: "/Committes Image/vivek.jpeg",
    }, // CHANGE THIS
    {
      name: "Utkarsh Pareek",
      role: "Technical Support",
      image: "/Committes Image/20240707_191341-1.jpg",
    }, // CHANGE THIS
  ],
};

const MemberCard = ({ member, size = "default" }) => {
  // These classes control the height of the card based on the 'size' prop
  // This ensures the photo has enough vertical space to be seen
  const heightClasses = {
    large: "h-96", // Taller for Patron/Chairperson
    default: "h-80", // Standard size
    small: "h-64", // Smaller for secretaries
    tiny: "h-56", // Smallest for advisory
  };

  return (
    <div
      className={`group relative bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-border dark:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        heightClasses[size] || "h-80"
      }`}
    >
      {/* 1. Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* 2. Gradient Overlay: Makes text readable on top of photos */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
      </div>

      {/* 3. Text Content: Pushed to the bottom, White text color */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10">
        <p className="font-semibold text-white text-lg group-hover:text-primary transition-colors drop-shadow-md">
          {member.name}
        </p>
        <p className="text-gray-200 text-sm mt-1 drop-shadow-md">
          {member.role}
        </p>
      </div>
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
