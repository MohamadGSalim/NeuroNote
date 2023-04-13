import Nav from "../components/NavBar";
import { useEffect, useState } from "react";
import {
	Center,
	Square,
	Circle,
	useTagStyles,
	AbsoluteCenter,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	PopoverAnchor,
	Text,
} from "@chakra-ui/react";
import "../styles/profile.css";
import { useState as useAppState } from "../utils/state";

function Profile() {
	const [name, setName] = useState("Name");
	const [profilePic, setProfilePic] = useState(
		"https://avatars.dicebear.com/api/male/username.svg"
	);
	const [userName, setUserName] = useState("UserName");
	const [email, setEmail] = useState("user@gmail.com");
	const [level, setLevel] = useState("Time Traveler");
	const [nextLevel, setNextLevel] = useState("Silver Badge");
	const [xp, setXP] = useState("74/120");
	const [badge, setBadge] = useState("bronze.png");
	const state = useAppState();

	useEffect(() => {
		console.log(state.get("user"));
		setName((state.get("user") as IUser).fullname);
		setUserName((state.get("user") as IUser).username);
		setEmail((state.get("user") as IUser).email);
	}, []);

	return (
		<>
			<Nav />
			<Box overflow="hidden" p="8">
				<Center>
					<Avatar
						size="2xl"
						name="Roger Sioufi"
						src={profilePic}
						border="1px"
						borderColor="gray.200"
					></Avatar>
				</Center>
				<Box textAlign="center" mt="4">
					<Heading as="h2" size="lg">
						{name} ({userName})
					</Heading>
					<Text fontWeight="bold" mt="2">
						{email}
					</Text>
					<Box alignItems="center" mt="12">
						<Box>
							<Center>
								<Heading as="h4" mr="4">
									Level 1: Time Traveller
								</Heading>
								<br></br>
								<Popover>
									<PopoverTrigger>
										<Button>
											<InfoOutlineIcon></InfoOutlineIcon>
										</Button>
									</PopoverTrigger>
									<PopoverContent>
										<PopoverArrow />
										<PopoverCloseButton />
										<PopoverHeader>NeuroNote Level!</PopoverHeader>
										<PopoverBody>
											The more you use NeurNnote, the closer you get to
											unlocking new rewards!
											<br></br>- Bronze Badge {">"} 1 hour: Time Traveler
											<br></br>- Silver Badge {">"} 2 hours: Sound Seeker
											<br></br>- Gold Badge {">"} 4 hours: Music Maverick
											<br></br>- Diamond Badge {">"} 8 hours: Melody Master
											<br></br>- Platinum Badge {">"} 20 hours: Harmony Hero
										</PopoverBody>
									</PopoverContent>
								</Popover>
							</Center>
						</Box>
						<Box
							display="flex"
							w="100%"
							position="relative"
							justifyContent="space-between"
						>
							<Box width="10%">
								<Image
									src="/bronze.png"
									alt="Bronze Level"
									width="100%"
									height="auto"
								/>
								<Text>
									<b>Level 1:</b> <br /> Time Traveller
								</Text>
							</Box>
							<AbsoluteCenter axis="both" width="70%">
								<Progress value={80} width="100%" />
							</AbsoluteCenter>
							<Box width="10%">
								<Image
									src="/silver.png"
									alt="Siver Level"
									width="100%"
									height="auto"
								/>
								<Text>
									{" "}
									<b>Level 2:</b> <br /> Sound Seeker
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
export default Profile;
