import React,{useReducer, useState} from 'react'
let reducer_values = {
    count:0,
    toggle:false,
    name:'',
}
let ACTIONS_TYPE = {
    ADD:'add',
    ShOW:'show',
}
function reducer(state,action){
    switch(action.type){
        case ACTIONS_TYPE.ADD :
            return{
                ...state,
                count: state.count + 1
            }
        case ACTIONS_TYPE.ShOW:
            return{
                ...state,
                toggle: !state.toggle,
            }
         default:
             return {
                 state
             }       
    }
}
function UseState() {
    let [val,setVal] = useState({num:0,item:'',check:false});
    let [state,dispatch] = useReducer(reducer,reducer_values)
    let style={
        width:'50wh',
        height:'50vh',
        backgroundColor: val.item,
        color: val.item === 'white' ? 'black': 'white',
        border:'2px solid black',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
            button:{
                width:"4wh",
                height:'3vh'
            },
            h1:{
                width:'12wh',
                height:'50vh',
                alignItems:'center'
            }
    }

    function increment(){
        setVal({
            ...val,
            num: val.num+1
        })
    }
    
    function decrement(){
        setVal({
            ...val,
            num: val.num-1
        })
    }
    return (
        <div style={style}>
            <button onClick={() => setVal(val.check)}>useState practise exercise</button>
            {val.check ? <div style={style}>
                <h1 style={style.h1}>num to change {val.num} here is text {val.item}</h1>
                <input type="text" value={val.item} placeholder="enter background color" onChange={(e) => {setVal({...val,item: e.target.value})}}/>
                <button onClick={increment}>inc</button>
                <button onClick={decrement}>dec</button>
                
                </div> : null}
                <button onClick={() => {dispatch({type:ACTIONS_TYPE.ShOW})}}>useState practise exercise</button>
                {
                    ACTIONS_TYPE.ShOW ? <div><button onClick={() => {dispatch({type:ACTIONS_TYPE.ADD})}}><h1>+</h1></button>  {state.count}</div> : null
                }
        </div>
    )
}

export default UseState
