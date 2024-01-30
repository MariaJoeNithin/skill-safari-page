import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalf } from "react-icons/fa";
import JsonData from "../learninghubdev.json";

const CardCarousel = () => {
  let images = JsonData.CardCarousel.images;
  let descriptions = JsonData.CardCarousel.descriptions;
  let ratings = JsonData.CardCarousel.rating;
  let studentReview = JsonData.CardCarousel.reviewer;
  let reviewerPlace = JsonData.CardCarousel.place;

  const cards = images.map((item, index) => ({
    id: index,
    key: index,
    image: item,
    description: descriptions[index],
    rating: ratings[index],
    heading: studentReview[index],
    place: reviewerPlace[index],
  }));

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
    <div className="max-w-screen-xl mx-auto p-4 my-2 mb-4">
      <div className="flex justify-center items-center">
        <h1 className="text-[32px] font-[700] mb-4 border-black border-b-4 text-center inline-block">
          Hear from Our Students
        </h1>
      </div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-2 mb-8">
            <div
              className="bg-white p-4 border rounded-md"
              style={{ borderRadius: "8px", minHeight: "500px" }}
            >
              <img
                src={card.image}
                alt={card.description}
                className="mb-2 rounded-md"
              />
              <p className="text-gray-600 mb-2">{card.description}</p>
              <div className="flex items-center mb-2">
                <span className="text-orange-500 mr-1 flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </span>
                <span className="text-gray-600">{card.rating}/5</span>
              </div>
              <h3 className="text-lg font-bold">{card.heading}</h3>
              <h3 className="text-[18px] font-[500] text-[#a4a4a4]">
                {card.place}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
