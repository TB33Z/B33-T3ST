import React from 'react';
import {Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import OpenSea from "./assets/social-media-icons/opensea.png"
import Twitter from "./assets/social-media-icons/twitter_32x32.png"
import Discord from "./assets/social-media-icons/discord.png"


const NavBar = ({accounts, setAccounts}) => {
	const isConnected = Boolean(accounts[0]);

	async function connectAccount() {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			setAccounts(accounts);
		}
	}

	return (
		<Flex justify="space-between" align="center" padding="30px 30px">
			 {/*left side of the nav bar - Social Media Icons*/}
			<Flex justify="space-around" width="30%" padding="0 75px">
				<Link href='https://opensea.io/'> 
					<Image src={OpenSea} boxSize="40px" margin='0 15px' />
				</Link>
				<Link href='https://twitter.com/'> 
					<Image src={Twitter} boxSize="35px" margin='0 15px' />
				</Link>
				<Link href='https://discord.com/'> 
					<Image src={Discord} boxSize="45px" margin='0 15px' />
				</Link>
			</Flex>
			

			{/* Right side of the Nav bar - Sections and Connect */}
			<Flex
			justify="space-around"
			align='center'
			width='40%'
			padding='30px'
			>

			<Box 
			margin='0 15px'
			textShadow='0 3px 3px #000000'
			>
				ABOUT
			</Box>
			<Spacer />
			<Box 
			margin='0 15px'
			textShadow='0 3px 3px #000000'
			>
				MINT
			</Box>
			<Spacer />
			<Box
			margin='0 15px'
			textShadow='0 3px 3px #000000'
			>
				T3AM
			</Box>
			<Spacer />

			{/* Connect */}
			{isConnected ? (
				<Box margin='0 15px'>CONN3CT3D</Box>
			) : (
				<Button 
				backgroundColor='#d6517D'
				borderRadius='5px'
				boxShadow='0px 2px 2px 1px #0F0F0F'
				color='white'
				cursor='pointer'
				fontFamily='inherit'
				padding='10px'
				margin='0 10px'
				textShadow='0 3px 3px #000000'
				onClick={connectAccount}
				>
					CONN3CT WALL3T
				</Button>
			)}

			</Flex>
		</Flex>
	);
};

export default NavBar