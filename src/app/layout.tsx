import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yetkili Vize | Profesyonel Vize Danışmanlık Hizmetleri",
  description:
    "Yetkili Vize ile Schengen, Amerika, İngiltere ve dünya genelinde tüm ülke vizeleriniz için profesyonel danışmanlık hizmetleri. Yüksek başarı oranı, hızlı ve güvenilir hizmet.",
  keywords: "vize, vize danışmanlığı, schengen vize, amerika vizesi, ingiltere vizesi, kanada vizesi, bursa vize danışmanlığı",
  authors: [{ name: "Yetkili Vize" }],
  creator: "Yetkili Vize",
  publisher: "Yetkili Vize",
  robots: "index, follow",
  applicationName: "Yetkili Vize",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
