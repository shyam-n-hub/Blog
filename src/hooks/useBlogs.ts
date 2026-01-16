import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogApi } from "@/lib/api";
import { CreateBlogData } from "@/types/blog";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: blogApi.getAll,
  });
};

export const useBlog = (id: number | null) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogApi.getById(id!),
    enabled: id !== null,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBlogData) => blogApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
