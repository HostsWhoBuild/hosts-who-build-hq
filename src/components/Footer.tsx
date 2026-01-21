import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";
const INSTAGRAM_LINK = "https://www.instagram.com/hostswhobuild/";
const WHATSAPP_CONTACT_LINK = "https://api.whatsapp.com/send?phone=916366577393&text=Hi,%20I%E2%80%99m%20contacting%20you%20via%20your%20website%20regarding%20an%20enquiry.";
const EMAIL_ADDRESS = "info@hostswhobuild.com";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <img src={logo} alt="Hosts Who Build" className="h-12 w-auto" />
              <span className="font-bold text-lg text-primary-foreground">
                Hosts Who Build
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm max-w-xs">
              Building profitable, well-run stays together.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-primary-foreground/70 hover:bg-[#25D366] hover:text-white transition-all duration-300"
              aria-label="Join WhatsApp Community"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-primary-foreground/70 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-primary-foreground/70 hover:bg-gold-500 hover:text-white transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-navy-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-primary-foreground/50">
            © {currentYear} Hosts Who Build. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-primary-foreground/50 hover:text-gold-400 transition-colors">
              {EMAIL_ADDRESS}
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
