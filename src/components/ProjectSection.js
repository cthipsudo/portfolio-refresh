
import SkillSetIcons from "../data/SkillSetIcons";
import { v4 as uuidv4 } from "uuid";


const ProjectSection = () => {

  const skillIcons = SkillSetIcons.map((item) => {
    return <img className="skillset-icon" key={uuidv4()} src={require(`../images/${item.fileName}`)} alt={`item.alt`}/>
  });

  return(
    <section>
      <div className="project-header flex justify-between px-4">
        <h3 className="underline">Projects</h3>
        <div className="flex items-center gap-2">
          <h4 className="">Skillset:</h4>
          {skillIcons}
        </div>
      </div>

      <div>
        Showcase Projects here
      </div>
    </section>
  );
}

export default ProjectSection;