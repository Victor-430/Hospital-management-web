import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye } from "lucide-react";
import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    title: "This Article's Title goes Here, but not too long.",
    author: "By Author",
    date: "Monday 05, September 2022",
    image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
    likes: 86,
    views: 59,
  },
  {
    id: 2,
    title: "This Article's Title goes Here, but not too long.",
    author: "By Author",
    date: "Monday 05, September 2022",
    image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
    likes: 86,
    views: 59,
  },
  {
    id: 3,
    title: "This Article's Title goes Here, but not too long.",
    author: "By Author",
    date: "Monday 05, September 2022",
    image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
    likes: 86,
    views: 59,
  },
  {
    id: 4,
    title: "This Article's Title goes Here, but not too long.",
    author: "By Author",
    date: "Monday 05, September 2022",
    image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
    likes: 86,
    views: 59,
  },
];

export const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
            BETTER INFORMATION, BETTER HEALTH
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">News</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  <span className="text-blue-500">{article.author}</span> |{" "}
                  {article.date}
                </div>
                <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{article.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{article.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
