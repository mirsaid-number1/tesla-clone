import React,{ useReducer,useState} from 'react'
import {useHistory} from 'react-router-dom'


let ACTIONS = {
    USER_ID:'permitted'
}
function reducer(state,action){
    switch(action.type){
        case ACTIONS.USER_ID:
            state = {
                ...state,
                [action.payload.key]: action.payload.value,
            }
            break;
        default:
            console.log('wrong')
        break;
    }
    return state
}
function Login() {
    let history = useHistory()
    let [check,setcheck] = useState(false) 
  
    let initial = {
        username:" ",
        password:" ",
        phone_number:" ",
        email:" ",
    }
    let [Fstate,dispatch] = useReducer(reducer,initial)
    
    function getInputValues(e){
        dispatch({
            type : ACTIONS.USER_ID,
            payload:{
                key: e.target.name,
                value: e.target.value,
            }  
        })
    }

    function saveit() {
        if(Fstate.username.includes('1') && Fstate.password.includes('1')){
            setcheck(!check)
            alert('hello');
            console.log(check)
        
        }
    }
    function nextit(){
        history.push('/authentication')
    }
    return (
        <>
<div className="container">
        <div className="row">
            <div className="col-md-4 offset-0">
                <div className="App-logo"><h1>Welcome to Tesla clone </h1></div>
                <div className="card mt-2">
                    <div className="card-header">
                     {check ? <h1 className="welcome">Finished</h1> : <h2> Fill up form</h2>}   
                    </div>
                    <div className="card-body">
                    <div className="form-group">
                    <label htmlFor="username"> username</label>
                    <input type="text" className="form-control mt-2" name="username" key="username" id="username" onChange={getInputValues} />
                </div>
                <div className="form-group">
                    <label htmlFor="username"> password</label>
                    <input type="password" className="form-control mt-2" key="password" name="password" id="password" onChange={getInputValues}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone_number"> phone_number</label>
                    <input type="number" className="form-control mt-2" key="phone_number" name="phone_number" id="phone_number" onChange={getInputValues}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> email</label>
                    <input type="email" className="form-control mt-2" key="email" name="email" id="email" onChange={getInputValues}/>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                {check ? (<button className="btn btn-primary mt-2" onClick={nextit}>Next</button>) : (<button className="btn btn-primary mt-2" onClick={saveit}>Sign in</button>)} 
                </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
        </>
    )
}

export default Login
