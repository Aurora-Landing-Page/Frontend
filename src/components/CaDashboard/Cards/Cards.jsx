
import "./Cards.css";
import axios from "axios";
import Card from "../Card/Card";
import {UilClipboardAlt,UilCoins} from '@iconscout/react-unicons'
import { useState } from "react";

const Cards = async () => {
  const user = await axios
    .get("https://aurora-nokc.onrender.com/getCaData")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    const registrations = user.referrals.length
    let barVal
    if(registrations >= 15) {
      barVal = 100
    } else {
      barVal = (registrations*100)/15 
    }
    const cardsData = [
      {
        title: "Registrations",
        color: {
          backGround: "linear-gradient(180deg, #454343 0%, #6e6c6c 100%)",
          boxShadow: "0px 2px 4px 0px #81c8e2",
        },

        value: registrations ,
        png: UilClipboardAlt,
        description:
          "The count of refferals that you have made through your refferal code",
      },
      {
        title: "Credits",
        color: {
          backGround: "linear-gradient(180deg, #454343 0%, #6e6c6c 100%)",
          boxShadow: "0px 2px 4px 0px #e365d0",
        },
        barValue: barVal,
        value: registrations,
        png: UilCoins,
        description:
          "If you are successful to complete 15 referrals, you can avail 100% discount.",
      },
    ];
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue= {card.barValue}
              value={card.value}
              png={card.png}
              description={card.description}
            />
          </div>
        );
      })}
          </div>
  );
};

export default Cards;
