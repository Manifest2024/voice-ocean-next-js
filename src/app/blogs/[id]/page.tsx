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
   SEO METADATA
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(
    `https://admin.voiceoceanllp.com/api/get/blog/${id}`,
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
   PAGE
========================= */
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `https://admin.voiceoceanllp.com/api/get/blog/${id}`,
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
        <p className="text-[32px] text-white pb-5 border-b-4 border-primary">
          BLOG
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-[900px] mx-auto px-5 py-12">
        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {blog.title}
        </h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
