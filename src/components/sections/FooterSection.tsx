import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '@component/data/portfolio';

export default function FooterSection() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-brand-blue text-brand-cream">
      <div className="max-w-8xl mx-auto w-full">
        <h2 className="text-[10vw] lg:text-[7vw] font-serif font-bold mb-8 leading-[0.8] tracking-tighter">
          Contact
        </h2>

        <div className="w-full grid grid-cols-2 gap-4">
          <div></div>
          <div className="flex flex-col gap-4 w-full">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-8 py-6 hover:bg-brand-cream hover:border-brand-cream hover:scale-[1.02] transition-all duration-300 ease-out"
              >
                <span className="md:text-lg xl:text-[0.8vw] tracking-[0.2em] text-brand-cream group-hover:text-brand-blue uppercase transition-colors">
                  {link.label}
                </span>
                <ArrowUpRight className="w-5 h-5 text-brand-cream group-hover:text-brand-blue group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-between items-end opacity-60">
            <div className="text-xs uppercase">
              &copy; {new Date().getFullYear()} Meder Taab
            </div>
          </div>
      </div>
    </footer>
  );
}
