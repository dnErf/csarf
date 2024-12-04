import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Developer from "../Developer"
import ThreeLoading from "../ThreeLoading"

import FigmaSvg from "@/assets/tree_1/figma.svg"
import FramerSvg from "@/assets/tree_1/framer.svg"
import NotionSvg from "@/assets/tree_1/notion.svg"

export default Experience

const experiences = [
    {
        id: 1,
        name: "Framer",
        position: "Senior Web Developer",
        duration: "2022 - Present",
        title: "framer serves as my go-to tool for creating interactive prototypes. i use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: FramerSvg.src,
        animation: "victory"
    },
    {
        id: 2,
        name: "Figma",
        position: "Web Developer",
        duration: "2020 - 2022",
        title: "figma my collaborative design platform of choice. i utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. its cloud-base.",
        icon: FigmaSvg.src,
        animation: "clapping",
    },
    {
        id: 3,
        name: "Notion",
        position: "Junior Web Developer",
        duration: "2019 - 2020",
        title: "notion helps me keep my projects organized. i use it for project management, task tracking and as centeral hub for documentation, ensuring that everything from design notes to.",
        icon: NotionSvg.src,
        animation: "salute"
    },
]

function Experience() {
    const [ animationName, setAnimationName ] = useState("idle")

    return (
        <section id="work" className="c-space my-20">
            <div className="w-full text-white">
                <p className="head-text">
                    work experience
                </p>
                <div className="work-container">
                    <div className="work-convas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10,10,10]} intensity={1} />
                            <directionalLight position={[10,10,10]} intensity={1} />

                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<ThreeLoading />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="px-2.5 sm:px-4 py-4 sm:py-8">
                        {
                            experiences.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName("idle")}
                                    className="work-content_container group"
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={item.icon} alt="" className="h-full w-full" />
                                        </div>
                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-4 px-2.5 py-5">
                                        <p className="font-bold text-white-800">
                                            {item.name}
                                        </p>
                                        <p className="text-sm mb-5">
                                            {item.position} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">
                                            {item.title}
                                        </p>
                                    </div>

                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}