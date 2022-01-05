

const Project = (props) => {
  return(
    <div className="project text-white flex items-center justify-center">
      <div className="content bg-black">
        <p><a href={props.repo}>View <br/> Project</a></p>
      </div>
    </div>
  );
}

export default Project;