import React from "react";
import "./detail-maker.scss";
import people from "../../assets/images/people.svg";
const DetailMaker = () => {
  return (
    <>
      <div className="detail-maker-container">
        <div className="detail-maker-container_return">
          <span>VOLVER</span>
        </div>
        <div className="detail-maker-container_welcomen">
          <h1 className="detail-maker-container_welcomen-title">
            {" "}
            ¡Hola,{" "}
            <span className="detail-maker-container_welcomen-span"> Juan!</span>
          </h1>
          <h2 className="detail-maker-container_welcomen-subTitle">
            Conoce las coberturas para tu plan
          </h2>
        </div>
        <div className="detail-maker-container_detail-car">
          <div className="detail-maker-container_detail-car-content">
            <div className="detail-maker-container_detail-car-enrollment">
              Placa: C2U-114
            </div>
            <div className="detail-maker-container_detail-car-model">
              Wolkswagen 2019 Golf
            </div>
          </div>
          <div>
            <img
              className="detail-maker-container_detail-car-img"
              alt="people"
              src={people}
            />
          </div>
        </div>
        <div className="detail-maker-container_assured">
          <div>
            <div className="detail-maker-container_assured-add">
             Agrega o quita coberturas
            </div>
            <div className="detail-maker-container_assured-amount">
            <div className="detail-maker-container_assured-amount-min" >MIN $12,500</div>
            <div className="detail-maker-container_assured-amount-max" >MAX $16,500</div>
            </div>
          </div>
          <div className="detail-maker-container_assured-button">
            <button class="detail-maker-container_assured-plusminus">-</button>
            <input type="tex" class="num" value="0" />
            <button class="detail-maker-container_assured-plusminus">+</button>
          </div>
        </div>
        <hr className=""></hr>
      </div>
    </>
  );
};

export default DetailMaker;
