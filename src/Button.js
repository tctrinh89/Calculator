// import {useState} from 'react'

function Button({handleButtonNumber,handleButtonEnter}){
    const buttons=['1','2','3','4','5','6','7','8','9','x','0','enter']
    return (
            <div className='buttons'>
                {buttons.map((value)=>
                <div className='button' key={value}>
                    <button  value={value} onClick= {value === 'enter' ? handleButtonEnter :handleButtonNumber} >{value}</button>
                </div>
                )}
            </div>
    )
}
export default Button;