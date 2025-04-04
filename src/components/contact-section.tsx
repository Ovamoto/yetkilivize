import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
              İletişim
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900">
              Bize Ulaşın
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed">
              Vize başvurunuzla ilgili sorularınız mı var?
              Size en iyi hizmeti sunabilmek için yanınızdayız.
              Bursa'daki ofisimize gelebilir veya aşağıdaki iletişim kanallarından
              bize ulaşabilirsiniz.
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-4">
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
                  className="h-6 w-6 text-orange-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-500">+90 (224) 123 45 67</p>
                  <p className="text-gray-500">+90 (532) 987 65 43</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
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
                  className="h-6 w-6 text-orange-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">E-posta</h3>
                  <p className="text-gray-500">info@cilekvize.com</p>
                  <p className="text-gray-500">iletisim@cilekvize.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
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
                  className="h-6 w-6 text-orange-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Adres</h3>
                  <p className="text-gray-500">
                    İnönü Caddesi, No: 123 <br />
                    Osmangazi, Bursa
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
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
                  className="h-6 w-6 text-orange-600"
                >
                  <path d="M12 8V4" />
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 12 9 15" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
                  <p className="text-gray-500">
                    Hafta içi: 09:00 - 18:00 <br />
                    Cumartesi: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-orange-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-orange-900">İletişim Formu</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      İsim Soyisim
                    </label>
                    <Input id="name" placeholder="İsim Soyisim" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      E-posta Adresi
                    </label>
                    <Input id="email" placeholder="E-posta Adresi" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Telefon
                  </label>
                  <Input id="phone" placeholder="Telefon Numarası" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Konu
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Lütfen bir konu seçin</option>
                    <option value="schengen">Schengen Vizesi</option>
                    <option value="usa">Amerika Vizesi</option>
                    <option value="uk">İngiltere Vizesi</option>
                    <option value="canada">Kanada Vizesi</option>
                    <option value="other">Diğer Vize Türleri</option>
                    <option value="general">Genel Bilgi Talebi</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mesajınız
                  </label>
                  <Textarea id="message" placeholder="Mesajınızı buraya yazınız..." rows={5} className="resize-none" />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                  Gönder
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
