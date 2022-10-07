import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import '../main.css';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    var [burgerStatus,setBurgerStatus] = useState(false);
    let cars = useSelector(selectCars);
    let ids = ['#modelS','#modelX', '#model3', '#modelY'];
    function changeBurger () {
        setBurgerStatus(!burgerStatus);
    }
    const BurgerNav = {
        display:'flex',
        flexDirection: 'column',
        textAlign: 'start',
        position:'fixed',
        top:0,
        right:`${burgerStatus ? '0' : '-500px'}`,
        transition:'200ms ease',
        height:'100vh',
        background:'rgba(255,255,255, 0.9)',
        padding:'20px',
        width:'230px',
    }
    const listStyle = {
        padding:'15px 0',
        borderBottom:'1px solid rgba(0,0,0,0.2)',
        listStyle:'none',
        fontWeight:600,
    } 
    return (
        <div>
            <div className={!burgerStatus ? 'none' : 'show'} onClick={changeBurger}></div>
            <Container>
                <span>
                    <img src="/images/logo.svg" alt="logo" />
                </span>
                <Menu>
                    {cars && cars.map((car,index) => (
                        <a key={index} href={ids[index]}>{car}</a>
                    ))}
                </Menu>
                <RightMenu onClick={changeBurger}>
                    <span>Shop</span>
                    <span>Tesla Account</span>
                    <CustomMenu/>
                </RightMenu>    
                <div style={BurgerNav} className='sidebar'>
                    <CloseWrapper >
                        <CustomClose onClick={changeBurger}/>
                    </CloseWrapper>
                    {cars && cars.map((car,index) => (
                       <li key={index} style={listStyle}><a href={ids[index]}>{car}</a></li>
                    ))}
                    <li style={listStyle}><a href="#modelS" >Existing inventory</a></li>
                    <li style={listStyle}><a href="#modelS" >Used Inventory</a></li>
                    <li style={listStyle}><a href="#modelS" >Trade_in</a></li>
                    <li style={listStyle}><a href="#modelS" >Cybertruck</a></li>
                    <li style={listStyle}><a href="#modelS" >Roadster</a></li>
                </div> 
            </Container>
        </div>
    )

}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
    span,a{
        text-decoration:none;
        color:black;
    }
`
const Menu = styled.div`
    top:0;
    display: flex;
    align-items:center;
    justify-content:center;
    flex:1;

    
    a{
        font-weight: 500;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        margin-left:8px
    }

    @media(max-width:768px){
        display:none;
    }

`
const RightMenu = styled.div`
    display: flex;
    span {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

    @media(max-width:500px) {
        span {
            display:none;
        }
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const CustomClose = styled(Close)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`