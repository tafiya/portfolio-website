export const dynamic = "force-dynamic";
import SkillPage from "@/components/pageComponant/skill/SkillPage";
import { getAllSkills } from "@/service";
import React from "react";
const Skills = async () => {
  const { data } = await getAllSkills();

  return (
    <div>
      <SkillPage skillList={{ data }}></SkillPage>
    </div>
  );
};

export default Skills;
