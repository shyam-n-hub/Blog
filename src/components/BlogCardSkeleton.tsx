import { Skeleton } from "@/components/ui/skeleton";

export const BlogCardSkeleton = () => {
  return (
    <div className="blog-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};
