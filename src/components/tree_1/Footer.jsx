import GithubSvg from "@/assets/github.svg"
import InstagramSvg from "@/assets/instagram.svg"

export default Footer
function Footer() {
    return (
        <footer className="flex flex-wrap justify-between items-center gap-5 p-4 border-t border-gray-500 text-sm">
            <div className="flex gap-3">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="cursor-pointer">
                    <img src={GithubSvg.src} alt="github" className="h-[24px] w-[24px]"/>
                </div>
                <div className="cursor-pointer">
                    <img src={InstagramSvg.src} alt="instagram" className="h-[24px] w-[24px]" />
                </div>
            </div>
            <p className="">
                © 2024. All rights reserved.
            </p>
        </footer>
    )
}


