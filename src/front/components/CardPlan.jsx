import React from "react";
import { Navbar } from "../components/Navbar";

// index.css
import "../../styles/card.css";


const CardPlan = ({tittle, img, parrafo}) => {
  return (            <div className="card h-100 shadow">
              <div className="card-body tarjetaNp">
                <h5 className="card-title pb-2">{tittle}</h5>
                <img src={img} className="card-img-top mb-3" alt="Plan pérdida de peso" />
                <p className="card-text pb-2">
                  {parrafo}
                </p>
              </div>
            </div>)
}

  export default CardPlan;


