import React,{useReducer, useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

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
function Authentication() {
    let history = useHistory()
    let [check,setcheck] = useState(false) 
  
    let initial = {
        username:" ",
        password:" ",
    }
    let [state,dispatch] = useReducer(reducer,initial)
    
    function getInputValues(e){
        dispatch({
            type : ACTIONS.USER_ID,
            payload:{
                key: e.target.name,
                value: e.target.value,
            }  
        })
    }
    function installer() {
        if(state.username.includes('1') && state.password.includes('1')){
            setcheck(!check)
            console.log(check)
            setTimeout(() => history.push('/main'),2000)
        }
    }
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-0">
                <div className="App-logo"><h1>Welcome to Tesla clone </h1></div>
                <div className="card mt-2">
                    <div className="card-header">
                     {check ? <h1 className="welcome">welcome</h1> : <h2> Enter your data</h2>}   
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
                <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-primary mt-2" onClick={installer}>Login</button> 
                    <Link to="/registration">Sign in </Link>
                </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
    </>
    )
}

export default Authentication
