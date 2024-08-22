import React from "react";
import errorCss from "../styles/pages/404.module.scss";

function PageNotFound() {
  return (
    <section className={errorCss.container}>
    <div className={errorCss.content}>
    <h1>Sorry! The page you are</h1>
    <h1>searching for isn't available</h1>
      <p>
      404 Error: Page Not Found
      
      </p>
    
    </div>

    <div className={errorCss.error404}></div>
  </section>
  );
}

export default PageNotFound;
