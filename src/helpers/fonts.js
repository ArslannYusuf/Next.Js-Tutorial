import { Poppins, Montserrat } from "next/font/google"; /* birden fazla font import edilebilir */

export const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["300", "500", "800"],
  variable:
    "--font-montserrat" /* variable olusturup css dosyasinda kullaniyoruz, ilgili component de ise className olarak  {font_ismi.variable} vermeliyim*/,
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-poppins",
});
