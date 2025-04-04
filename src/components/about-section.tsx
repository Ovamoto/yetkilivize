import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
              Hakkımızda
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900">
              Yetkili Vize ile Vize Süreçleri Artık Çok Kolay
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed">
              Yetkili Vize olarak 2015 yılından bu yana Bursa'da hizmet vermekteyiz.
              Amacımız, vize süreçlerini kolaylaştırmak ve müşterilerimizin seyahat
              planlarını sorunsuz gerçekleştirmelerine yardımcı olmaktır.
            </p>
            <p className="text-gray-500 md:text-xl/relaxed">
              Uzman ekibimiz, vize başvurusu sürecinin her aşamasında yanınızda olup,
              başvurunuzun başarıyla sonuçlanması için gerekli tüm adımları size özel
              bir şekilde planlamaktadır.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <Link href="/#contact">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <div className="text-3xl font-bold text-orange-600">7+</div>
                <div className="text-center text-sm font-medium text-gray-500">Yıllık Deneyim</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <div className="text-3xl font-bold text-orange-600">5000+</div>
                <div className="text-center text-sm font-medium text-gray-500">Başarılı Başvuru</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-center text-sm font-medium text-gray-500">Ülke</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-orange-50 p-4 transition-all hover:bg-orange-100">
                <div className="text-3xl font-bold text-orange-600">%95</div>
                <div className="text-center text-sm font-medium text-gray-500">Başarı Oranı</div>
              </div>
            </div>
            <div className="rounded-lg border bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-orange-700">Neden Bizi Tercih Etmelisiniz?</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center">
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
                    className="mr-2 h-5 w-5 text-orange-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Uzman Danışmanlık Ekibi
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-5 w-5 text-orange-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Yüksek Başarı Oranı
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-5 w-5 text-orange-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Hızlı ve Güvenilir Hizmet
                </li>
                <li className="flex items-center">
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
                    className="mr-2 h-5 w-5 text-orange-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Size Özel Çözümler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
