import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom'; // Import useParams
import semiUp from '../../../assets/semiUp.svg';
import axios from 'axios';

const Testimonial = () => {
  let { id } = useParams(); // Destructure id from useParams
  let [products, setProducts] = useState([]); // Initialize products as an empty array

  console.log(id);
  useEffect(() => {
    // Ensure the URL is correct and reachable
    axios
      .get(`http://localhost:900/products`) // Adjust the endpoint based on your API
      .then((resp) => {
        console.log(resp);
        setProducts(resp.data); // Assuming resp.data is an array of products
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Include id as a dependency in useEffect

  return (
    <>
      <div className="bg-[#38853B] min-h-[566px] w-full py-8 px-4 lg:px-[79px]">
        {/* Section Header */}
        <h1 className="text-[32px] lg:text-[46px] font-bold text-white text-center font-georgia w-full mb-8">
          What Our Clients Say
        </h1>

        <div className="testimonyContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {/* Loop through the products array */}
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#FEF8FF36] lg:-[414px] rounded-[22.33px] shadow-lg border-[#0F11131A] border-[11px] h-auto font-georgia text-white p-4 flex flex-col items-center"
            >
              <div className="w-full flex justify-left">
                <img src={semiUp} alt="SemiUp Icon" className="mb-4" />
              </div>
              <p className="text-[13.5px] lg:-[16px] text-center italic mb-4 font-normal">
                {product.testimony}
              </p>

              {/* Client Image */}
              <div className="flex flex-col items-center gap-2">
                <Image
                  className="passport w-[100px] rounded-full mb-2"
                  cloudName="dqtyrjpeh"
                  publicId={product.image} // Ensure this is just the public ID
                  loading="lazy"
                  alt="Client Image"
                />
                <p className="text-[13.5px] lg:-[16px] font-normal text-center">
                  {product.name}
                </p>
                <p className="text-[10.17px] lg:-[12px] text-center font-normal">
                  {product.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
