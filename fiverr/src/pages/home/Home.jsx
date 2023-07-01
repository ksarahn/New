import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss"
import React from "react";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";

const Home = () => {

    {console.log(cards);}
    return(
        <div className="home">
            <Featured/>
            <TrustedBy/>
            <Slide slidesToSlide={5} items={5} >
                {cards.map(card=>(
                    <CatCard key={card.id} item={card}/>
                ))}
            </Slide>
        </div>
    )
}

export default Home;