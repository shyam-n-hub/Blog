import { Skeleton } from "@/components/ui/skeleton";

export const BlogDetailSkeleton = () => {
  return (
    <div className="animate-pulse">
      <Skeleton className="w-full h-64 rounded-xl mb-6" />
      <Skeleton className="h-10 w-3/4 mb-4" />
      <div className="flex items-center gap-4 mb-6">
        <Skeleton className="h-5 w-20 rounded-full" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-5 w-full mb-2" />
      <Skeleton className="h-5 w-2/3 mb-8" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
};
