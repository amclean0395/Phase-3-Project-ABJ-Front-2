import React from "react";

function InputForm(){
    return(
        <>
            <h3 className="Bold">Submit a Review!</h3>
            <div className="inputForm">
                <form>
                    <div id="basicTable">
                        <label className="inputTitles">User Id:</label>
                        <input 
                            className="submitAreas"
                            placeholder="ex: 11, 3, 15"
                            type="number" 
                        />
                        <br></br>
                        <label className="inputTitles">Rating:(/5)</label>
                        <input 
                            className="submitAreas"
                            placeholder="ex: 1, 3, 5"
                            type="number" 
                        />
                        <br></br>
                        <label className="inputTitles">Comment:</label>
                        <input 
                            className="submitAreas"
                            type="text"
                        />
                    </div>        
                    <div>
                        <button className="middleButton">Submit</button>
                    </div>
                </form>    
            </div>
        </>
    )
}

export default InputForm