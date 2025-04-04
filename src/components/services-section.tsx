import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "schengen",
    title: "Schengen Vizesi",
    description: "Avrupa'nın 27 ülkesinde özgürce seyahat etmenizi sağlayan Schengen vizesi başvuru sürecinizi kolaylaştırıyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "usa",
    title: "Amerika Vizesi",
    description: "Amerika vizesi başvurularında yüksek onay oranıyla, doğru belgeleri hazırlayarak sürecinizi yönetiyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2 12h20" />
        <path d="M12 2v20" />
        <path d="m4.5 4.5 15 15" />
        <path d="m19.5 4.5-15 15" />
      </svg>
    ),
  },
  {
    id: "uk",
    title: "İngiltere Vizesi",
    description: "İngiltere için turist, öğrenci veya iş vizesi başvurularınızı profesyonel danışmanlık ile çözüyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="m8 22 4-10 4 10" />
        <path d="M8 2h8" />
        <path d="m12 8-4 6h8l-4-6" />
      </svg>
    ),
  },
  {
    id: "canada",
    title: "Kanada Vizesi",
    description: "Kanada'ya seyahat, eğitim veya göç için gerekli tüm vize türlerinde profesyonel destek sunuyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M2 12h20" />
        <path d="M18 20a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V8h12Z" />
      </svg>
    ),
  },
  {
    id: "australia",
    title: "Avustralya Vizesi",
    description: "Avustralya vizesi için başvuru formlarını doldurma, doğru belgeleri hazırlama konusunda destek sağlıyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
  {
    id: "other",
    title: "Diğer Ülke Vizeleri",
    description: "Dubai, Çin, Rusya, Hindistan ve diğer pek çok ülke için vize danışmanlığı ve başvuru hizmeti veriyoruz.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-24 bg-orange-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
              Hizmetlerimiz
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900">
              Size Özel Vize Danışmanlığı
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Her ülke için uzman ekibimizle, vize başvuru sürecinizi kolaylaştırıyor, başarı oranınızı artırıyoruz.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-orange-600 hover:bg-orange-50" asChild>
                  <Link href={`/services/${service.id}`}>Detaylı Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
