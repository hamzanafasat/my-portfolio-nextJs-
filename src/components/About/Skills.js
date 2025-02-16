import { motion } from "framer-motion";

const SkillWraper = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light
			dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
			xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold  xs:text-[10px]  "
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 md:mt-20 mb-28 md:mb-8 w-full text-center md:text-6xl">Skills</h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
				dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
				md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light
					dark:text-dark p-6 font-mono text-3xl lg:text-2xl shadow-dark dark:shadow-light cursor-pointer lg:p-6
					md:p-3 xs:p-2 xs:text-xs"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <SkillWraper name={"React Native"} x={"4vw"} y={"-20vw"} />
        <SkillWraper name={"Nest.js"} x={"11vw"} y={"-14vw"} />
        <SkillWraper name={"Python"} x={"17vw"} y={"-7vw"} />
        <SkillWraper name={"Next.js"} x={"21vw"} y={"3vw"} />
        <SkillWraper name={"SCSS"} x={"-18vw"} y={"0vw"} />
        <SkillWraper name={"Redis"} x={"-16vw"} y={"9vw"} />
        <SkillWraper name={"RTK Query"} x={"0vw"} y={"12vw"} />
        <SkillWraper name={"Redux"} x={"14vw"} y={"10vw"} />
        <SkillWraper name={"AWS Cloud"} x={"0vw"} y={"19vw"} />
        <SkillWraper name={"Fastify"} x={"0vw"} y={"-12vw"} />
        <SkillWraper name={"React.js"} x={"-10vw"} y={"-15vw"} />
        <SkillWraper name={"Web Sockets"} x={"35vw"} y={"-5vw"} />
        <SkillWraper name={"Node.js"} x={"-22vw"} y={"-10vw"} />
        <SkillWraper name={"Microservices"} x={"-20vw"} y={"-19vw"} />
        <SkillWraper name={"MongoDB"} x={"-36vw"} y={"0vw"} />
        <SkillWraper name={"MongoDB"} x={"36vw"} y={"5vw"} />
        <SkillWraper name={"PostgreSQL"} x={"24vw"} y={"-14vw"} />
        <SkillWraper name={"JavaScript"} x={"-25vw"} y={"14vw"} />
        <SkillWraper name={"TypeScript"} x={"25vw"} y={"14vw"} />
      </div>
    </>
  );
};

export default Skills;
