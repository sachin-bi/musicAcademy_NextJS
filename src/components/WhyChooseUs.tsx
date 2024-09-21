"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import Image from "next/image";


const musicSchoolContent = [
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description:
            'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
        title: 'Unleash Your Potential: Expert Guidance for Every Level',
        description:
            'Whether you’re a beginner or a seasoned musician, our expert instructors guide you through every step of your musical evolution. With a focus on technique, theory, and performance, we help you unlock your full potential.',
    },
    {
        title: 'Music Beyond the Notes: Cultivate Confidence and Creativity',
        description:
            'At our school, music is more than playing notes—it’s about expressing yourself. We foster an environment where creativity thrives, and students build confidence that transcends the classroom, resonating in all areas of life.',
    },
    {
        title: 'Join a Vibrant Community: Play, Learn, and Grow Together',
        description:
            'Our music school is more than a place of learning; it’s a community. Join like-minded musicians in group sessions, performances, and workshops that encourage collaboration and growth. Together, we create something extraordinary.',
    },
];




function WhyChooseUs() {
    return (
        <div>
            <StickyScroll contentClassName="" content={musicSchoolContent} />
        </div>
    )
}

export default WhyChooseUs
