import {
	Avatar,
	Box,
	Button,
	chakra,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Stack,
	Switch,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { State } from "../util/state";

const CFaUserAlt = chakra(FaUserAlt);
const CFaEmail = chakra(MdEmail);
const CFaLock = chakra(FaLock);

export function RegisterComponent() {
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [hasDisability, setHasDisability] = useState(false);
	const [disability, setDisability] = useState("");
	const [error, setError] = useState("");
	const handleShowClick = () => setShowPassword(!showPassword);

	async function login() {
		if (username.length == 0 || password.length == 0 || email.length == 0) {
			setError("Username, email or password cannot be empty");
			return;
		}

		const response = await fetch("http://localhost:7070/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
				email: email,
				disability_type: disability,
			}),
		});

		try {
			const data = await response.json();
			if (response.status === 200) {
				// Redirect and set user state
				console.log(data);
				State.set("user", data.user);
				State.set("token", data.token);
				State.reload();
			} else {
				setError(JSON.stringify(data));
			}
		} catch (error) {
			setError((error as Error).message);
		}
	}

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			justifyContent="center"
			alignItems="center"
			fontSize={"larger"}
		>
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center"
			>
				<Avatar bg="white.500" />
				<Heading color="white.400" size={"2xl"}>
					Welcome to NeuroNote
				</Heading>
				<Box minW={{ base: "90%", md: "468px" }}>
					<form>
						<Stack spacing={4} p="1rem" boxShadow="md">
							<FormControl>
								{error.length > 0 && (
									<FormHelperText
										color="red
                                "
										mb="1rem"
										fontSize={"larger"}
									>
										{error}
									</FormHelperText>
								)}
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaUserAlt color="gray.300" />}
									/>
									<Input
										type="text"
										placeholder="username"
										fontSize={"larger"}
										onChange={(e) => setUsername(e.target.value)}
										value={username}
										required
									/>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										children={<CFaEmail color="gray.300" />}
									/>
									<Input
										type="email"
										placeholder="Email"
										fontSize={"larger"}
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										required
									/>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										children={<CFaLock color="gray.300" />}
									/>
									<Input
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										fontSize={"larger"}
										onChange={(e) => setPassword(e.target.value)}
										value={password}
										required
									/>
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handleShowClick}>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
								{/* <FormHelperText textAlign="right">
									Not a memeber? <Link>register here</Link>
								</FormHelperText> */}
							</FormControl>
							<FormControl display="flex" alignItems="center">
								<FormLabel htmlFor="has-disability">
									I have a disability
								</FormLabel>
								<Switch
									id="has-disability"
									size="lg"
									colorScheme="facebook"
									onChange={(e) => setHasDisability((t) => !t)}
								/>
							</FormControl>
							{hasDisability && (
								<FormControl>
									<InputGroup>
										<Textarea
											placeholder="Give us more details"
											fontSize={"large"}
											onChange={(e) => setDisability(e.target.value)}
											value={disability}
										/>
									</InputGroup>
								</FormControl>
							)}
							<Button
								borderRadius={0}
								type="submit"
								variant="solid"
								colorScheme="facebook"
								width="full"
								fontSize={"larger"}
								onClick={login}
							>
								Register
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Already a memeber?
				<Link color="white.500" href="/login">
					Login
				</Link>
			</Box>
		</Flex>
	);
}
