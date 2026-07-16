import Link from "next/link";
export const metadata = {
    title: "Services",
}

export default function Services(){
    return (
        <>
         <h1>Services</h1>
         <p><Link href="/services/web-dev">Web Development</Link></p>
         <p><Link href="/">App Development</Link></p>
         <p><Link href="/">App/Web Design</Link></p>
         <p><Link href="/">Seo</Link></p>
         
        </>
    )
}