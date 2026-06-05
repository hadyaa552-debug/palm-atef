import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "هاسيندا راس الحكمة — بالم هيلز | Hacienda Ras El Hekma by Palm Hills",
  description: "هاسيندا راس الحكمة من بالم هيلز — Hacienda Ras El Hekma. مشروع ساحلي على ١٬٤٠٠ فدان و٤.٨ كم شاطئ. هاسيندا بالم هيلز: ٥٪ مقدم وتقسيط ١٠ سنوات. Palm Hills Hacienda الساحل الشمالي.",
  keywords: "هاسيندا راس الحكمة,بالم هيلز,هاسيندا بالم هيلز,Hacienda Ras El Hekma,Palm Hills,Hacienda Palm Hills,Palm Hills Hacienda,شاليهات راس الحكمة,فلل بالم هيلز",
};
export default function L({children}:{children:React.ReactNode}){return(
  <html lang="ar" dir="rtl"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=Amiri:wght@400;700&display=swap" rel="stylesheet"/>
  </head><body>{children}</body></html>
);}
