import { Heart, MessageSquare } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  About_us_News_1,
  About_us_News_2,
  About_us_News_3,
  About_us_News_4,
} from "@/utils/image";
import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    title: "This Article's Title goes Here, but not too long.",
    date: "Monday 05, June 2023",
    author: "By Author",
    image: About_us_News_1,
    likes: 86,
    comments: 59,
  },
  {
    id: 2,
    title: "This Article's Title goes Here, but not too long.",
    date: "Monday 05, June 2023",
    author: "By Author",
    image: About_us_News_2,
    likes: 86,
    comments: 59,
  },
  {
    id: 3,
    title: "This Article's Title goes Here, but not too long.",
    date: "Monday 05, June 2023",
    author: "By Author",
    image: About_us_News_3,
    likes: 86,
    comments: 59,
  },
  {
    id: 4,
    title: "This Article's Title goes Here, but not too long.",
    date: "Monday 05, June 2023",
    author: "By Author",
    image: About_us_News_4,
    likes: 86,
    comments: 59,
  },
];

export const NewsCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {newsArticles.map((article) => (
        <Card
          key={article.id}
          className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <div className="h-48 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4">
            <div className="text-xs text-gray-500 mb-2">
              <span className="text-blue-500">{article.author}</span> |{" "}
              {article.date}
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm line-clamp-2 leading-snug">
              {article.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                <span>{article.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span>{article.comments}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
