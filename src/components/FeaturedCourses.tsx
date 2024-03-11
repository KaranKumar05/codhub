"use client";
import courseData from "@/data/coursesData.json";
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses;
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
              Featured Courses
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn with the Best
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="">
            <div className="max-w-5xl mx-auto px-5">
              <HoverEffect items={featuredCourses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
