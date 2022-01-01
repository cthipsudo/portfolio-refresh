import SocialLinks from "../data/SocialLinks";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const socialLinks = SocialLinks.map((item) => {
    //console.log(item);
    return <a key={uuidv4()} href={item.link}><li className="social-item">{item.text}</li></a>;
  });

  return (
    <header className="flex justify-between py-4">
      <div className="Logo pl-4">cthipsudo/narrator_oscar</div>
      <nav>
        <ul className="flex gap-4 px-4">{socialLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
