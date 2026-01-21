import { Layout } from "@/components/layout/Layout";
import { Users, Mail } from "lucide-react";

const committeeData = {
  patron: [
    {
      name: "Prof. Rama Shanker Verma",
      role: "Director, MNNIT Allahabad",
      image: "@/assets/Committes Image/dir_img_250423.jpeg",
      profileUrl: "https://www.mnnit.ac.in/index.php/institute/administration/director",
    },
  ],
  chairperson: [
    {
      name: "Dr. Dipesh S. Patle",
      role: "Head, ChED, MNNIT Allahabad",
      image: "@/assets/Committes Image/Dipesh_Photo_MNNIT.jpg",
      profileUrl: "http://mnnit.ac.in/profile/dipesh-patle",
    },
  ],
  conveners: [
    {
      name: "Prof. Sushil Kumar",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
      image: "@/assets/Committes Image/sushil.jpeg",
      profileUrl: "http://mnnit.ac.in/profile/sushilk",
    },
    {
      name: "Dr. Dipesh S. Patle",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
      image: "@/assets/Committes Image/Dipesh_Photo_MNNIT.jpg",
      profileUrl: "http://mnnit.ac.in/profile/dipesh-patle",
    },
    {
      name: "Dr. Karthick S.",
      role: "MNNIT Allahabad",
      type: "Convener/Technical Chair",
      image: "@/assets/Committes Image/karthick_-2-1.jpg",
      profileUrl: "http://mnnit.ac.in/profile/karthicks",
    },
  ],
  organizingSecretaries: [
    {
      name: "Prof. Sadhana Sachan",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/HOD_Chemical_Deptt._pic.jpg",
      profileUrl: "http://mnnit.ac.in/profile/sadhanas",
    },
    {
      name: "Prof. M. Siraj Alam",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/med_ce_sa.jpg",
      profileUrl: "http://mnnit.ac.in/profile/msalam",
    },
    {
      name: "Dr. Ashish N. Sawarkar",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/drashishsawarkar.jpg",
      profileUrl: "http://mnnit.ac.in/profile/ansawarkar",
    },
    {
      name: "Dr. Suantak Kamsonlian",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/Suantak.jpg",
      profileUrl: "http://mnnit.ac.in/profile/suantakk",
    },
    {
      name: "Dr. Shabih Ul Hasan",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/Dr._Shabih_Ul_Hasan.jpg",
      profileUrl: "http://mnnit.ac.in/profile/shasan",
    },
    {
      name: "Dr. Parul Katiyar",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/DSC_3365-crop.jpeg",
      profileUrl: "http://mnnit.ac.in/profile/parulk",
    },
    {
      name: "Dr. Manju Verma",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/mv_photo.jpg",
      profileUrl: "http://mnnit.ac.in/profile/manju",
    },
    {
      name: "Dr. Dheeraj Ahuja",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/ahuja_chem.jpg",
      profileUrl: "http://mnnit.ac.in/profile/dheerajahuja",
    },
    {
      name: "Dr. Anand Mohan Verma",
      role: "MNNIT Allahabad",
      image: "@/assets/Committes Image/90317-20230430_120334 - Copy (1).jpg",
      profileUrl: "http://mnnit.ac.in/profile/amverma",
    },
  ],
  advisory: [
    {
      name: "Prof. Aniruddha Bhalchandra Pandit",
      role: "Vice Chancellor & UGC Professor, ICT Mumbai",
      image: "@/assets/advisory/pandit.jpg",
    },
    {
      name: "Prof. Meenesh R. Singh",
      role: "Professor, Chemical Engineering, University of Illinios Chicago",
      image: "@/assets/advisory/Meenesh-Singh-157x180.jpg.avif",
    },
    {
      name: "Prof. Shishir Sinha",
      role: "Director General, CIPET, Govt. of India",
      image: "@/assets/advisory/sinha.jpg",
    },
    {
      name: "Prof. Davide Manca",
      role: "Professor, Process Systems Engineering, Politecnico di Milano, Italy",
      image: "@/assets/advisory/manca.jpg",
    },
    {
      name: "Prof. G. P. Rangaiah",
      role: "Emeritus Professor, National University of Singapore",
      image: "@/assets/advisory/rangaiah.jpg",
    },
    {
      name: "Prof. P.R. Gogate",
      role: "Professor,ICT Mumbai",
      image: "@/assets/advisory/ImageGenerator.aspx.jpeg",
    },
    {
      name: "Prof. K. K. Pant",
      role: "Professor, Chemical Engineering, IIT Roorkee",
      image: "/@/assetsadvisory/kkpant.jpg",
    },
    {
      name: "Prof. Nishith Verma",
      role: "Chevron Chair Professor, Chemical Engineering, IIT Kanpur",
      image: "@/assets/advisory/nishith.jpg",
    },
    {
      name: "Prof. P. K. Mishra",
      role: "Professor (HAG), Chemical Engineering, IIT (BHU) Varanasi",
      image: "@/assets/advisory/pkmishra.jpg",
    },
    {
      name: "Prof. R. S. Singh",
      role: "Professor (HAG), Chemical Engineering, IIT (BHU) Varanasi",
      image: "@/assets/advisory/rssingh.jpg",
    },
    {
      name: "Prof. Anil Verma",
      role: "Professor, Chemical Engineering, IIT Delhi",
      image: "@/assets/advisory/anilverma.jpg",
    },
    {
      name: "Prof. Vimal Katiyar",
      role: "Professor, Chemical Engineering, IIT Guwahati",
      image: "@/assets/advisory/vkatiyar.jpg",
    },
    {
      name: "Prof. Zainal Ahmad",
      role: "Professor, Chemical Engineering, Universiti Sains Malaysia",
      image: "@/assets/advisory/zainal.jpg",
    },
    {
      name: "Dr. Ajay Kumar",
      role: "Professor, Oklahoma State University, USA",
      image: "@/assets/advisory/ajaykumar.jpg",
    },
    {
      name: "Mr. Raj Tiwari",
      role: " Director, UPL LIMITED",
      image: "@/assets/advisory/Raj_Tiwari.jpg",
    },
  ],
  technicalSupport: [
    {
      name: "Mr Abdul Rehman",
      role: "Technical Support",
      image: "@/assets/Committes Image/abdul.jpeg",
    },
    {
      name: "Vansh",
      role: "Technical Support",
      image: "@/assets/Committes Image/WhatsApp Image 2026-01-10 at 14.16.42.jpeg",
    },
    {
      name: "Vivek Kumar Sulaniya",
      role: "Technical Support",
      image: "@/assets/Committes Image/vivek.jpeg",
    },
    {
      name: "Utkarsh Pareek",
      role: "Technical Support",
      image: "@/assets/Committes Image/20240707_191341-1.jpg",
    },
  ],
};

