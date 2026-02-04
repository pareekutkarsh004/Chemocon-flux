import { Layout } from "@/components/layout/Layout";
// FIX: Use '@/' to point to src, or '../' to go up one level
import RegistrationForm from "@/components/registration/RegistrationForm";
import {
  HeroSection,
  ImportantDatesSection,
  FeesSection,
  PaperSubmissionSection,
  ContactSection,
} from "@/components/registration/RegistrationSections";

const Registration = () => {
  return (
    <Layout>
      <HeroSection />
      <RegistrationForm />
      <ImportantDatesSection />
      <FeesSection />
      <PaperSubmissionSection />
      <ContactSection />
    </Layout>
  );
};

export default Registration;
