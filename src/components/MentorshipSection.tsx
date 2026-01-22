import { GraduationCap, Target, MessageCircle, Calendar, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_CONTACT_LINK = "https://api.whatsapp.com/send?phone=916366577393&text=Hi,%20I%E2%80%99m%20contacting%20you%20via%20your%20website%20regarding%20mentorship%20sessions.";

const mentorshipFeatures = [
  {
    icon: Target,
    title: "1-on-1 Personalized Guidance",
    description: "Get tailored advice specific to your property, location, and goals from hosts who've been there.",
  },
  {
    icon: Calendar,
    title: "Flexible Session Scheduling",
    description: "Book sessions at times that work for you. Weekend, evening, or lunch break - we adapt to your schedule.",
  },
  {
    icon: Star,
    title: "Learn From Top Performers",
    description: "Our mentors are Superhosts with proven track records of high occupancy and 5-star reviews.",
  },
  {
    icon: Zap,
    title: "Accelerate Your Success",
    description: "Skip the trial-and-error phase. Learn strategies that took years to develop, in just a few sessions.",
  },
];

export const MentorshipSection = () => {
  return (
    <section id="mentorship" className="py-20 md:py-28 bg-navy-900 scroll-mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Mentorship Program</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream-50 mb-6">
              Learn Directly From{" "}
              <span className="text-gradient-gold">Experienced Hosts</span>
            </h2>

            <p className="text-lg text-cream-100/80 mb-8 leading-relaxed">
              Fast-track your hosting journey with personalized mentorship sessions. Our experienced 
              hosts share real insights, proven strategies, and practical tips that textbooks can't teach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Book a Mentorship Session
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-cream-100/60 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-navy-900 flex items-center justify-center text-navy-900 text-xs font-bold"
                  >
                    {["S", "A", "R"][i - 1]}
                  </div>
                ))}
              </div>
              <span>Trusted by 50+ aspiring hosts</span>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid sm:grid-cols-2 gap-5">
            {mentorshipFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-lg font-semibold text-cream-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-cream-100/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
