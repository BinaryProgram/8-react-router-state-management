import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOption = [
    {
      id: "GYM002",
      name: "Iron Temple",
      features: [
        "Powerlifting Equipment",
        "Shower Facilities",
        "Towel Service",
        "Supplements Bar",
      ],
      price: {
        currency: "USD",
        monthly: 39.99,
        yearly: 419.99,
      },
      plan: "Basic",
    },
    {
      id: "GYM001",
      name: "Urban Fit Club",
      features: [
        "24/7 Access",
        "Cardio Zone",
        "Functional Training Area",
        "Lockers",
        "Steam Room",
      ],
      price: {
        currency: "USD",
        monthly: 47.99,
        yearly: 499.99,
      },
      plan: "Premium",
    },
    {
      id: "GYM003",
      name: "Pulse Fitness Hub",
      features: [
        "Personal Trainers",
        "Zumba & Yoga Classes",
        "Spin Studio",
        "Massage Chairs",
        "Free Parking",
      ],
      price: {
        currency: "USD",
        monthly: 57.99,
        yearly: 599.99,
      },
      plan: "Platinum",
    },
  ];

  return (
    <div className="mt-10 flex gap-10 flex-col justify-center lg:flex-row">
      {priceOption.map((gym) => (
        <PriceOption key={gym.id} gymDetail={gym}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
