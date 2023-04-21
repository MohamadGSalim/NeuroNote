import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState as useAppState } from "../utils/state";
import Profile from "../pages/profile";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useAppState();
  const history = useNavigate();

  useEffect(() => {
    if (state.get("user") === null) {
      history("/login");
    }
  }, []);
  function isLoggedIn(): boolean {
    return !!state.get("user");
  }

  function logout() {
    state.set("user", null);
    state.set("token", null);
    state.reload();
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box boxSize="sm">
            {colorMode === "light" ? (
              <Image
                src="/logo-black.svg"
                alt="Dan Abramov"
                height={"100%"}
                width={"100%"}
              />
            ) : (
              <Image
                src="/logo-white.svg"
                alt="Dan Abramov"
                height={"100%"}
                width={"100%"}
              />
            )}
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Link as={RouterLink} to="/diary">
                <Button variant="outline">Submit Diary</Button>
              </Link>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"} zIndex="100">
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {isLoggedIn()
                        ? (state.get("user") as IUser).username
                        : "Please login"}
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem as="a" href="/">
                    Jam Session
                  </MenuItem>
                  <MenuItem as="a" href="/profile">
                    My Profile
                  </MenuItem>
                  <MenuItem as="a" href="/feedback">
                    Give Feedback
                  </MenuItem>
                  {isLoggedIn() ? (
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  ) : (
                    <MenuItem onClick={(e) => history("/login")}>
                      Login
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
