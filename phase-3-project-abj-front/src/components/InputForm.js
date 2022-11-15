import React from "react";

function InputForm(){
    return(
        <div className="inputForm">
            <form>
                <div>
                    <label></label>
                    <input 
                        placeholder="Comments"
                        type="text"
                    />
                    <label></label>
                    <input 
                        placeholder="Rating"
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