import { FindDoctor } from "./FindDoctor";
import { Results } from "./Results";
import { AvaSection } from "./AvaSection";
import { ServicesSection } from "./ServicesSection";
import { TeamSection } from "./TeamSection";
import { Testimonials } from "./Testimonials";
import { TrustedCompanies } from "./TrustedCompanies";
import { FAQSection } from "../Appointment/FAQSection";
import { Contact } from "./Contact";
import { DownloadSection } from "./DownloadSection";
import { Hero } from "./Hero";
import { NewsLetterSection } from "../Sections/NewsLetterSection";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FindDoctor />
      <Results />
      <AvaSection />
      <ServicesSection />
      <TeamSection />
      <Testimonials />
      <TrustedCompanies />

      {/* Download App & FAQ Section */}
      <div className="bg-[#053C6D] py-20">
        <div className="container mx-auto px-6">
          <div className="">
            <DownloadSection />
          </div>
        </div>
      </div>

      <div className="">
        <FAQSection />
        <Contact />
      </div>

      <NewsLetterSection variant="section" />
    </div>
  );
};
