import React from "react";
import { useState } from "react";
import convertPath from "../utils/convertPath";
import getCookie from "../utils/getCookie";
import axios from "axios";

const Car = ({ cars }) => {
  const rentCar = async (car) => {
    //
  };

  return (
    <>
      <ul>
        {cars.map((car) => {
          return (
            <li key={car._id}>
              <h3>{car.make + " " + car.model}</h3> <p>{car.price_per_day}</p>{" "}
              <button
                onClick={() => {
                  rentCar(car);
                }}
              >
                Rent Now
              </button>
              {car.photos_url.map(url=>{
                return <img src={convertPath(url)} />})}

            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Car;
