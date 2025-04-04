import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavigationMenu() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-600">Çilek Vize</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#services" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Hizmetlerimiz
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Hakkımızda
          </Link>
          <Link href="/#process" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Süreç
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Referanslar
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
            İletişim
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Link href="/#contact">Randevu Al</Link>
          </Button>
          <Button size="sm">
            <Link href="/application">Başvuru Yap</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
