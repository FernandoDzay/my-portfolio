import Project from "@/_pages/Projects/[Project]";
import { getProjectBySlug } from "@/_pages/Projects/projectsJson";
import { notFound } from 'next/navigation';

export default async function Page({params}: {params: Promise<{project: string}>}) {
    const slug = (await params).project;
    const project = getProjectBySlug(slug);
    
    if(!project) notFound();
    return <Project lang="es" project={project} />
}