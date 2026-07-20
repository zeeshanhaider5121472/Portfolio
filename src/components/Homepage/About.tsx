import Heading from "../Heading";

const About = () => {
  return (
    <div className="">
      <Heading heading="About me" emoji="🧑🏼‍💻" desc="" />
      <p className="lg:w-[34rem] w-auto text-gray-300">
        UI/UX Designer and Frontend Developer with almost 4 years of experience
        designing and developing user-centered web and mobile applications.
        Strong background in React.js, Next.js, Flutter, UI/UX research,
        usability testing, and design systems.
      </p>

      <p className="lg:w-[34rem] w-auto my-5 text-gray-300">
        Proven ability to collaborate with cross-functional teams and deliver
        high-quality, scalable digital products. Seeking opportunities to
        contribute to innovative and user-focused organizations.
      </p>
    </div>
  );
};

export default About;
