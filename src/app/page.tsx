import FindNearbyButton from "./ui/FindNearbyButton";
import Link from "next/link";
import { TextAnimate } from "../components/magicui/text-animate";
import ListOfNgosButton from "./ui/ListOfNgosButton";
import OurServicesText from "./components/hero/OurServicesText";
import OurServicesCards from "./components/hero/OurServicesCards";

export default function Home() {
	return (
		<div>
			<div
				className="bg-green-900 bg-center bg-contain  h-screen pb-12 px-4"
				style={{ backgroundImage: `url('/home-hero.png')` }}
			>
				<div className="relative flex flex-col items-center justify-center h-full">
					<TextAnimate
						className="md:text-7xl text-5xl text-center text-white font-bold font-[Poppins] pt-14"
						animation="blurInUp"
						by="character"
						once
					>
						Help Animals in Need
					</TextAnimate>
					<TextAnimate className="text-white text-lg text-center mt-4">
						Be the helping hand for needy animals.
					</TextAnimate>
					<FindNearbyButton />
					<ListOfNgosButton />
					<img
						className="absolute -bottom-10"
						src="/hero/dog.gif"
						alt="dog"
					/>
				</div>
			</div>
			{/* services cards */}
			<div className="bg-gray-100 flex flex-col items-center px-2 md:px-8 py-12">
				<OurServicesText />
				<OurServicesCards />
			</div>
		</div>
	);
}
