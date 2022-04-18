import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SortingVisualizer from "./components/SortingVisualizer";
import SortingBar from "./components/SortingBar";
import Footer from "./components/Footer";

function App() {
  const [array, setArray] = useState([]);

  // creating a new array when the page loads or refreshes
  useEffect( () => {
      generateArray();
  }, []);

  function generateArray() {
    const newArray = [];
    for(let i=0; i<100; i++)
        newArray.push(Math.floor(Math.random() * 1000));

    setArray(newArray);
  }

  function bubbleSort(){
    console.log("bubble");
  }

  return (
    <div className="">
      <NavBar makeArray={generateArray} bubbleSortClick={bubbleSort}/>
      <SortingVisualizer />
      <div className="container mx-auto flex justify-center items-end py-12 my-12">
        {array.map((item) => {return <SortingBar size={item} />})}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
