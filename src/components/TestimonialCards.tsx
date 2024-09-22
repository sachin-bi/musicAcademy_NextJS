"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Joining this academy was the best decision I’ve ever made. The instructors are not only talented musicians but also amazing mentors who truly care about our growth.",
        name: "Emily Carter",
        title: "Student, Piano Enthusiast",
    },
    {
        quote: "I’ve learned more in the last 6 months here than I did in years of self-study. The personalized approach helped me unlock my potential in ways I never thought possible.",
        name: "James Rodriguez",
        title: "Student, Guitarist",
    },
    {
        quote: "As an instructor, it's incredibly fulfilling to see students transform their passion into real musical skill. The supportive environment here makes all the difference.",
        name: "Sarah Bennett",
        title: "Instructor, Vocal Coach",
    },
    {
        quote: "The community at this academy is unlike any other. We’re constantly encouraged to collaborate and share ideas, which has helped me become a more confident musician.",
        name: "David Lee",
        title: "Student, Drummer",
    },
    {
        quote: "Every lesson here is tailored to the individual, which allows us to explore our unique musical journeys. I couldn&#39;t ask for a better place to nurture my love for music.",
        name: "Sophia Martinez",
        title: "Student, Violinist",
    },
    {
        quote: "Teaching here has been a rewarding experience. The academy fosters a creative space where students can truly express themselves and grow as musicians.",
        name: "Michael Thompson",
        title: "Instructor, Guitarist",
    },
];



function TestimonialCards() {
    return (
        <>
            <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden"> 
                <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Testimonials: Voices Of Success </h2>
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                    {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"> */}
                    <div className="w-full max-w-7xl">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </>
    )


}

export default TestimonialCards
