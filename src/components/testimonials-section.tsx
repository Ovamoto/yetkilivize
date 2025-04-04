import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "İş İnsanı",
    testimonial:
      "Schengen vizesi başvurumda Yetkili Vize'den aldığım danışmanlık hizmeti sayesinde sorunsuz bir şekilde vizemi aldım. Profesyonel ekip, hızlı iletişim ve güler yüzlü hizmet için teşekkürler!",
    avatar: "AY",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    role: "Öğrenci",
    testimonial:
      "Amerika öğrenci vizesi başvurum için Yetkili Vize'ye başvurdum. Tüm süreç boyunca yanımda oldular ve gerekli tüm belgeleri eksiksiz hazırlamamda bana yardımcı oldular. Sayelerinde vizemi sorunsuz aldım.",
    avatar: "AD",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "Yazılım Mühendisi",
    testimonial:
      "İngiltere çalışma vizesi başvurumda karşılaştığım zorlukları Yetkili Vize ekibi sayesinde aştım. Tüm sorularıma sabırla yanıt verdiler ve başvuru sürecimde adım adım yönlendirdiler.",
    avatar: "MK",
  },
  {
    id: 4,
    name: "Zeynep Koç",
    role: "Doktor",
    testimonial:
      "Kanada'ya taşınma sürecimde vize danışmanlığı için Yetkili Vize'yi tercih ettim. Başvuru sürecindeki tüm karmaşık adımları benim için basitleştirdiler ve başarılı bir sonuç aldım.",
    avatar: "ZK",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-orange-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
              Referanslar
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Başarı hikayelerimizden bazıları ve müşterilerimizin değerli yorumları.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
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
                    className="h-6 w-6 text-orange-300"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <blockquote className="mt-3 text-gray-500">{testimonial.testimonial}</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
