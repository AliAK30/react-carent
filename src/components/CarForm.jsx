import React from "react";
import { useState } from "react";
import getCookie from "../utils/getCookie";
import axios from "axios";

export default CarForm = async ({ fullname }) => {
  return (
    <>
      <form>
        <label>Make</label>
        <input type="text" id="make" />

        <label>Model</label>
        <input type="text" id="model" />

        <label>Year</label>
        <input type="number" id="year" />

        <label>Exterior Color</label>
        <input type="text" id="exterior_color" />

        <label>Gas Mileage</label>
        <input type="number" id="gas_mileage" />

        <label>Price per day</label>
        <input type="number" id="price_per_day" />

        <label>Description</label>
        <input type="text" id="description" />
        
        <label>City</label>
        <input type="text" id="city" />

        <label>Address</label>
        <input type="text" id="address" />

        <label>Upload Photos</label>
        <input type="file" id="car_images" />




      </form>
    </>
  );
};
