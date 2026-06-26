import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllPostSlugs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Emna Guizani`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar className="h-3 w-3" />
          {post.date
            ? format(new Date(post.date), "MMMM d, yyyy")
            : "Date unknown"}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 h-px bg-border" />
      </header>

      {/* MDX content */}
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
