type BlogPost = {
  id: number;
  title: string;
  image: string; 
  content: string; 
};

async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch('https://admin.voiceoceanllp.com/api/get/blog', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch blogs');

  return res.json();
}

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    
    <div>
      <div className="w-screen overflow-hidden lg:overflow-scroll">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <div className="flex justify-between gap-5">
            <p className="text-base text-primary">HOME</p>
            <p className="text-base text-primary">BLOGS</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            BLOGS
          </p>
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
      <div className="w-full max-w-[1140px] mt-8 mx-auto px-5 lg:px-0">
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <li
        key={post.id}
        className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <a href={`/blogs/${post.id}`} className="block h-full">
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-5 flex flex-col h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#6B6EB0] transition">
              {post.title}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {post.content.replace(/<[^>]+>/g, "")}
            </p>

            <span className="mt-auto text-sm font-medium text-[#6B6EB0] group-hover:underline">
              Read more →
            </span>
          </div>
        </a>
      </li>
    ))}
  </ul>

  <hr className="w-1/2 mx-auto mt-14 mb-10 border-gray-300" />
</div>

        <div className="bg-primary w-screen py-[50px] flex justify-center">
          <div className="max-w-[1140px] flex justify-around text-white w-full flex-col lg:flex-row gap-y-5">
            <div className="text-center">
              <p className="text-5xl font-bold">25000+</p>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">15</p>
              <p className="text-lg">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">352</p>
              <p className="text-lg">Cups of Coffee</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">178</p>
              <p className="text-lg">High Score</p>
            </div>
          </div>
        </div>

        <div className="w-screen flex justify-center py-10">
          <div className="max-w-[1140px] w-full home-slider mt-4 mb-10">
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
