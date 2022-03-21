import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Header from './Header';
function Home() {
    return (
        <div>
            <Container>
            <Header />
            <div id='modelS'>
                <Section 
                title="Model S"
                backgroundImg="model-s.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                ></Section>
                </div>
                <div id='modelX'>
                <Section 
                    title="Model X"
                    backgroundImg="model-x.jpg"
                    description="Order Online for Touchless Delivery"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                    
                />
                </div>
                <div  id='model3'>
                <Section 
                    title="Model 3"
                    backgroundImg="model-3.jpg"
                    description="Order Online for Touchless Delivery"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                   
                />
                </div>
                <div id='modelY'>
                <Section 
                    title="Model Y"
                    backgroundImg="model-y.jpg"
                    description="Order Online for Touchless Delivery"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                    
                />
                </div>
                   <Section 
                    title="Lowest Cost Solar Panels in America"
                    backgroundImg="solar-panel.jpg"
                    description="Money-back gurantee"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
                    id='panel'
                />
                 <Section 
                    title="Solar for New Roofs"
                    backgroundImg="solar-roof.jpg"
                    description="Solar Roof Costs Less Than a New Roof Cover"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
                />
                 <Section 
                    title="Accessories"
                    backgroundImg="accessories.jpg"
                    description=""
                    leftBtnText="Shop now"
                />
            </Container>
        </div>
    )
}

export default Home
const Container = styled.div`
    height:100vh;
    z-index:1;
`