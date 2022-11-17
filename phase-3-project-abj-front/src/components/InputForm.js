import React from "react";

function InputForm(){
    return(
        <div className="inputForm">
            <label>Submit a Review!</label>
            <form>
                <div>
                    <label className="inputTitles">Comments</label>
                    <input 
                        type="text"
                    />
                    <label className="inputTitles">Rating</label>
                    <input 
                        placeholder="ex: 1, 3, 5"
                        type="number" 
                    />
                </div>        
                <div>
                    <button>Submit</button>
                </div>
            </form>    
        </div>
    )
}

export default InputForm