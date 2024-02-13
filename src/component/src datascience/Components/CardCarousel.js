import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const CardCarousel = () => {
  const images = [
    "https://res.cloudinary.com/skill-safari/image/upload/v1701061224/website/testimonials/Selvakumar_wuqaxn.webp",
    "https://res.cloudinary.com/skill-safari/image/upload/v1701061234/website/testimonials/Krishnakumar_dismrh.webp",
    "https://res.cloudinary.com/skill-safari/image/upload/v1701061226/website/testimonials/Aniket_ourmxh.webp",
    "https://res.cloudinary.com/skill-safari/image/upload/v1701061233/website/testimonials/Meenaz_Farheen_rnzx1m.webp",
    "https://res.cloudinary.com/skill-safari/image/upload/v1701061232/website/testimonials/Krithi_Hemanth_hyfarr.webp",
    "https://res.cloudinary.com/skill-safari/image/upload/v1701061230/website/testimonials/Niharika_f6rynf.webp",
  ];

  const descriptions = [
    "Now I have good exposure to building a website and knowledge of full-stack technology. During my training period, I developed various projects like tic-tac-toe, quote generator, to-do checklist, e-commerce. I got placed in a company through the interview provided by Skill Safari." ,
    "I was amazed by the kinds of technology that are out there in the market but didn't know how to use any of them. I was in a tight schedule trying hard to get enough time to balance my work and studies. The trainers, who are very well experienced and cooperative along with the supporting staff, made a lot of things easier in the journey.",
    "Skill Safari is an awesome skill development platform. I have learned lots of things, not only technical skills but also real-life things. All teams are very helpful in any situation. Thank you, dear Skill Safari team for developing my career life.",
    "The teaching from the beginning was carried out in the most professional and friendly way. The trainers were very involved in helping me out with doubts at every time. I feel great satisfaction in learning under you guys and glad that every penny that I spent is worth the knowledge that you guys provided me. It's completely rare to have friendly trainers; it's an important factor that you guys excelled in.",
    "The best live educational platform I have ever come across. Each and every mentor over here takes utmost care of each and every person and helps in every way possible. I really feel overwhelmed and so grateful being one of the students of Skill Safari. Thank you Skill Safari!",
    "I got to know about Skill Safari from my college mentor, and I'm very thankful for that. I wasn't a computer student in my schooling and PUC, and I lacked self-confidence, but from this program, it gave me self-confidence, and most importantly, I gained a lot of interest forever thankful for it.",
  ];

  const cards = [
    { id: 1, image: images[0], description: descriptions[0], rating: 4.7, heading: "Selvakumar" },
    { id: 2, image: images[1], description: descriptions[1], rating: 4.5, heading: "Krishnakumar P B" },
    { id: 3, image: images[2], description: descriptions[2], rating: 4.3, heading: "Aniket Prakashrao Dhage" },
    { id: 4, image: images[3], description: descriptions[3], rating: 4.7, heading: "Meenaz Farheen Shaik" },
    { id: 5, image: images[4], description: descriptions[4], rating: 4.5, heading: "Krithi Hemanth" },
    { id: 6, image: images[5], description: descriptions[5], rating: 4.3, heading: "Niharika Kiran" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,  
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto  p-4 my-2">
      <Slider {...settings}>
        {cards.map((card) => (
          <div  key={card.id} className="px-2 my-5"  >
            <div className="bg-white p-4 shadow-skillsafari rounded-md"style={{ borderRadius: "8px",minHeight:"500px" }}>
              <img src={card.image} alt={card.description} className="mb-2 rounded-md " />
              <p className="text-gray-600 mb-2">{card.description}</p>
              <div className="flex items-center mb-2">
                <span className="text-orange-500 mr-1 flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                <span className="text-gray-600">{card.rating} star rating</span>
              </div>
              <h3 className="text-lg font-bold">{card.heading}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
