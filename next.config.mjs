/* dis kaynaklardan alinan image'ler burada bulunmaktadir 
    * eger remote image'nin  height ve width'i degerlerini bilmiyorsak "fill" methodunu kullanabiliriz, default olarak parent elementinin height ve width'i kullandigindan "cover" methodu kullanilir
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'loremflickr.com',
          },
        ],
    }
};

export default nextConfig;