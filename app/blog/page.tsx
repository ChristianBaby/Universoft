import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants/blog";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articulos sobre desarrollo de software, ciberseguridad, telecomunicaciones y tendencias tecnologicas.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <BackgroundOrbitals variant="dark" />
        <GradientBlob color="blue" size="md" className="-top-20 -left-20 opacity-25" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionHeader
            as="h1"
            label="Blog"
            title="Ideas y conocimiento para tu empresa"
            description="Articulos sobre tecnologia, software y buenas practicas para ayudarte a tomar mejores decisiones."
            light
          />
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-navy/6 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue/20 hover:-translate-y-1"
                >
                  {/* Cover image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-blue/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h2 className="font-display text-base font-bold leading-snug text-navy group-hover:text-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-navy/60 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-navy/6">
                      <span className="text-xs text-navy/40">{post.date}</span>
                      <span className="text-xs font-semibold text-blue group-hover:underline">
                        Leer mas →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
