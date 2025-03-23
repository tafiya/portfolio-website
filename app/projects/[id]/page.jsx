import ProjectsDetails from "@/components/pageComponant/projects/ProjectDetail";

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  //console.log(id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
    {
      cache: "no-store",
    }
  );
  const projectData = await res.json();

  const project = projectData.data;
  return (
    <div>
      <ProjectsDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
