"use client"

// import React from 'react'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebiners() {

    const futureWebinars = [
        {
            title: "Mastering the Art of Piano: Techniques and Practice",
            description:
                "Join our expert piano instructors for a comprehensive webinar on improving your technique, understanding musical theory, and mastering the art of piano. Suitable for all skill levels.",
            link: "/",
            isFeatured: true,
        },
        {
            title: "The Science of Sound: Exploring Music Production",
            description:
                "Learn the essentials of music production, from recording and mixing to mastering tracks. Perfect for aspiring music producers and curious learners looking to create their own music.",
            link: "/",
            isFeatured: false,
        },
        {
            title: "Vocal Techniques: From Basics to Brilliance",
            description:
                "In this webinar, we'll cover everything from vocal warm-ups to performance techniques, helping you refine your voice and discover your vocal style.",
            link: "/",
            isFeatured: true,
        },
        {
            title: "Music Theory Made Simple: Foundations for All Musicians",
            description:
                "This webinar breaks down the fundamentals of music theory, making it accessible to musicians of all levels. Enhance your understanding of scales, chords, and harmony.",
            link: "/",
            isFeatured: false,
        },
        {
            title: "Jazz Improvisation: Unlock Your Creativity",
            description:
                "Explore the world of jazz improvisation, learning techniques to express your creativity and develop your unique sound in this interactive session led by professional jazz musicians.",
            link: "/",
            isFeatured: true,
        },
        {
            title: "Orchestration Essentials: Writing for Multiple Instruments",
            description:
                "Aimed at composers and arrangers, this webinar dives into the intricacies of orchestration, helping you write and arrange music for ensembles and orchestras.",
            link: "/",
            isFeatured: false,
        },
        {
            title: "Developing Your Musical Ear: Aural Skills Workshop",
            description:
                "Sharpen your ability to recognize pitches, intervals, and chords through focused exercises designed to develop your aural skills in this interactive webinar.",
            link: "/",
            isFeatured: false,
        },
    ];


    return (
        <div className="p-12 bg-gray-900">

            <div className="max-w-7x1 mx-auto px-0.5 sm:px-10">

                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase ">FEATURED WEBINARS</h2>
                    <p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
                    >Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    {/* <div className="max-w-5xl mx-auto px-8"> */}
                        <HoverEffect items={futureWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: webinar.link
                            }
                        ))} />
                    {/* </div> */}
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
                    >
                        View All Webinars
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default UpcomingWebiners
