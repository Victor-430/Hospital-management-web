"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/utils/Validations/newsletter";
import { NewsletterData, variantProps } from "../Types/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Send } from "lucide-react";

export const NewsletterForm = ({ variant }: { variant: variantProps }) => {
  const form = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterData) => {
    console.log("Newsletter subscription:", data);
    // Handle newsletter subscription
    form.reset();
  };

  const inputClasses = {
    section:
      "bg-gray-50 rounded-[50px] border-gray-200 h-12 sm:h-14 px-4 sm:px-6 flex-1 min-w-0",
    footer: "bg-[#BFD2F8] rounded-lg h-10 sm:h-12 px-4 flex-1 min-w-0",
  };

  // Button styles based on variant
  const buttonClasses = {
    section:
      "bg-[#053C6D] h-12 sm:h-14 hover:scale-105 px-4 sm:px-8 rounded-3xl text-white text-sm sm:text-base whitespace-nowrap",
    footer:
      "bg-[#053C6D] h-10 sm:h-12 hover:scale-105 px-4 sm:px-6 rounded-lg text-white text-sm whitespace-nowrap",
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md mx-auto sm:mx-0"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow ">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className={inputClasses[variant]}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Conditional icon for footer variant */}
        {variant === "footer" && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Send className="h-8 w-8 text-[#053C6D] rotate-45" />
          </div>
        )}

        <Button type="submit" className={buttonClasses[variant]}>
          Subscribe
        </Button>
      </form>
    </Form>
  );
};
