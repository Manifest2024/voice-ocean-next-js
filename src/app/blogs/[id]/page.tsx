import { Metadata } from "next";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  meta_title: string;
  meta_description: string;
}

/* =========================
   SEO METADATA (SERVER)
========================= */
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const res = await fetch(
    `https://admin.voiceoceanllp.com/api/get/blog/${params.id}`,
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
      images: [blog.image],
      type: "article",
    },
  };
}

/* =========================
   PAGE COMPONENT
========================= */
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://admin.voiceoceanllp.com/api/get/blog/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  const blog: BlogPost = await res.json();

  return (
    <div>
      {/* HERO */}
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            BLOG
          </p>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-[900px] mx-auto px-5 py-12">
        {/* IMAGE */}
        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* CONTENT */}
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
