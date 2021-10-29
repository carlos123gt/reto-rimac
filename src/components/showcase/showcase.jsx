import React from 'react';
import imageShowCase from '../../assets/images/showcase-img-movil.svg';
import './showcase.scss'

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase-contain">
                <div className="showcase-contain_image">
                    <figure>
                        <img src={imageShowCase} alt="image-showcase"/>
                    </figure>
                </div>
                <div className="showcase-contain_desc content-wrap--movil">
                    <span>¡Nuevo!</span>
                    <h1>Seguro Vehicular Tracking</h1>
                    <p>Cuentanos donde le haras seguimiento a tu seguro</p>
                </div>
            </div>
        </div>
    );
}

export default Showcase;

