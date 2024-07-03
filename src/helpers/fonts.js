import { Inter, Roboto, Montserrat } from "next/font/google"; /* birden fazla font import edilebilir */

export const inter = Inter({ subsets: ["latin"] });

export const montserrat = Montserrat({ 
    subsets: ["latin-ext"],
    weight: ["300","500", "900"],
    variable: "--font-montserrat" /* variable olusturup css dosyasinda kullaniyoruz, ilgili component de ise className olarak  {font_ismi.variable} vermeliyim*/
 });