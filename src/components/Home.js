import React from 'react'
import styled from 'styled-components'

import Section from './Section'

const Home = () => {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroudImg="model-s.jpg"
				leftBtnText="Custom Order"
				rightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroudImg="model-y.jpg"
				leftBtnText="Custom Order"
				rightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroudImg="model-3.jpg"
				leftBtnText="Custom Order"
				rightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroudImg="model-x.jpg"
				leftBtnText="Custom Order"
				rightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroudImg="solar-panel.jpg"
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
				backgroudImg="solar-roof.jpg"
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				backgroudImg="accessories.jpg"
				leftBtnText="Order Now"
			/>
		</Container>
	)
}

export default Home

const Container = styled.div`
	height: 100vh;
`
