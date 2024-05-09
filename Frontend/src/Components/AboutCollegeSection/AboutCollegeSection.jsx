// AboutCollegeSection.js
import React from "react";

const AboutCollegeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mb-0 bg-slate-500">
      <div className="flex items-center justify-center px-4 m-4 text-4xl">
        <span className="px-4 py-2 bg-yellow-300 border border-blue-400 rounded-xl ring-2">
          About College
        </span>
      </div>
      <div className="w-[810px] md:w-[1210px] h-[500px] overflow-hidden flex flex-row gap-[5px] mb-[30px]">
        <div className="w-[200px] md:w-[300px] h-[400px] overflow-hidden rounded-lg mt-[50px]">
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipMIgMHKvJw9WxhQqXUEB_G8yPKxSG35KDJM0etF=w1080-k-no"
            alt="Description"
            className="object-cover w-full h-full"
          />
        </div >
        <div className="w-[400px] md:w-[600px] h-full overflow-hidden rounded-md">
          <img
            src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4225/2018/5/8/Indira-Gandhi-Institute-of-Technology-Sarang-01.png"
            alt="Description"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-[200px] md:w-[300px] h-[400px] overflow-hidden rounded-lg mt-[50px]">
          <img
            src="https://igitsarang.ac.in/assets/documents/homepgbanner/resizeimg/new_1542800571_thumb.jpg"
            alt="Description"
            className="object-cover w-full h-full "
          />
        </div>
      </div>

      <div className="px-8 py-2 m-2 text-4xl font-bold border border-yellow-600 rounded-full border-x-[5px] border-x-blue-900 border-y-2 bg-slate-400 hover:border-y-blue-900 hover:border-x-yellow-600 mb-[30px]">IGIT Sarang, Dhenkanal</div>
      <div className="flex flex-col items-center justify-between md:gap-4 gap-2 md:w-[1000px] mx-[50px] md:mx-[100px] mt-2 pb-8 ">
        <p className="px-2 py-4 font-semibold border border-yellow-500 rounded-md hover:bg-slate-50 ">
          Our college, IGIT Sarang, is located in Dhenkanal. It is a prestigious
          institution known for its academic excellence and state-of-the-art
          facilities. Established in [year], IGIT Sarang has been providing
          quality education in various fields.
        </p>
        <p className="px-2 py-4 font-semibold border border-yellow-500 rounded-md hover:bg-slate-50 ">
          IGIT Sarang offers undergraduate and postgraduate programs in
          engineering, technology, and management. With experienced faculty
          members and modern infrastructure, the college aims to nurture future
          leaders and innovators.
        </p>
        
        <p className="px-2 py-4 font-semibold border border-yellow-500 rounded-md hover:bg-slate-50">
          The college has a strong emphasis on research and innovation, with
          several research centers and collaborations with industry partners.
          IGIT Sarang is committed to providing quality education and producing
          skilled professionals who contribute to society.
        </p>
        <p className="px-2 py-4 font-semibold border border-yellow-500 rounded-md hover:bg-slate-50">
          In addition to academic facilities, IGIT Sarang provides comfortable
          hostel accommodation for students. The hostels are equipped with all
          necessary amenities, including mess facilities, recreation rooms, and
          24/7 security. The hostel environment fosters a sense of community and
          provides a conducive atmosphere for learning and personal growth.
        </p>
      </div>
    </div>
  );
};

export default AboutCollegeSection;
