import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
    return (
        <Link to="/gigs?cat=design">
            <div className="catCard">
                <div className="container">
                    <div className="">
                        <img src={item.img} alt="" />
                        <span className="desc">{item.desc}</span>
                        <span className="title">{item.title}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default CatCard;
