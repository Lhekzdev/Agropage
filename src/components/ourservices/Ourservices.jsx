import React, { useState, useEffect } from 'react'




const Ourservice = () => {

  const [articles, setArticles] = useState([]);
  const [expandedArticleIds, setExpandedArticleIds] = useState([]); 

  const toggleReadMore = (id) => {
    setExpandedArticleIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((articleId) => articleId !== id) // fyi---- Collapse if already expanded
        : [...prevIds, id] // fyi----  Expand if not already expanded
    );
  };




  useEffect(() => {
    fetch('/articles/contents.json')
      .then((contents) => contents.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);


return(
<div className='font-georgia'>
  <div className=''>
      <h2 className='text-left text-[46px] leading-custom font-bold text-customBlack mb-4 mt-3 md:text-center  '>Our Services</h2>
    <h4 className='text-left text-customGreen font-bold text-f28 mb-9 md:text-center '>We have tailored solutions for every farm</h4>
      
   </div>

  <div className=" article-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 ">

    
      {articles.map((article) => {
        const isExpanded = expandedArticleIds.includes(article.id);
        
         return(
        <div key={article.id}  className="bg-white  shadow rounded  ">
        

          <div className="image-container">
        
              <img

              
                src={`https://res.cloudinary.com/dzyvwxh7n/image/upload/${article.imagePublicId}`}
                alt={article.title}
                className="w-[345px] h-[183px]  "
                loading="lazy"
              />
              
             
          </div>
          <h2 className="text-customGreen mb-2 mt-4 font-bold text-wrap text-[18px] max-w-xs text-left  h-[27px] w-[327px] gap-2 ">{article.title}</h2>
          <p className="mt-2 text-gray-700 text-left text-xl ">{article.preview}
          {isExpanded ? article.content : article.preview}
          </p>
          <button className=" mt-4 mb-2 text-white py-2 px-4   bg-customDarkgreen  flex justify-center rounded-[18px] h-[50px] text-center pt-2  w-full border border-transparent hover:border-white hover:bg-green-950 md:w-full"
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
}





export default Ourservice