import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import '../main.css';
import Fade from 'react-reveal/Fade';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    let [burgerStatus,setBurgerStatus] = useState(false);
    let cars = useSelector(selectCars);
    let ids = ['#modelS','#modelX', '#model3', '#modelY'];
    function changeBurger () {
        setBurgerStatus(!burgerStatus);
    }
    return (
        <div>
            <Container>
                <a href="#">
                    <img src="/images/logo.svg" alt="logo" />
                </a>
                <Menu>
                    {cars && cars.map((car,index) => (
                        <a key={index} href={ids[index]}>{car}</a>
                    ))}
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <CustomMenu onClick={changeBurger}/>
                </RightMenu>
               {burgerStatus ? <Fade right big>
                   <BurgerNav>
                    <CloseWrapper >
                        <CustomClose onClick={changeBurger}/>
                    </CloseWrapper>
                    {cars && cars.map((car,index) => (
                       <li key={index}><a href="#">{car}</a></li>
                    ))}
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade_in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                </BurgerNav></Fade> : null} 
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
    a{
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
    a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    background:white;
    padding:20px;
    width:230px;
    display:flex;
    flex-direction: column;
    text-align: start;


li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);
    list-style:none;
    a{
        font-weight:600;
    }
} 
`
const CustomClose = styled(Close)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`