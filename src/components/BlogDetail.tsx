import { useBlog } from "@/hooks/useBlogs";
import { CategoryBadge } from "./CategoryBadge";
import { BlogDetailSkeleton } from "./BlogDetailSkeleton";
import { format } from "date-fns";
import { AlertCircle, Clock, Share2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface BlogDetailProps {
  blogId: number | null;
}

export const BlogDetail = ({ blogId }: BlogDetailProps) => {
  const { data: blog, isLoading, error } = useBlog(blogId);

  if (!blogId) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📖</span>
          </div>
          <h3 className="font-display text-xl text-foreground mb-2">Select an article</h3>
          <p className="text-muted-foreground text-sm">
            Choose a blog from the list to read its content
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  if (error || !blog) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load blog details. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  const formattedDate = format(new Date(blog.date), "MMM dd, yyyy");
  const readTime = Math.ceil(blog.content.split(" ").length / 200);

  return (
    <article className="animate-fade-in">
      {blog.coverImage && (
        <div className="relative overflow-hidden rounded-xl mb-6">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {blog.category.map((cat) => (
          <CategoryBadge key={cat} category={cat} />
        ))}
        <span className="text-muted-foreground text-sm flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {readTime} min read
        </span>
      </div>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
        {blog.title}
      </h1>

      <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
        <time className="text-muted-foreground text-sm">{formattedDate}</time>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="w-4 h-4" />
          Share Article
        </Button>
      </div>

      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        {blog.description}
      </p>

      <div className="prose prose-lg max-w-none">
        <div className="text-foreground leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              #{cat.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
