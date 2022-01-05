import SkillSetIcons from "../data/SkillSetIcons";
import TechSetIcons from "../data/TechSetIcons";
import { v4 as uuidv4 } from "uuid";

const ProjectSection = () => {
  const additionalSkillIcons = SkillSetIcons.map((item) => {
    return (
      <img
        className="skillset-icon"
        key={uuidv4()}
        src={require(`../images/${item.fileName}`)}
        alt={item.alt}
      />
    );
  });

  const techStackSkillIcons = TechSetIcons.map((item) => {
    return (
      <img
        className="skillset-icon"
        key={uuidv4()}
        src={require(`../images/${item.fileName}`)}
        alt={item.alt}
      />
    );
  });

  return (
    <section>
      <div className="project-header flex flex-col items-start px-4">
        <h3 className="underline">Projects</h3>
      </div>

      <div className="project-wrapper">Showcase Projects here</div>
      
      <div className="skills-wrapper px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <h4>Preferred Stack:</h4>
            {techStackSkillIcons}
          </div>
          <div className="flex gap-2">
            <h4 className="">Additional Skills:</h4>
            {additionalSkillIcons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
