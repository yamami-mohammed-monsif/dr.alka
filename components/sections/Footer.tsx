import Section from "../UI/Section";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLinks, SocialLinks } from "@/constants";

const Footer = () => {
  return (
    <Section className="bg-text text-white">
      <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-6 mb-10 md:mb-12">
        <div className="flex items-center justify-center -ml-4 md:ml-0 md:-mt-5 lg:-mt-8">
          <Link href="/">
            <Image
              src="/logo-white.webp"
              alt="Dr.Alka Logo"
              width={80}
              height={80}
              className="aspect-square w-20 lg:w-28"
              priority={false}
              loading="lazy"
              quality={75}
            />
          </Link>
        </div>
        <ul className="flex flex-col gap-4 md:gap-6">
          {NavLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-1 md:gap-2">
            <FaLocationDot className="inline mr-2 w-5" />
            <p>------------</p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <MdEmail className="inline mr-2 w-5" />
            <p>dralkabulchandani9@gmail.com</p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaPhone className="inline mr-2 w-5" />
            <p>052 259 0310</p>
          </div>
        </div>
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
