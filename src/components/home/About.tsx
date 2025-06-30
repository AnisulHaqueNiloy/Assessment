'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import im from '../../assets/Vector (4).png'
import right from '../../assets/div (1).png'
import { PreviouslyWorkedOn } from "./TagLayout"
export default function About() {
    return (
        <section className="relative py-14 flex justify-center items-center overflow-hidden md:py-32">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src={im} alt="About Background" fill className="object-cover" />
            </div>




            <div className="relative z-10 text-black">
                <div className="flex items-center justify-end my-14">
                    <Image src={right} alt="About Background" className="" />
                    <h1 className="text-xl md:text-2xl border-2 cursor-pointer border-black px-5 py-1 rounded-full">About</h1>
                </div>
                <h1 className="text-4xl md:text-7xl text-center font-bold mb-8">
                    I’ve been{" "}
                    <span className="bg-black text-white px-3 py-1 rounded-2xl inline-block">
                        Developing
                    </span>
                    <br />

                </h1>
                <h1 className="text-4xl md:text-7xl text-center font-bold"> Websites since <span className="bg-black px-3 py-1 rounded-2xl text-white">2013</span></h1>
                <div className="flex w-3/4 mx-auto justify-center mt-6">
                    <p className="text-center mt-4  ">We start every new client interaction with an in-depth discovery call where
                        we get to know each other and recommend the best course of
                        action.</p>
                </div>


                <div className="mt-8 hidden md:block"><PreviouslyWorkedOn></PreviouslyWorkedOn></div>
            </div>
        </section>

    )
}
