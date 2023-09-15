import React from "react";

const About = () => {
  return (
    <div
    contentEditable="false"
      name="about"
      className="w-full h-screen pb-4 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-6">

I am a proficient iOS developer and a machine learning enthusiast,
 driven by a strong passion for crafting mobile applications and exploring the fascinating world of AI.
  While my expertise shines in iOS development and machine learning, I'm on a continuous journey to strengthen my web development skills.
   My experience includes building robust iOS applications, and my fascination with machine learning has led me to explore various AI technologies and their applications.
    I excel in collaborative environments, embrace challenges, and eagerly seek opportunities to enhance my web development abilities.
     Whether it's crafting seamless mobile experiences or diving into the complexities of machine learning models, I am always eager to tackle the next exciting project in the realm of technology.
        </p>

        <br />

        <p className="text-xl my-4">

{/* I am a quick learner with a relentless commitment to expanding my knowledge and skillset.
 My dedication to excellence is reflected in my unwavering pursuit of outstanding results in every endeavor I undertake.
  As a team player, I thrive on collaboration, relishing the opportunity to work harmoniously with others to achieve shared objectives. */}
        </p>
      </div>
    </div>
  );
};

export default About;