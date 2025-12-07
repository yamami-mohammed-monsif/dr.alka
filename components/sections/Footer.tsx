import Section from "../UI/Section";
import Link from "next/link";
import Image from "next/image";
import { NavLinks, SocialLinks } from "@/constants";

const Footer = () => {
  return (
    <Section className="bg-text text-white">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 mb-10 md:mb-12">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/logo-white.webp"
              alt="Dr.Alka Logo"
              width={80}
              height={80}
              className="aspect-square w-20 lg:w-28"
              priority
              quality={75}
            />
          </Link>
        </div>
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {NavLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link href="#faqs" className="hover:underline">
              FAQs
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3 md:gap-4 items-center">
          {SocialLinks.map((link) => (
            <li
              key={link.id}
              className="hover:scale-120 transition-transform duration-200"
            >
              <Link href={link.href} target="_blank">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 border-t py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center md:order-2">
          <Link href="/" target="_blank" className="underline">
            Privacy Policy
          </Link>
          <Link href="/" target="_blank" className="underline">
            Terms of Service
          </Link>
        </div>
        <p className="text-center">
          © 2025 Dr Alka Bulchandani. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
