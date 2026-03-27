import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Github, href: "#" },
];

const FooterSocial = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          className="p-3 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white text-slate-400 hover:text-[#0a0a0a] transition-colors duration-300 group"
          aria-label={Icon.name}
        >
          <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
