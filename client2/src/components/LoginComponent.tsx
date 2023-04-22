import {
	Image,
	Box,
	Button,
	chakra,
	Flex,
	FormControl,
	FormHelperText,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState as useAppState } from "../utils/state";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export function LoginComponent() {
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const state = useAppState();
	const { colorMode } = useColorMode();

	const handleShowClick = () => setShowPassword(!showPassword);

	async function login(e) {
		e.preventDefault();
		if (username.length === 0 || password.length === 0) {
			setError("Username or password cannot be empty");
			return;
		}

		const response = await fetch("http://localhost:7070/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		try {
			const data = await response.json();
			if (response.status === 200) {
				// Redirect and set user state
				console.log(data);
				state.set("user", data.user);
				state.set("token", data.token);
				state.reload();
			} else {
				setError(data?.message || "An error occurred. Please retry later.");
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
			<Box>
				<Image src="/logo-white.svg" alt="NeuroNote Logo" height={130} />
			</Box>
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center"
			>
				<Heading color="white.400" size={"2xl"} mt="6px">
					Welcome to NeuroNote
				</Heading>
				<Text color="white.400" fontSize="2xl">
					Please fill in and submit the form to login
				</Text>
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
							<Button
								type="submit"
								width="full"
								fontSize={"larger"}
								onClick={(e) => login(e)}
							>
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				New to us?{" "}
				<Link
					color={colorMode == "dark" ? "white" : "black"}
					textDecoration="underline"
					fontWeight="bold"
					href="/register"
				>
					Sign Up
				</Link>
			</Box>
		</Flex>
	);
}
