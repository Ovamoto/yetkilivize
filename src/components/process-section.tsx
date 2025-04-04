import { Progress } from "@/components/ui/progress";

const steps = [
  {
    id: 1,
    title: "Danışmanlık",
    description: "Uzman ekibimiz ile vize tipinizi ve gereksinimlerinizi belirleyin.",
    icon: (
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
        <path d="M2 19V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 9h18" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Belge Hazırlığı",
    description: "Başvurunuz için gereken tüm evrakların hazırlanması ve kontrol edilmesi.",
    icon: (
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
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Başvuru Süreci",
    description: "Başvurunun ilgili konsolosluğa veya elçiliğe sunulması ve takibi.",
    icon: (
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 13h6" />
        <path d="M12 10v6" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sonuçlandırma",
    description: "Vize sonucunun takibi ve sonrasında seyahat planlaması için destek.",
    icon: (
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
              Süreç
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900">
              Vize Başvuru Sürecimiz
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vize başvuru sürecinizi sorunsuz ve hızlı bir şekilde yönetmek için adım adım yanınızdayız.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start space-x-4 mb-8">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-orange-900">
                    {step.id}. {step.title}
                  </h3>
                  <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                    Adım {step.id}/4
                  </span>
                </div>
                <p className="text-gray-500">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="py-4">
                    <Progress value={(step.id) * 25} className="h-2 bg-orange-100" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
