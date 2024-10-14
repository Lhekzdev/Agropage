import React, { useState, useEffect } from "react";

const Ourservice = () => {
  const [articles, setArticles] = useState([]);
  const [expandedArticleIds, setExpandedArticleIds] = useState([]);

  const toggleReadMore = (id) => {
    setExpandedArticleIds(
      (prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((articleId) => articleId !== id) // fyi---- Collapse if already expanded
          : [...prevIds, id] // fyi----  Expand if not already expanded
    );
  };

  useEffect(() => {
    fetch("/articles/contents.json")
      .then((contents) => contents.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="font-georgia mt-2 ">
      <div className="ml-4">
        <h2 className="text-left text-[46px] leading-custom font-bold text-customBlack mb-6 mt-3 md:text-center">
          Our Services
        </h2>
        <h2 className="text-left w-[390px] text-customGreen font-bold text-xl mb-9 md:text-center leading-5 md:w-full">
          We have tailored solutions for every farm
        </h2>
      </div>

      <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full ">
        {articles.map((article) => {
          const isExpanded = expandedArticleIds.includes(article.id);

          return (
            <div
              key={article.id}
              className=" bg-white items-center shadow rounded md:max-w-full lg:max-w-screen-lg overflow-hidden"
            >
              <div className="image-container ">
                <img
                  src={`https://res.cloudinary.com/dzyvwxh7n/image/upload/${article.imagePublicId}`}
                  alt={article.title}
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
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ourservice;
