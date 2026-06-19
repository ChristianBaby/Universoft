import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <span className="inline-block rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
          {post.category}
        </span>

        <h1 className="font-display mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-2 text-sm text-navy/40">{post.date}</p>

        {/* Cover image */}
        <div className="mt-8 relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-3xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="mt-8 rounded-2xl bg-cream p-8 text-sm leading-relaxed text-navy/70">
          <p>{post.excerpt}</p>
          <p className="mt-4 text-navy/40 italic">
            — Contenido completo proximamente. Estamos trabajando en este articulo.
          </p>
        </div>
      </article>
    </main>
  );
}
