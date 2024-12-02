import { useState } from "react"
import Globe from "react-globe.gl"
import CopySvg from "@/assets/tree_1/copy.svg"
import TickSvg from "@/assets/tree_1/tick.svg"
import Button from "../Button"

export default About

let about_email = "about@company.org"

function About() {
    let [hasCopied, setHasCopied] = useState(false)
    
    const handleCopy = () => {
        navigator.clipboard.writeText(about_email)
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 1000)
    }

    return (
        <section id="about" className="c-space">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 gap-5 h-full mb-8">
                {/*  */}
                <div className="col-span-1 xl:row-span-3 sm:border sm:border-white">
                    <div className="grid-container p-4 md:p-8 gap-4">
                        <img src="images/tree_1/grid_1.png" alt="grid-1" className="h-fit w-full sm:h-[276px] object-contain" />

                        <div>
                            <p className="grid-headtext mb-2">hello</p>
                            <p className="grid-subtext">
                                with 99 years of experience, i honed my skills in both frontend and backend dev, creating dynamic and responsive websites
                            </p>
                        </div>
                    </div>
                </div>
                
                {/*  */}
                <div className="col-span-1 xl:row-span-3 sm:border sm:border-white">
                    <div className="grid-container p-4 md:p-8 gap-4">
                        <img src="images/tree_1/grid_2.png" alt="grid-2" className="h-fit w-full sm:h-[276px] object-contain" />

                        <div>
                            <p className="grid-headtext mb-2">tech stack</p>
                            <p className="grid-subtext">
                                i specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* GLOBE */}
                <div className="col-span-1 xl:row-span-4 sm:border sm:border-white">
                    <div className="grid-container p-4 md:p-8 gap-4">
                        <div className="flex justify-center items-center h-fit sm:h-[326px] w-full rounded-2xl">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: "croatia", color: "white", size: 10 }]}
                                showAtmosphere
                                showGraticules
                            />
                        </div>

                        <div>
                            <p className="grid-headtext mb-2">i'm very flexible with time, communications & locations</p>
                            <p className="grid-subtext">i'm open to remote work worldwide</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                
                {/* - */}
                <div className="xl:col-span-2 xl:row-span-3 sm:border sm:border-white">
                    <div className="grid-container p-4 md:p-8 gap-4">
                        <img src="images/tree_1/grid_3.png" alt="grid-3" className="w-full sm:h-[266px] object-contain"/>

                        <div>
                            <p className="grid-headtext mb-2">Passion for Coding</p>
                            <p className="grid-subtext">
                                i love solving problems and building things through code. programming isn't just my profession,
                                &nbsp;it's my passion. i enjoy exploring new technologies, and enchancing my skills.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* CONTACT ME */}
                <div className="xl:col-span-1 xl:row-span-2 sm:border sm:border-white">
                    <div className="grid-container p-2 md:p-8 gap-2">
                        <img 
                            alt="grid-4"
                            src="images/tree_1/grid_4.png"
                            className="" 
                        />

                        <div className="gap-2">
                            <p className="grid-subtext text-center">contact me</p>
                            <div onClick={handleCopy} className="copy-container gap-2" >
                                <img src={hasCopied ? TickSvg.src : CopySvg.src} alt="copy email to clipboard" />
                                {/* text-gray_gradient */}
                                <p className="font-medium md:text-xl lg:text-2xl text-white">
                                    {about_email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
} 