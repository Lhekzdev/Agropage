import React from 'react';
import './AboutUs.css';  // External CSS

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="text-section">
        <h1 aboutUs>About Us</h1>
        <h2 className='subheader'>“Our Commitment to Agriculture”</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada gravida urna pellentesque turpis magna. Semper neque eu velit aliquam in augue ullamcorper nisl. Et dolor urna sollicitudin praesent metus facilisis. Dui tellus habitasse mi aliquet consequat eget. Interdum semper fames consequat nisl varius fermentum elit. In et suscipit ullamcorper augue ac nullam porttitor elit amet. Orci cras malesuada ac sit hendrerit tellus fringilla risus. Turpis ultricies libero lobortis in viverra. Arcu imperdiet sapien mauris posuere. Suspendisse molestie senectus tincidunt laoreet tellus et velit faucibus dictum. Lectus nunc proin rhoncus elit non.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="image-section">
        <img src="https://res.cloudinary.com/dgcvgu7dt/image/upload/v1728502443/Frame_33843_ovgumf.png" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
