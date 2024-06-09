import React from "react";
import { useState } from "react";
import getCookie from "../utils/getCookie";
import axios from "axios";

const CarForm = (props) => {
  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData(e.target)
    data.append("owner", props.id)
    data.append("owner_name", props.fullname)

    await axios
      .post("http://localhost:8080/user/car/add", data, {
        headers: {"Authorization": `Bearer ${props.token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        encType={'multipart/form-data'}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Make</label>
        <input type="text" name="make" />

        <label>Model</label>
        <input type="text" name="model" />

        <label>Year</label>
        <input type="number" name="year" />

        <label>Exterior Color</label>
        <input type="text" name="exterior_color" />

        <label>Gas Mileage</label>
        <input type="number" name="gas_mileage" />

        <label>Price per day</label>
        <input type="number" name="price_per_day" />

        <label>Description</label>
        <input type="text" name="description" />

        <label>City</label>
        <input type="text" name="city" />

        <label>Address</label>
        <input type="text" name="address" />

        <label>Upload Photos</label>
        <input type="file" name="car_images" multiple />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default CarForm;
