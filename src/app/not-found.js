import Link from 'next/link'
 
export default function NotFound() {

    /* sayfalarda kullanılan  notFound() ifadesi de NotFound sayfasına yönlendirir. her segmente yazilabilir. */


  return (
    <div className="text-center align-items-center justify-content-center mt-5">
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}