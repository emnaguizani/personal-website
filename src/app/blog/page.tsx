import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Blog | Emna Guizani",
  description:
    "Thoughts on cloud computing, DevOps, and software engineering from Emna Guizani.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SectionLayout>
      <SectionHeading
        title="Blog"
        subtitle="Thoughts on cloud computing, DevOps, and software engineering."
      />
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet — check back soon.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  {post.date
                    ? format(new Date(post.date), "MMMM d, yyyy")
                    : "Date unknown"}
                </div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-primary font-medium">
                    Read more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </SectionLayout>
  );
}
