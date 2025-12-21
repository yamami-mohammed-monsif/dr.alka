import Section from "../UI/Section";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLinks, SocialLinks } from "@/constants";

const Footer = () => {
  return (
    <Section className="bg-text text-white">
      <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-6 mb-10 md:mb-12">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              src="/logo-white.webp"
              alt="Dr.Alka Logo"
              width={80}
              height={80}
              className="aspect-square w-20 lg:w-28 -ml-4 md:ml-0 md:-mt-5 lg:-mt-8"
              priority={false}
              loading="lazy"
              quality={75}
            />
          </Link>
          <p className="max-w-xs">
            Dr. Alka Bulchandani Specialist in Oral Medicine & Radiology Harley
            International Medical Clinic – UAE
          </p>
        </div>
        <ul className="flex flex-col gap-4 md:gap-6">
          {NavLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold mb-1">Contact</p>

          <div className="flex items-center gap-1 md:gap-2">
            <MdEmail className="inline mr-2 w-5" />
            <a
              href="mailto:dralkabulchandani9@gmail.com"
              className="hover:underline"
            >
              dralkabulchandani9@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaPhone className="inline mr-2 w-5" />
            <a href="tel:+971522590310" className="hover:underline">
              052 259 0310
            </a>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaWhatsapp className="inline mr-2 w-5 h-5" />
            <Link href="https://wa.me/971522590310" className="hover:underline">
              Whatsapp
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold mb-1">Locations:</p>
          <Link
            href="https://maps.app.goo.gl/8emuyFUaeLVZP1Mt7?g_st=iwb"
            className="max-w-xs leading-5 hover:underline"
            target="_blank"
          >
            Harley International Medical Clinic 202, Al Attar Business Centre
            Sheikh Zayed Road Al Barsha 1 Dubai
          </Link>
          <Link
            href="https://maps.app.goo.gl/AJ2NkduGZoXby62Y7?g_st=iwb"
            className="max-w-xs leading-5 hover:underline"
            target="_blank"
          >
            Harley International Medical Clinic 3rd floor, D block Nashwan
            Building, 128, Al Mankhool Road, Al Raffa Dubai
          </Link>
        </div>
        <ul className="flex md:flex-col gap-3 md:gap-4 items-center">
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
          <Link href="/privacy-policy" target="_blank" className="underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" target="_blank" className="underline">
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
