import React, { useEffect, useState } from "react";

const SortingVisualizer = (props) =>{
    const [array, setArray] = useState([]);

    // useEffect( () => {
    //     generateArray();
    //     console.log(array);
    // });

    function generateArray() {
        const newArray = [];
        for(let i=0; i<100; i++)
            newArray.push(Math.floor(Math.random()) * 1000);

        setArray(newArray);
    }
};

export default SortingVisualizer;