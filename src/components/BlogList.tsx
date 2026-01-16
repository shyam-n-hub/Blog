import { useBlogs } from "@/hooks/useBlogs";
import { BlogCard } from "./BlogCard";
import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface BlogListProps {
  selectedBlogId: number | null;
  onSelectBlog: (id: number) => void;
}

export const BlogList = ({ selectedBlogId, onSelectBlog }: BlogListProps) => {
  const { data: blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load blogs. Make sure the JSON server is running on port 3001.
        </AlertDescription>
      </Alert>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blogs found. Create your first blog!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <BlogCard
            blog={blog}
            isActive={selectedBlogId === blog.id}
            onClick={() => onSelectBlog(blog.id)}
          />
        </div>
      ))}
    </div>
  );
};
