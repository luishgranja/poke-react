import React from "react";
import './Pokemon.css';

const Pokemon = ({name, img, attacks, series}) => {

    return (
        <div className="col-md-4">
            <figure className="card card-product">
                <div className="img-wrap"><img src={img}/></div>
                <figcaption className="info-wrap">
                    <h4 className="title">{name}</h4>
                    <p className="desc">{series}</p>
                    <div className="rating-wrap">
                        <ul className="card-text">
                            {attacks.map(attack => (
                                <li>{attack.name}</li>
                            ))}
                        </ul>
                    </div>
                </figcaption>
                <div className="bottom-wrap">
                    <p>footer</p>
                </div>
            </figure>
        </div>
    );
};

export default Pokemon;