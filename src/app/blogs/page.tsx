type BlogPost = {
  id: number;
  title: string;
  image: string; // base64
  content: string; // base64
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
        <div className="w-full max-w-[1140px] mt-5 p-5 lg:p-0">
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="blog-holder card">
                <a href={`/blogs/${post.id}`}>
                  <h3>{post.title}</h3>
                  <img
                    src={`${post.image}`}
                    alt=''
                    style={{ width: '100%', height: '150px' }}
                  />
                  <p className="blog-content-holder">{post.content}</p>
                </a>
              </li>
            ))}
          </ul>
           
          <hr className="w-1/2 mx-auto mt-10 mb-10" />
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
