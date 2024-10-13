import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)


// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import image10 from '../../assets/images/image10.png';  // Corrected image path

// export default function Question() {
//   // Validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     phone: Yup.string().required('Phone number is required'),
//     message: Yup.string().required('Message is required'),
//     cost: Yup.number()
//       .required('Cost is required')
//       .min(0, 'Cost cannot be negative')
//       .typeError('Cost must be a number'),
//   });

//   // Formik configuration
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//       cost: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div
//         className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-8"
//         style={{ width: '1198px' }} // Main container with fixed width, but no height
//       >
//         {/* Left Section: Farmer Image */}
//         <div className="hidden md:block">
//           <img
//             src={image10}  // Corrected image path usage
//             alt="Farmer"
//             style={{ width: '471px', height: '626px' }}  // Set the specific width and height
//           />
//         </div>

//         {/* Right Section: Form without fixed height */}
//         <div
//           className="bg-green-100 p-6 rounded-lg flex-grow"
//           style={{ width: '639px' }}  // Only the width is fixed, height adjusts to image
//         >
//           <h2 className="text-lg font-semibold text-green-700 text-start mb-4">Have Questions?</h2>
//           <h1 className="text-2xl font-bold text-gray-800 text-start mb-6">Send Us a Message</h1>

//           {/* Formik Form */}
//           <form onSubmit={formik.handleSubmit}>
//             {/* Name Input */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name*"
//                 className={`w-full px-4 py-2 border ${
//                   formik.touched.name && formik.errors.name
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <p className="text-red-500 text-sm">{formik.errors.name}</p>
//               )}
//             </div>

//             {/* Email and Phone Number */}
//             <div className="flex space-x-4 mb-4">
//               <div className="w-1/2">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email*"
//                   className={`w-full px-4 py-2 border ${
//                     formik.touched.email && formik.errors.email
//                       ? 'border-red-500'
//                       : 'border-gray-300'
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.email && formik.errors.email && (
//                   <p className="text-red-500 text-sm">{formik.errors.email}</p>
//                 )}
//               </div>
//               <div className="w-1/2">
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone number*"
//                   className={`w-full px-4 py-2 border ${
//                     formik.touched.phone && formik.errors.phone
//                       ? 'border-red-500'
//                       : 'border-gray-300'
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.phone && formik.errors.phone && (
//                   <p className="text-red-500 text-sm">{formik.errors.phone}</p>
//                 )}
//               </div>
//             </div>

//             {/* Cost Input */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="cost"
//                 placeholder="Estimated cost*"
//                 className={`w-full px-4 py-2 border ${
//                   formik.touched.cost && formik.errors.cost
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
//                 value={formik.values.cost}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.cost && formik.errors.cost && (
//                 <p className="text-red-500 text-sm">{formik.errors.cost}</p>
//               )}
//             </div>

//             {/* Message Input */}
//             <div className="mb-4">
//               <textarea
//                 name="message"
//                 placeholder="Enter message"
//                 className={`w-full px-4 py-2 border ${
//                   formik.touched.message && formik.errors.message
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
//                 rows="4"
//                 value={formik.values.message}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.message && formik.errors.message && (
//                 <p className="text-red-500 text-sm">{formik.errors.message}</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold flex justify-center items-center"
//             >
//               Send Message
//               <img 
//                 src={send} 
//                 alt="send" 
//                 className='h-5 w-5 ml-2'
//               />
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 ml-2"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V14a1 1 0 11-2 0V6.586l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 6.586z"
//                   clipRule="evenodd"
//                 />
//               </svg> */}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
