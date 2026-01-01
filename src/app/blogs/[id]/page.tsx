"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
}

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://admin.voiceoceanllp.com/api/get/blog/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data: BlogPost = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    
    <div>

      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <div className="flex justify-between gap-5">
            <p className="text-base text-primary">HOME</p>
            <p className="text-base text-primary">BLOG</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            BLOG
          </p>
        </div>
      </div>

      <div className="blog-wrapper">
        <h1 className="blog-title">{blog.title}</h1>
        <img src={`${blog.image}`} alt='' />
        <p className="blog-content">{blog.content}</p>
      </div>
    </div>
  );
}
