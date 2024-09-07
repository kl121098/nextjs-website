import {extractMarkdownData, FrontMatter, getCposts, getPosts} from "@/app/_helpers";
import Link from 'next/link'

const Blogs = async () => {
    const fetchData = async () => {
        const posts = await getCposts();
        return posts.map((p) => extractMarkdownData(p.content)).map((p) => p.data);
    };

    const renderBlogList = (posts: FrontMatter[]) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.slug} className="bg-white shadow-lg p-4 rounded-md">
                        <div className="flex justify-center">
                        <img src={post.image} className="h-48 w-48"/>
                        </div>
                        <Link href={`/casestudy/${post.slug}`}><div className="flex justify-center">
                        <button className="border-gray-300 border-2 rounded-md py-1 mt-8 px-4 bg">View Details</button> 
                        </div></Link>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto pt-56 pb-24">
            <h1 className="text-3xl font-bold mb-6 text-[#02BDD5] underline">Case Study List</h1>
            {await fetchData() ? renderBlogList(await fetchData()) : <p>Loading...</p>}
        </div>
    );
};

export default Blogs;