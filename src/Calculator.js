import { useEffect,useState} from 'react'
import Button from "./Button";
import Time from './Time';

function Calculator(){
    const [time,setTime]=useState(60)
    const [input,setInput]=useState('')
    const [question,setQuestion]=useState('')
    const [dem,setDem] =useState(1)
    const [diem,setDiem]=useState(0)
    const [ketqua,setKetqua] =useState(false)

    
    useState(()=>{
        const times = setInterval(()=>{
            setTime(time=>time-1)
        },1000)
        return ()=>{
            clearInterval(times)
        }},
        [dem]
    )

    useEffect(()=>{
        const dau= ['+','-']
        let so1=Math.floor(Math.random()*100)
        let so2=Math.floor(Math.random()*100)
        let random= dau[Math.floor(Math.random()*dau.length)]
        const so=[so1,so2]
        so.sort((a,b) => b-a)
        const pheptoan =`${so[0]} ${random} ${so[1]}`
        setQuestion(pheptoan)
    },[dem])

    const handleButtonNumber=(e)=>{
            if(e.target.value ==='x'){
                setInput('')
            } else {
                setInput(input + e.target.value )
            }
    }

    const handleButtonEnter=()=>{
            if(dem<10){
            setDem(dem+1)
            setInput('')
            setTime(60)
            if(eval(question)===Number(input)){
                return setDiem(diem+1)
            }
        }  else {
            setKetqua(true)
        }
    }
    
    return(
        <div>
        <div className="Calculator" >
            <div style={ ketqua === false ? {display:'block'} :{display:'none'}}>
            <Time time={time} />
            <div className='input'>
                <input value={question} readOnly/>
                <input value= {input} onChange={(e)=>e.target.value}/>
            </div>
            <div className='buttons'>
                <Button handleButtonNumber={handleButtonNumber} handleButtonEnter={handleButtonEnter} />
            </div>
            </div>
            </div>
            <div style={ketqua ===false ? {display:'none'} :{display:'block', paddingTop:'40vh'}} className='ketthuc'>
            {ketqua && (
                    <p>Tổng {diem} câu đúng</p>
            )}
            </div>
            </div>
    )
}

export default Calculator;
