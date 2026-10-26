import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cream font-sans text-ink">
      <div className="max-w-[1144px] mx-auto px-[clamp(20px,4vw,48px)] pt-[72px] pb-9 flex flex-col gap-14">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1.4_1_280px] flex flex-col gap-[18px]">
            <Image
              src="/images/redesign/sef-logo.png"
              alt="South East Flyers and Marketing Solutions"
              width={176}
              height={44}
              className="h-11 w-auto self-start"
            />
            <p className="m-0 text-[15px] leading-relaxed text-body max-w-[320px]">
              Exclusive, GPS-tracked letterbox distribution across Melbourne&rsquo;s south-east and eastern suburbs.
            </p>
            <a href="tel:0402824070" className="font-heading font-semibold text-[17px] text-ink no-underline [font-variant-numeric:tabular-nums]">
              0402 824 070
            </a>
          </div>

          <nav aria-label="Services" className="flex-[1_1_160px] flex flex-col gap-3 text-[15px]">
            <h3 className="m-0 mb-1 font-heading font-semibold text-sm">Services</h3>
            <Link href="/services/flyer-distribution" className="text-body no-underline">Flyer distribution</Link>
            <Link href="/services/letterbox-distribution" className="text-body no-underline">Letterbox distribution</Link>
            <Link href="/services/targeted-flyer-distribution" className="text-body no-underline">Targeted distribution</Link>
            <Link href="/services/gps-tracked-flyer-distribution" className="text-body no-underline">GPS-tracked distribution</Link>
          </nav>

          <nav aria-label="Suburbs" className="flex-[1_1_160px] flex flex-col gap-3 text-[15px]">
            <h3 className="m-0 mb-1 font-heading font-semibold text-sm">Suburbs</h3>
            <Link href="/melbourne/flyer-distribution-brighton" className="text-body no-underline">Brighton</Link>
            <Link href="/melbourne/flyer-distribution-kew" className="text-body no-underline">Kew</Link>
            <Link href="/melbourne/flyer-distribution-glen-waverley" className="text-body no-underline">Glen Waverley</Link>
            <Link href="/melbourne/flyer-distribution-box-hill" className="text-body no-underline">Box Hill</Link>
            <Link href="/melbourne/flyer-distribution-south-east-melbourne" className="text-body no-underline">South-east Melbourne</Link>
            <Link href="/melbourne/flyer-distribution-melbourne" className="text-body no-underline">All Melbourne suburbs</Link>
          </nav>

          <nav aria-label="Company" className="flex-[1_1_160px] flex flex-col gap-3 text-[15px]">
            <h3 className="m-0 mb-1 font-heading font-semibold text-sm">Company</h3>
            <Link href="/letterbox-drop-cost" className="text-body no-underline">Letterbox drop cost</Link>
            <Link href="/portfolio" className="text-body no-underline">Our clients</Link>
            <Link href="/blog" className="text-body no-underline">Blog</Link>
            <Link href="/contact" className="text-body no-underline">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-[26px] border-t border-line text-[13px] text-muted">
          <p className="m-0">&copy; {new Date().getFullYear()} South East Flyers and Marketing Solutions</p>
          <div className="flex gap-[22px]">
            <a href="https://www.facebook.com/southeastflyers" target="_blank" rel="noopener noreferrer" className="text-body no-underline">Facebook</a>
            <a href="https://www.instagram.com/southeastflyers" target="_blank" rel="noopener noreferrer" className="text-body no-underline">Instagram</a>
            <a href="https://www.linkedin.com/company/southeastflyers" target="_blank" rel="noopener noreferrer" className="text-body no-underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
