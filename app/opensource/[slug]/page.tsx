import {extractMarkdownData, getOposts, MarkdownToHtml} from "@/app/_helpers";
import Link from "next/link";

export async function generateStaticParams  ()  {
    const posts1 = await getOposts();
    return posts1.map(post => {
        return {
            slug : extractMarkdownData(post.content).data.slug
        }
    })

}

const Blog = async ({ params }: { params: { slug: string } }) => {
    const posts1 = await getOposts();
    const post = posts1.map(p => extractMarkdownData(p.content)).find(p => p.data.slug === params.slug);
  
    if (post) {
      return (
        <>
        <div className="md:flex justify-center mt-36 pt-12 md:space-x-16">
          <Link href="/casestudy"><img src="/back.svg" className="mt-6"/></Link>
          <h1 className="text-center font-bold text-3xl mt-4">{post.data.title}</h1>
          </div>
          <div className="md:flex justify-center mt-24 mb-24">
            <MarkdownToHtml data={post.content}/>
          </div>
        </>
      );
    }
  
    return <p>No post found</p>;
  };
  
export default Blog