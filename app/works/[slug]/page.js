import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const { title, tagline } = project.en;
  return {
    title,
    description: tagline,
    openGraph: {
      title: `${title} — Tatsuya Ogawa`,
      description: tagline,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
