import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <Link href="/">MeStyle.AI</Link>
          </h3>
          <div className="mb-5">Living in any styles you like with our breakthrough AI.</div>
          
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/privacy" className="hover:underline me-4 md:me-6">
                      Privacy Policy
                    </Link>
                </li>
                <li>
                    <a href="/terms-of-use" className="hover:underline me-4 md:me-6">Terms of use</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
