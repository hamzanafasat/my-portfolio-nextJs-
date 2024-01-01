import Head from "next/head";
import Layout from "@/components/Globel/Layout";
import AnimatedText from "@/components/Globel/AnimatedText";
import SmallProject from "@/components/Projects/SmallProject";
import FeaturedProject from "@/components/Projects/FeaturedProject";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import { FEATUREDPROJECTDATA, SMAILLPROJECTDATA } from "@/components/Globel/Text";

const projects = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="the page about hamzanafasat's projects" />
			</Head>
			<TransitionEffect />
			<main className="w-full mb-16 flex flex-col items-center justify-center">
				<Layout classname="pt-16 xl:p-8 ">
					<AnimatedText
						text={"Code that Speaks"}
						className="mb-16 xl:!text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
					/>
					<div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
						{/* FEATURED PROJECT*/}
						{/*  =============  */}
						{FEATUREDPROJECTDATA.map((item, i) => (
							<div key={i} className="col-span-12">
								<FeaturedProject
									type={item.type}
									title={item.title}
									summery={item.summery}
									link={item.link}
									github={item.github}
									image={item.image}
								/>
							</div>
						))}
						{/* SMALL PROJECT 1 */}
						{/*  =============  */}
						{SMAILLPROJECTDATA.map((item, i) => (
							<div key={i} className="col-span-6 sm:col-span-12">
								<SmallProject
									type={item.type}
									title={item.title}
									image={item.image}
									link={item.link}
									github={item.github}
								/>
							</div>
						))}
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
