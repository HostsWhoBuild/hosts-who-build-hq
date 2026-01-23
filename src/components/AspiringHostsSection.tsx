import { Briefcase, TrendingUp, Clock, Users, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_CONTACT_LINK = "https://api.whatsapp.com/send?phone=916366577393&text=Hi,%20I%E2%80%99m%20contacting%20you%20via%20your%20website%20regarding%20an%20enquiry.";

const features = [
  {
    icon: Briefcase,
    title: "Keep Your Day Job",
    description: "Build your hosting business on the side without quitting your 9-to-5. We help you manage everything efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Passive Income Stream",
    description: "Create a sustainable second income that grows over time, giving you financial freedom and security.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Get assistance to manage your BnB so you can host on your own terms. We handle the heavy lifting while you stay in control.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join 100+ hosts who share insights, tips, and support each other through every step of the journey.",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description: "Learn from experienced hosts who've built profitable stays. Get mentorship and avoid costly mistakes.",
  },
  {
    icon: Shield,
    title: "Start with Confidence",
    description: "We guide you through compliance, pricing, and guest management so you can start with confidence.",
  },
];

export const AspiringHostsSection = () => {
  return (
    <section id="aspiring-hosts" className="py-20 md:py-28 bg-cream-50 scroll-mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-navy-900 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            For Aspiring Hosts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Turn Your Side Income Dream Into{" "}
            <span className="text-gradient-gold">Reality</span>
          </h2>
          <p className="text-lg text-navy-600">
            Dreaming of becoming an Airbnb host? We help you start your hosting journey while you 
            continue working your job. Build wealth, one guest at a time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-cream-200 hover:border-gold-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
              Quit Waiting, Start Hosting
            </a>
          </Button>
          <p className="text-sm text-navy-500 mt-4">
            No commitments • Expert guidance • Community support
          </p>
        </div>
      </div>
    </section>
  );
};
