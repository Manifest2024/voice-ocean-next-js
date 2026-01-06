import { Metadata } from "next";

const ADMIN_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL;

interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  meta_title: string;
  meta_description: string;
}

/* =========================
   HELPERS
========================= */
const getImageUrl = (image?: string | null) => {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `${ADMIN_BASE_URL}${image}`;
};

/* =========================
   SEO METADATA
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(
    `${ADMIN_BASE_URL}/api/get/blog/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return {
      title: "Blog | Voice Ocean LLP",
      description: "Voice Ocean LLP Blog",
    };
  }

  const blog: BlogPost = await res.json();

  const description =
    blog.meta_description
      ?.replace(/<[^>]+>/g, "")
      .substring(0, 160) || "Voice Ocean LLP Blog";

  return {
    title: `${blog.meta_title} | Voice Ocean LLP`,
    description,
    openGraph: {
      title: blog.meta_title,
      description,
      images: [getImageUrl(blog.image)],
      type: "article",
    },
  };
}

/* =========================
   PAGE
========================= */
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [blogRes, recentRes] = await Promise.all([
    fetch(`${ADMIN_BASE_URL}/api/get/blog/${id}`, { cache: "no-store" }),
    fetch(`${ADMIN_BASE_URL}/api/get/blog`, { cache: "no-store" }),
  ]);

  if (!blogRes.ok) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  const blog: BlogPost = await blogRes.json();
  const recentBlogs: BlogPost[] = recentRes.ok ? await recentRes.json() : [];

  return (
    <div>
      {/* HERO */}
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <p className="text-[32px] text-white pb-5 border-b-4 border-primary">
          BLOG
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1140px] mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* MAIN BLOG */}
        <div className="lg:col-span-2">
          {blog.image && (
            <img
              src={getImageUrl(blog.image)}
              alt={blog.title}
              className="w-full h-[420px] object-cover rounded-2xl mb-8"
            />
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {blog.title}
          </h1>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* RECENT BLOGS */}
        <aside>
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-6 border-b pb-3">
              Recent Blogs
            </h3>

            <ul className="space-y-5">
              {recentBlogs
                .filter((b) => b.id !== blog.id)
                .slice(0, 5)
                .map((item) => (
                  <li key={item.id} className="group">
                    <a
                      href={`/blogs/${item.id}`}
                      className="flex gap-4 items-center"
                    >
                      {item.image && (
                        <img
                          src={getImageUrl(item.image)}
                          alt={item.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                      )}

                      <p className="text-sm font-medium text-gray-800 group-hover:text-primary line-clamp-2">
                        {item.title}
                      </p>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
