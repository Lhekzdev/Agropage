<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> 00f74de83b4904ed7730761270651193d9eeaf90

const Ourservice = () => {
  const [articles, setArticles] = useState([]);
  const [expandedArticleIds, setExpandedArticleIds] = useState([]);

  const toggleReadMore = (id) => {
<<<<<<< HEAD
    setExpandedArticleIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((articleId) => articleId !== id) // Collapse if already expanded
        : [...prevIds, id] // Expand if not already expanded
=======
    setExpandedArticleIds(
      (prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((articleId) => articleId !== id) // fyi---- Collapse if already expanded
          : [...prevIds, id] // fyi----  Expand if not already expanded
>>>>>>> 00f74de83b4904ed7730761270651193d9eeaf90
    );
  };

  useEffect(() => {
    fetch("/articles/contents.json")
      .then((contents) => contents.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
<<<<<<< HEAD
    <div className="font-georgia mt-2">
      <div className="ml-4">
        <h2 className="text-left text-[46px] leading-custom font-bold text-customBlack mb-6 mt-3 md:text-center">
          Our Services
        </h2>
        <h2 className="text-left w-[390px] text-customGreen font-bold text-xl mb-9 md:text-center leading-5 md:w-full">
          We have tailored solutions for every farm
        </h2>
      </div>

      <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
=======
    <div className="font-georgia">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[46px] leading-custom font-bold text-customBlack mb-4 mt-3">
          Our Services
        </h2>
        <h4 className="text-customGreen font-bold text-f28 mb-9">
          We have tailored solutions for every farm
        </h4>
      </div>

      <div className="article-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
>>>>>>> 00f74de83b4904ed7730761270651193d9eeaf90
        {articles.map((article) => {
          const isExpanded = expandedArticleIds.includes(article.id);

          return (
<<<<<<< HEAD
            <div
              key={article.id}
              className="bg-white items-center shadow rounded w-full max-w-[420px] md:max-w-[330px] lg:max-w-full"
            >
=======
            <div key={article.id} className="bg-white p-6 shadow rounded ">
>>>>>>> 00f74de83b4904ed7730761270651193d9eeaf90
              <div className="image-container">
                <img
                  src={`https://res.cloudinary.com/dzyvwxh7n/image/upload/${article.imagePublicId}`}
                  alt={article.title}
<<<<<<< HEAD
                  className="w-full h-[183px] object-cover rounded-tl-[15px] rounded-tr-[15px]"
                  loading="lazy"
                />
              </div>
              <h2 className="px-4 text-customGreen mb-2 mt-4 font-bold text-[18px] max-w-full text-left">
                {article.title}
              </h2>
              <p className="leading-5 mt-2 px-4 text-gray-700 text-left text-xl">
                {isExpanded ? article.content : article.preview}
              </p>
              <button
                className=" w-[300px] mt-4 mb-2 text-white py-2 px-4 bg-customDarkgreen rounded-[18px] h-[50px] md:w-[250px] lg:max-w-[250px] text-center hover:bg-green-950"
                onClick={() => toggleReadMore(article.id)}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
=======
                  className="w-[345px] h-[183px] "
                  loading="lazy"
                />
              </div>
              <h2 className="text-customGreen mb-2 mt-4 font-bold text-[21px] text-left h-[27px] w-[320px]  ">
                {article.title}
              </h2>
              <p className="mt-2 text-gray-700 text-left text-xl ">
                {article.preview}
                {isExpanded ? article.content : article.preview}
              </p>
              <button
                className="mt-4  text-white py-2 px-4   bg-customDarkgreen   rounded-[18px] h-[50px] text-center pt-2  w-full border border-transparent hover:border-white hover:bg-green-950"
                onClick={() => toggleReadMore(article.id)}
              >
                {isExpanded ? "Read Less" : "Read More"}
>>>>>>> 00f74de83b4904ed7730761270651193d9eeaf90
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Ourservice;
=======
export default Ourservice;
>>>>>>> 00f74de83b4904ed7730761270651193d9eeaf90
