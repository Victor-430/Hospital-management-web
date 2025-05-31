import React from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SearchIcon } from "lucide-react";

const searchSchema = z.object({
  search: z.string().optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

export const Search = () => {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data: SearchFormData) => {
    console.log("Search doctors:", data);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
        <div className="relative">
          <Input
            placeholder="Search doctors..."
            {...register("search")}
            className="pl-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </form>
    </div>
  );
};
