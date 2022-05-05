import {useState} from 'react';
import {ethers, BigNumber } from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';
import {Box, Button, Flex, Input, Text } from '@chakra-ui/react';


const roboPunksNFTAddress = "0x61948f403a6291746ae3802c729E3a94cDEc5652";

const MainMint = ({accounts, setAccountsd }) => {
	const [mintAmount, setMintAmount] = useState(1);
	const isConnected = Boolean(accounts[0]);

	async function handleMint() {
		if(window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				roboPunksNFTAddress, 
				roboPunksNFT.abi,
				signer
			);

			try {
				const response = await contract.mint(BigNumber.from(mintAmount), {
					value: ethers.utils.parseEther((0.02 * mintAmount).toString())
				});
				console.log('response: ', response);
			} 

			catch (err) {
				console.log("error: ", err)
			}
		}
	}

	const handleDecrement = () => {
		if (mintAmount <= 1) return;
		setMintAmount(mintAmount - 1);
	};

	const handleIncrement = () => {
		if (mintAmount >= 3) return;
		setMintAmount(mintAmount + 1);
	};

	return (
		<Flex justify='center' align='center' height='100vh' paddingBottom='150px'>
			<Box width='520px'>
			<div>
				<Text fontSize='48px' textShadow='0 5px 5px #000000'>B33Z</Text>
				<Text
					fontSize='30px'
					letterSpacing='-5.5%'
					fontFamily='VT323'
					textShadow='0 4px 4px #000000'
					
				>
					TH3 B33Z AR3 COMING
				</Text>
			</div>

			{isConnected ? (
				<div>
					<Flex align='center' justify='center'>
						<Button
						backgroundColor='#D6517D'
						borderRadius='5px'
						boxShadow='0px 2px 2px 1px #0F0F0F'
						color='white'
						cursor='pointer'
						fontFamily='inherit'
						padding='15px'
						marginTop='10px' 
						onClick={handleDecrement}
						>
							-
						</Button>
						<Input
							readOnly
							fontFamily='inherit'
							width='100px'
							height='45px'
							textAlign='center'
							paddingLeft='19px'
							marginTop='10px'
							boxShadow='0px 2px 2px 1px #0F0F0F' 
							type="number" 
							value={mintAmount} 
						/>
						<Button
						backgroundColor='#D6517D'
						borderRadius='5px'
						boxShadow='0px 2px 2px 1px #0F0F0F'
						color='white'
						cursor='pointer'
						fontFamily='inherit'
						padding='15px'
						marginTop='10px'  
						onClick={handleIncrement}
						>
							+
						</Button>
						
					</Flex>
					<Button
					backgroundColor='#D6517D'
					borderRadius='5px'
					boxShadow='0px 2px 2px 1px #0F0F0F'
					color='white'
					cursor='pointer'
					fontFamily='inherit'
					padding='15px'
					marginTop='10px'  
					onClick={handleMint}
					>
						MINT
					</Button>
				</div>
			) : (
				<Text
				  letterSpacing='-5.5%'
					fontFamily='VT323'
					textShadow='0 4px 4px #000000'
					fontSize='30px'
					color='#D6517D'
				>
					YOU MUST B3 CONN3CT3D TO M3TAMASK TO MINT
				</Text>
			)}
			</Box>
		</Flex>
	);
};
export default MainMint;