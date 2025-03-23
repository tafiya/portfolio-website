export const dynamic = "force-dynamic";
import ProjectsPage from "@/components/pageComponant/projects/ProjectsPage";
import { getAllProject } from "@/service";

const Projects = async () => {
  const { data } = await getAllProject();

  return (
    <div>
      <ProjectsPage projects={{ data }}></ProjectsPage>
    </div>
  );
};

export default Projects;
