import {extractMarkdownData, FrontMatter, getPosts} from "@/app/_helpers";
import Link from 'next/link'

const Blogs = async () => {
    const fetchData = async () => {
        const posts = await getPosts();
        return posts.map((p) => extractMarkdownData(p.content)).map((p) => p.data);
    };

    const renderBlogList = (posts: FrontMatter[]) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.slug} className="bg-white shadow-lg p-4 rounded-md">
                        <Link href={`/post/${post.slug}`}>
                            <h1 className="text-xl font-bold mb-2 cursor-pointer text-blue-500">{post.title}</h1>
                        </Link>
                        <p className="text-gray-600 mb-2">{new Date(post.date).toDateString()}</p>
                        <p className="text-gray-700">{post.author}</p>
                        {/* Add other details you want to display */}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto mt-36 mb-16">
            <h1 className="text-3xl font-bold mb-6">Blogs</h1>
            {await fetchData() ? renderBlogList(await fetchData()) : <p>Loading...</p>}
        </div>
    );
};

export default Blogs;