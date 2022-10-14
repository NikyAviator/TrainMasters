import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/main.scss";
import { Button } from "../UI/Button";
import { Radio } from "@chakra-ui/radio";//  npm i @chakra-ui/radio

export default function PaymentPage(){
    return(
        <div className="pay-container">
          <p> Välj Typ Av Betalning: </p>
          <div className="type-container">
             <RadioGroup defaultValue="one">
               <Radio value="one">Swish</Radio>
               <Radio value="two">BetalningsKort</Radio>
               <Radio value="three">Faktura</Radio>
             </RadioGroup>
          </div>
          <div className="pay-btn">
             <Button
             className="payment-btn"
             buttonStyle="btn--primary"
             buttonSize="btn--extra-large"
             link=""// ??????
             >
                Betala
             </Button>

            </div>

        </div>
    );
}