const MemberCard = ({ member, size = "default" }) => {
  const heightClasses = {
    large: "h-96",
    default: "h-80",
    small: "h-64",
    tiny: "h-56",
  };

  const CardContent = (
    <>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
      </div>

      {member.profileUrl && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 text-xs font-medium uppercase tracking-widest">
            View Profile
          </span>
        </div>
      )}

      <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10">
        <p className="font-semibold text-white text-lg group-hover:text-primary transition-colors drop-shadow-md">
          {member.name}
        </p>
        <p className="text-gray-200 text-sm mt-1 drop-shadow-md">
          {member.role}
        </p>
      </div>
    </>
  );

  const containerClasses = `group relative bg-card dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-border dark:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
    heightClasses[size] || "h-80"
  }`;

  if (member.profileUrl) {
    return (
      <a 
        href={member.profileUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${containerClasses} block cursor-pointer`}
      >
        {CardContent}
      </a>
    );
  }

  return <div className={containerClasses}>{CardContent}</div>;
};

const Committee = () => {
  return (
    <Layout>
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

      {/* CHANGED SECTION: Stacked Patron and Chairperson vertically */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            
            {/* Patron Section */}
            <div className="w-full max-w-md">
              <h2 className="font-display text-2xl font-bold mb-6 text-center text-primary">
                Patron
              </h2>
              {committeeData.patron.map((member) => (
                <MemberCard key={member.name} member={member} size="large" />
              ))}
            </div>

            {/* Chairperson Section */}
            <div className="w-full max-w-md">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committee;