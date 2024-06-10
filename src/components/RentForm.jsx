import React from "react";
import { useState } from "react";
import getCookie from "../utils/getCookie";
import axios from "axios";

const RentForm = ({car}) => {

    const rentCar = async (e) => {
        e.preventDefault();
        let bill = (new Date(Date.parse(e.target.to.value)).getDate() - new Date(Date.parse(e.target.from.value)).getDate())*car.price_per_day
        
       const data = {
        from: e.target.from.value,
        to: e.target.to.value,
        total_bill: bill,
        owner: car.owner,
        car_id: car._id,
        rented_by: getCookie("carent-session-token").id,

       }

        await axios
      .post("http://localhost:8080/user/car/rent", data, {
        headers: {"Authorization": `Bearer ${getCookie("carent-session-token").token}`
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
        <form onSubmit={e=>rentCar(e)}>
            <label>From</label>
      <input type="date" placeholder="Enter pickup Date" id="from" />

      <label>To</label>
      <input type="date" placeholder="Enter dropoff date" id="to" />

      <button type="submit" className="btn btn-primary">
        Rent Now
      </button>
        </form>
    )

}

export default RentForm;