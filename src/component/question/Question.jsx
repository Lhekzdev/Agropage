import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import image10 from '../../assets/images/image10.png';  // Corrected image path
import send from '../../assets/images/send.svg';

export default function Question() {
  // State to handle the success message
  const [successMessage, setSuccessMessage] = useState('');

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
    cost: Yup.number()
      .required('Cost is required')
      .min(0, 'Cost cannot be negative')
      .typeError('Cost must be a number'),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      cost: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Simulate form submission success
      setSuccessMessage('Message sent successfully!');
      formik.resetForm(); // Reset the form after submission
    },
  });

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-8"
        style={{ width: '100%', maxWidth: '1198px' }} // Adjust width for mobile
      >
        {/* Image Section: Farmer Image (Visible on both mobile and desktop) */}
        <div className="order-1 md:order-1 w-full flex justify-center">
          <img
            src={image10}  // Corrected image path usage
            alt="Farmer"
            className="w-72 md:w-96"  // Adjust width for responsiveness
          />
        </div>

        {/* Form Section */}
        <div className="bg-green-100 p-6 rounded-lg flex-grow w-full order-2 md:order-2">
          <h2 className="text-lg font-semibold text-green-700 text-start mb-4">Have Questions?</h2>
          <h1 className="text-2xl font-bold text-gray-800 text-start mb-6">Send Us a Message</h1>

          {/* Conditionally render the success message */}
          {successMessage && (
            <div className="mb-4 text-green-600 font-semibold text-center">
              {successMessage}
            </div>
          )}

          {/* Formik Form */}
          <form onSubmit={formik.handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className={`w-full px-4 py-2 border ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={`w-full px-4 py-2 border ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number*"
                  className={`w-full px-4 py-2 border ${
                    formik.touched.phone && formik.errors.phone
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>
            </div>

            {/* Cost Input */}
            <div className="mb-4">
              <input
                type="text"
                name="cost"
                placeholder="Estimated cost*"
                className={`w-full px-4 py-2 border ${
                  formik.touched.cost && formik.errors.cost
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                value={formik.values.cost}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cost && formik.errors.cost && (
                <p className="text-red-500 text-sm">{formik.errors.cost}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Enter message"
                className={`w-full px-4 py-2 border ${
                  formik.touched.message && formik.errors.message
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                rows="4"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold flex justify-center items-center"
            >
              Send Message
              <img 
                src={send} 
                alt="send" 
                className='h-5 w-5 ml-2'
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



