import React from "react";
import homeCss from "../styles/pages/home.module.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className={homeCss.container}>
      <div className={homeCss.content}>
        <h1>Record your culinary adventures!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Voluptate illum eum quis atque ratione, repudiandae <br />
          molestias labore at officia saepe.
        </p>
        <button className={homeCss.button} onClick={()=>navigate('/receipe-form')}>Let's start!</button>
      </div>

      <div className={homeCss.thali}></div>
      <div className={homeCss.paperNotes}></div>
    </section>
  );
}

export default Home;
