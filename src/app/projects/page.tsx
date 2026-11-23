import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${profile.name}: Wize, Underbelly, smart locker booking, payments, and personal apps.`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-10 pt-36 md:pt-44">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            Featured <span className="gradient-text">projects</span>
          </>
        }
        text="Products I built at Delibo and personal apps I made to explore new ideas."
      />
      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </div>
  );
}
