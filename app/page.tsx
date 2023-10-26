// "use client"
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import Image from "next/image";

import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchSkill } from "../utils/fetchSkills"
import  {fetchPageInfo}  from "../utils/fecthPageInfo"
import { fetchExperience } from "@/utils/fecthExperience";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProject } from "@/utils/fetchProjects";



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


// export async function getServerSideProps() {
//   const socials: Social[] = await fetchSocials();
//   const pageInfo: PageInfo = await fetchPageInfo();
  
//   const experiences: Experience[] = await fetchExperience();
//   const skills: Skill[] = await fetchSkill();
//   const projects: Project[] = await fetchProject();
//   return {pageInfo}
// }

export default async function Home() {
  


  //  console.log(experiences)
  return (
    <div className="bg-[hsl(0,0%,14%)]  text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
     
      <Header   />
      <section id="hero" className="snap-start">
        <Hero   />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience  />
      </section>

      <section id="skills" className="snap-start">
        <Skills  />
      </section>

      <section id="projects" className="snap-start">
        <Projects  />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            {" "}
            <Image
              className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
              src={"https://i.imgur.com/e2yvD6A.png"}
              alt="Mockup"
              width="600"
              height="800"
            ></Image>{" "}
          </div>
        </footer>
      </Link>
    </div>
  );
}


// export const getStaticProps: GetStaticProps = async () => {
//   const skills: Skill[] = await fetchSkill();
//   const socials: Social[] = await fetchSocials();  
//   const pageInfo: PageInfo = await fetchPageInfo()
//   const experiences: Experience[] = await fetchExperience();
//   const projects: Project[] = await fetchProject()


//   return {
//     props: {
//       skills,
//       socials,
//       // experiences,
//       projects,
//       pageInfo

//     },
//     revalidate: 10,
//   }
  
// }

