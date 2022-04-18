import React, { useState } from "react";
import SortingVisualizer from "./SortingVisualizer";

const NavBar = (props) => {

    const [headingText, setHeadingText] = useState("Sorting Visualizer");
    const [delayAmount, setDelayAmount] = useState(15);
    const [disable, setDisable] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    function handleClick(event){
        // changing heading text to the type of sorting algorithm
        const { name } = event.target;
        setHeadingText(name);
    }

    function handleChange(event){
        // updating the paragraph element to display the current delay speed
        const { value } = event.target;
        setDelayAmount(value);
    }

    function handleSortStart(){
        setDisable(true);
    }

    function handleClickDropdown(){
        setDropDown(prevState => !prevState);
    }

    return <div className="container flex lg:flex-row justify-between mx-auto py-6 px-2 items-center flex-col space-y-5">
        <div>
            <h1 className="font-bold text-lg">{headingText}</h1>
        </div>
        <div className="flex items-center space-x-6 lg:flex-row flex-col space-y-4 lg:space-y-0">
            <div className="flex space-x-4">
                <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium" htmlFor="range">Delay</label>
                    <input onChange={handleChange} className="w-20" type="range" name="delay" id="delay" min={3} max={15}/>
                    <p className="text-xs w-4">{delayAmount}</p>
                </div>
                
                <button disabled={disable} onClick={props.makeArray} className="text-sm bg-gray-100 py-2 px-8 rounded-md shadow-md
                hover:bg-red-600 hover:text-white ease-in duration-300 disabled:bg-slate-200 disabled:text-slate-400">New array</button>
            </div>

            <div className="flex space-x-4 justify-center items-start lg:items-center">
                <button disabled={disable} onClick={handleSortStart} className="text-sm bg-red-600 text-white py-2 px-8 rounded-md shadow-md 
                hover:bg-red-700 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400">Sort</button>
                
                <div className="lg:flex lg:space-x-2 hidden">
                    <button disabled={disable} onClick={handleClick} className="text-sm bg-blue-600 text-white py-2 px-3 rounded-md shadow-md 
                    hover:bg-blue-900 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400" name="Bubble Sort">Bubble Sort</button>
                    
                    <button disabled={disable} onClick={handleClick} className="text-sm bg-blue-600 text-white py-2 px-3 rounded-md shadow-md 
                    hover:bg-blue-900 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400" name="Insertion Sort">Insertion Sort</button>
                    
                    <button disabled={disable} onClick={handleClick} className="text-sm bg-blue-600 text-white py-2 px-3 rounded-md shadow-md 
                    hover:bg-blue-900 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400" name="Selection Sort">Selection Sort</button>
                </div>

                <div>
                    <button className="lg:hidden flex justify-center items-center space-x-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-md shadow-md hover:bg-blue-900 ease-in
                    duration-200 disabled:bg-slate-200 disabled:text-slate-400 focus:rounded-b-none" onClick={handleClickDropdown} disabled={disable}>
                        <p>Bubble Sort</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                        
                    </button>
                    <div disabled={disable} className={dropDown ? "flex bg-blue-600 shadow-md text-white font-sm py-2 flex-col space-y-2 items-center rounded-b-md disabled:bg-slate-200 disabled:text-slate-400" 
                    : "hidden"}>
                        <p disabled={disable} onClick={handleClick} className="text-sm bg-blue-600 text-white
                        hover:text-red-300 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400" name="Bubble Sort">Bubble Sort</p>
    
                    
                    <button disabled={disable} onClick={handleClick} className="text-sm bg-blue-600 text-white py-2 px-3 rounded-md shadow-md 
                    hover:bg-blue-900 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400" name="Insertion Sort">Insertion Sort</button>
                    
                    <button disabled={disable} onClick={handleClick} className="text-sm bg-blue-600 text-white py-2 px-3 rounded-md shadow-md 
                    hover:bg-blue-900 ease-in duration-200 disabled:bg-slate-200 disabled:text-slate-400" name="Selection Sort">Selection Sort</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
};

export default NavBar;