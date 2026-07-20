"use client";
import Footer from "@/components/Footer";
import BlogCard from "@/components/Homepage/blogs/BlogCard";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home(): React.JSX.Element {
  const blogs = [
    {
      title: "How to build Shopping Cart using HTML, CSS and Js.",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1662211619297/WHIzah9m5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      link: "https://sudhanshuranjanblogs.hashnode.dev/making-a-shopping-cart",
      id: "1",
    },
    {
      title: "JavaScript Interview Question (Directory Mapping 📂)",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/4iN-LAzqAdE/upload/8491114c3ac15ca04606ee141e1fd598.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      link: "https://sudhanshuranjanblogs.hashnode.dev/js-interview-ques-directory-mapping",
      id: "2",
    },
    {
      title: "Oracle Interview Experience (On-Campus)",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1691046429941/a65b7643-50d5-4433-a3a7-890b854ce137.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      link: "https://sudhanshuranjanblogs.hashnode.dev/oracle-interview-experience-on-campus",
      id: "3",
    },
  ];

  return (
    <div className="min-h-screen subpixel-antialiased w-full py-10 relative lg:px-24 md:px-16 px-6">
      <NavBar />
      <div className="is-reveal pt-36 pb-16 z-0 m-auto lg:w-[58rem] md:w-[90%]">
        <div className="">
          <h1 className="font-extrabold lg:text-7xl md:text-6xl text-5xl text-white lg:mb-5 md:mb-5 mb-5">
            I also write 📝
          </h1>
          <h1 className="font-extrabold lg:text-7xl md:text-6xl h-32 text-5xl bg-clip-text text-transparent bg-gradient-to-l from-pink-600 to-purple-500">
            Technical Blogs.
          </h1>
        </div>

        <div className="flex my-16 flex-wrap items-center justify-evenly gap-6 gap-y-16">
          {blogs.map((blog, idx) => (
            <BlogCard
              title={blog.title}
              id={blog.id}
              key={blog.id}
              image={blog.image}
              link={blog.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
