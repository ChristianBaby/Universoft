import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User } from "lucide-react";
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

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-navy/40">
          <span>{post.date}</span>
          {post.author && (
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
          )}
          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          )}
        </div>

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

        {/* Article content */}
        {post.content && post.content.length > 0 ? (
          <div className="mt-12 space-y-10">
            {post.content.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-bold text-navy mb-4">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.body.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed text-navy/70"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(
                            /\*\*(.+?)\*\*/g,
                            '<strong class="text-navy font-semibold">$1</strong>'
                          ),
                      }}
                    />
                  ))}
                </div>
                {section.image && (
                  <div className="mt-6 relative h-56 sm:h-72 overflow-hidden rounded-2xl">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-cream p-8 text-sm leading-relaxed text-navy/70">
            <p>{post.excerpt}</p>
            <p className="mt-4 text-navy/40 italic">
              — Contenido completo proximamente. Estamos trabajando en este
              articulo.
            </p>
          </div>
        )}

        {/* Back link at bottom */}
        <div className="mt-16 pt-8 border-t border-navy/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Ver todos los articulos
          </Link>
        </div>
      </article>
    </main>
  );
}
