import { Blog } from "@/types/blog";
import { CategoryBadge } from "./CategoryBadge";
import { format } from "date-fns";

interface BlogCardProps {
  blog: Blog;
  isActive: boolean;
  onClick: () => void;
}

export const BlogCard = ({ blog, isActive, onClick }: BlogCardProps) => {
  const formattedDate = format(new Date(blog.date), "MMM dd, yyyy");

  return (
    <article
      className={`blog-card ${isActive ? "blog-card-active" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-wrap gap-1.5">
          {blog.category.map((cat) => (
            <CategoryBadge key={cat} category={cat} />
          ))}
        </div>
        <time className="text-xs text-muted-foreground">{formattedDate}</time>
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-tight">
        {blog.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {blog.description}
      </p>
    </article>
  );
};
