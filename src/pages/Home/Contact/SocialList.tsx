import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { href: "https://www.linkedin.com/", icon: <Linkedin size={20} /> },
  { href: "https://www.facebook.com/", icon: <Facebook size={20} /> },
  { href: "https://twitter.com/", icon: <Twitter size={20} /> },
  { href: "https://www.instagram.com/", icon: <Instagram size={20} />}
];

export default function SocialList() {
  return (
    <div className="mt-6">
      <h6 className="text-white mb-3 text-lg font-semibold">Social Just You Connected Us!</h6>
      <div className="flex gap-2">
        {socials.map(({ href, icon }, index) => (
          <div key={index}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              {icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
