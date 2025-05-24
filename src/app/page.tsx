import Image from "next/image";
import FindNearbyButton from "./ui/FindNearbyButton";
import Link from "next/link";
import { TextAnimate } from "../components/magicui/text-animate";
import { Cover } from "../components/ui/cover";

const cardsData = [
	{
		title: "On Spot Care",
		src: "/spot-care.jpg",
		description:
			"Providing immediate assistance to animals in distress, Connecting you to nearby NGOs and care providers. Dedicated to ensuring timely support and rescue, Because every life deserves compassion and care",
	},
	{
		title: "NGOs Directory",
		src: "ngo-directory.jpg",
		description:
			"Explore our extensive directory of NGOs committed to animal welfare and rescue. Find the right support near you, because every animal deserves care.",
	},
	{
		title: "Volunteer Opportunities",
		src: "https://static.jobscan.co/blog/uploads/Volunteers-working-together-1.jpg",
		description:
			"Join hands with nearby NGOs to create meaningful change. Volunteer your time to support animals in need. Be a part of a compassionate community, Making a difference, one act of kindness at a time.",
	},
	{
		title: "Donation",
		src: "/donation.png",
		description:
			"Explore our extensive directory of NGOs committed to animal welfare and rescue. Find the right support near you, because every animal deserves care.",
	},
];

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
					<p className="text-white text-lg text-center mt-8">
						Be the helping hand for needy animals.
					</p>
					<FindNearbyButton />
					<Link
						className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 text-lg font-semibold mt-4"
						href="/ngo-list"
					>
						List of NGOs
					</Link>
					<img
						className="absolute -bottom-10"
						src="/hero/dog.gif"
						alt="dog"
					/>
				</div>
			</div>
			{/* services cards */}
			<div className="bg-gray-100 flex flex-col items-center px-2 md:px-8 py-16">
				<h3 className="text-5xl font-bold">Our <Cover>Services</Cover></h3>
				<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
					{cardsData.map((card, index) => (
						<div
							key={index}
							className="group relative h-[360px] max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
						>
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
								<img
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
									src={card.src}
									alt={card.title}
								/>
							</div>
							<div className="p-4">
								<h5 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-teal-600">
									{card.title}
								</h5>
								<p className="text-sm text-gray-600 line-clamp-4">
									{card.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
