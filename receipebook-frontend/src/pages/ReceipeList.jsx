import React, { lazy, Suspense, useState } from "react";
import "../styles/pages/receipes.scss";
// import Dialog from "../components/common/Dialog";
//import ReceipeListView from "../components/receipes/ReceipeListView";
import CategoryListView from "../components/receipes/CategoryListView";
import HeaderView from "../components/receipes/HeaderView";
import ErrorBoundary from "../components/common/ErrorBoundary";

//Lazy is used with suspense to slowly load the component only when required
const ReceipeListView = lazy(() => import('../components/receipes/ReceipeListView'));

function ReceipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCategory, setCurrentCategories] = useState();
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (searchValue) => {
    setSearchValue(searchValue);
  };
 
  return (
    <section className="container">
      {/* {isOpen ? <Dialog setIsOpen={setIsOpen} /> : null} */}
      <div className="header-shadow"></div>
      <Suspense fallback={<h2>Loading...</h2>}>
      <ErrorBoundary>
        <HeaderView changeHandler={searchHandler} />
        <CategoryListView setCurrentCategories={setCurrentCategories} />
        
        <ReceipeListView
          currentCategory={currentCategory}
          searchValue={searchValue}
        />
       
      </ErrorBoundary>
      </Suspense>
    </section>
  );
}
export default ReceipeList;
