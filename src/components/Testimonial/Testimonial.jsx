import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom'; // Import useParams
import semiUp from '../../assets/semiUp.svg';
import axios from 'axios';


import data from "../../../data/db.json";

const Testimonial = ({id}) => {
  // let { id } = useParams(); // Destructure id from useParams
  // let [products, setProducts] = useState([]); // Initialize products as an empty array
const [products, setProducts] = useState(null);


  // console.log(id);
  //   useEffect(() => {
  //   console.log("Selected id:", id);
  //   const found = data.products.find((item) => item.id === id);
  //   console.log("Found product:", found);
  //   setProduct(found);
  // }, [id]);

  useEffect(() => {
    // Load the data from the imported JSON
    setProducts(data.products);
  }, [])

  return (
  <>
    <div className="bg-[#38853B] min-h-[566px] w-full py-8 px-4 lg:px-[79px]">
      {/* Section Header */}
      <h1 className="text-[32px] lg:text-[46px] font-bold text-white text-center font-georgia w-full mb-8">
        What Our Clients Say
      </h1>

      <div className="testimonyContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {/* Loop through the products array */}
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="bg-[#FEF8FF36] rounded-[22.33px] shadow-lg border-[#0F11131A] border-[1px] h-auto font-georgia text-white p-4 flex flex-col items-center"
            >
              {/* Decorative Icon */}
              <div className="w-full flex justify-left">
                <img src={semiUp} alt="SemiUp Icon" className="mb-4" />
              </div>

              {/* Testimonial Text */}
              <p className="text-[13.5px] lg:text-[16px] text-center italic mb-4 font-normal">
                {product.testimony}
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center gap-2">
                <img
                  className="passport w-[100px] h-[100px] object-cover rounded-full mb-2"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                <p className="text-[13.5px] lg:text-[16px] font-normal text-center">
                  {product.name}
                </p>
                <p className="text-[10.17px] lg:text-[12px] text-center font-normal">
                  {product.role}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No testimonials available.</p>
        )}
      </div>
    </div>
  </>
);}

export default Testimonial;
