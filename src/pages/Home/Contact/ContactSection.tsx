import SectionTitle from "./SectionTitle";
import HotlineItem from "./HotlineItem";
import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
// import your SVGs as components or use icon libraries

export default function ContactSection() {
  return (
    <section className="bg-zinc-900 dark:bg-gray-900 py-16 md:py-20 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Section */}
        <div className="space-y-10">
          <SectionTitle
            label="Drop Us a Line"
            title="Let’s Build Something Bold Together"
            description="Ready to bring your idea to life? Whether you're launching a new digital product, scaling your team, or exploring AI-powered solutions, we're here to help you take the next step with clarity and confidence."
          />

          <div className="space-y-6">
            <HotlineItem
              icon={<Phone />}
              value="+1 (800) 342-0989"
              link="tel:+1800342-0989"
            />
            <HotlineItem
              icon={<Mail />}
              value="design@tapplix.tech"
              link="mailto:design@tapplix.tech"
            />
          </div>
        </div>

        {/* Right Section : contact form */}
        <div className="mt-10 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
