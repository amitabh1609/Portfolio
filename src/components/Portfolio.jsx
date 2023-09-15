import React from "react";
// import mychatgpt from "../assets/mychatgpt.png";
import stockers from "../assets/stockers.png";
import kypto from "../assets/krptoverse-logo.png";
import twitter from "../assets/facial-emotion-recognition-logo.png";
// import facial from "../assets/facial.png";
import notebook from "../assets/notebook-logo.png";
import chatify from "../assets/chatify-logo.png";
import gofund from "../assets/gofunds-logo.png";

const Portfolio = () => {

  const portfolios = [
    
    {
      id: 1,
      src: notebook,
      path: "https://github.com/amitabh1609/NoteBook",
    },
    {
      id: 2,
      src: stockers,
      path: "https://github.com/amitabh1609/Stockers",
    },
    {
      id: 3,
      src: chatify,
      path: "https://github.com/amitabh1609/Chatify",
    },
    {
      id: 4,
      src: kypto,
      path: "https://github.com/amitabh1609/Kryptoverse",
    },
    {
      id: 5,
      src: gofund,
      path: "https://github.com/amitabh1609/GoFund",
    },
    {
      id: 6,
      src: twitter,
      path: "https://github.com/amitabh1609/Sentiment-Analysis-Using-Twitter-Tweets",
    },
    
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-12 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-12">
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,path }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={path} className=" px-6 py-3 m-4 duration-200 hover:scale-105 mx-auto">
                  Code
                </a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;