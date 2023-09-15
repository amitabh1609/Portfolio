import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import swift from "../assets/pngegg.png";
import machine from "../assets/macl.png";
import kotlin from "../assets/kotlin-logo.png";
import c from "../assets/c++.png";


const Experience = () => {
  const techs = [
    {
        id: 1,
        src: swift,
        title: "Swift",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: machine,
        title: "Machine Learning",
        style: "shadow-yellow-500",
    },
    {
        id:3,
        src: kotlin,
        title: "Kotlin",
        style: "shadow-orange-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
        id: 9,
        src: c,
        title: "C++",
        style: "shadow-sky-400",
      },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;