import { notFound } from "next/navigation";

export async function generateMetadata({ params }){
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}
export default async function Blog({ params }){
  // console.log(await params)
  const  { blogID } = await params;
  // if (blogID === "test") {
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return (
    <div>Blog {blogID}</div>
  )
}
