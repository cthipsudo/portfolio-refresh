import SkillSetIcons from "../data/SkillSetIcons";
import TechSetIcons from "../data/TechSetIcons";
import ProjectsData from "../data/ProjectsData";
import { v4 as uuidv4 } from "uuid";
import Project from "./Project";

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

  const Projects = ProjectsData.map((item) => {
    return (
      <Project
        file={item.projectPreviewFileName}
        preview={item.projectPreviewLink}
        repo={item.projectRepoLink}
      />
    );
  });

  return (
    <section className="project-section">
      <div className="section-wrapper-inner">
        <div className="project-header flex flex-col items-start md:items-start mb-4">
          <h3 className="underline">Projects</h3>
        </div>

        <div className="project-wrapper flex flex-wrap justify-start gap-4">
          {Projects}
        </div>

        <div className="skills-wrapper">
          <div className="flex flex-col items-start md:items-center md:flex-row md:justify-between">
            <div className="flex flex-col items-start md:flex-row gap-2 mt-10 md:mt-4">
              <h4>Preferred Stack:</h4>
              <div className="flex flex-wrap gap-4">
                {techStackSkillIcons}
              </div>
            </div>
            <div className="flex flex-col items-start md:flex-row gap-2 mt-4">
              <h4 className="">Additional Skills:</h4>
              <div className="flex flex-wrap gap-4">
                {additionalSkillIcons}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
