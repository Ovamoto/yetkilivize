"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visaType, setVisaType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !visaType) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const phoneNumber = "905394327763"; // <-- Buraya kendi WhatsApp numaranı gir
    const message = `Ön Başvuru Talebi:%0Aİsim Soyisim: ${name}%0AE-posta: ${email}%0AVize Tipi: ${visaType}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative flex items-center min-h-[calc(100vh-4rem)] pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/0 to-white/90">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            filter: "brightness(0.8)",
          }}
        />
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-md">
                Yeni maceranızın kapısını{" "}
                <span className="text-orange-500">Yetkili Vize</span> ile açın
              </h1>
              <p className="max-w-[600px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-100 drop-shadow-md">
                Vize başvuruları artık stres yaratmıyor. Profesyonel ekibimiz baştan sona yanınızda,
                başvurularınızı kolaylaştırmak için tüm detaylarla ilgileniyoruz.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-orange-600 hover:bg-orange-700" size="lg" asChild>
                <Link href="/#services">Hizmetlerimiz</Link>
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"
                size="lg"
                asChild
              >
                <Link href="/#contact">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center hidden">
            <div className="p-6 bg-white/90 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-lg font-semibold mb-2 text-orange-600">Hızlı Vize Ön Başvuru</h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium leading-none block mb-1">
                    İsim Soyisim
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="İsim Soyisim"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium leading-none block mb-1">
                    E-posta
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="E-posta adresiniz"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium leading-none block mb-1">
                    Vize Tipi
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                  >
                    <option value="" disabled>
                      Vize türü seçin
                    </option>
                    <option value="Schengen Vizesi">Schengen Vizesi</option>
                    <option value="Turist Vizesi">Turist Vizesi</option>
                    <option value="Çalışma Vizesi">Çalışma Vizesi</option>
                    <option value="Öğrenci Vizesi">Öğrenci Vizesi</option>
                  </select>
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  size="sm"
                  type="submit"
                >
                  Ön Başvuru Yap
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
