import Nav from '../components/NavBar'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
import "../styles/profile.css"


function Profile() {

    return (
    <>
        <Nav />
        <br></br>

        <Center>
            <Heading as='h1' size='3xl' className="profile_title">Profile</Heading>
        </Center>
        
        <SimpleGrid columns={2} spacing={8}>
            <Box>
                <SimpleGrid columns={1} spacing={8}>
                    <Box>
                        <Center>
                            <Avatar
                                size={"3xl"}
                                src={"https://avatars.dicebear.com/api/male/username.svg"}
                            />
                        </Center>
                    </Box>

                    <Box>
                        <Center>
                            <Heading as="h4">Time Traveler</Heading>
                            <br></br>
                            <div>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button><InfoOutlineIcon></InfoOutlineIcon></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>EuroNote Level!</PopoverHeader>
                                        <PopoverBody>The more you use Euronote, the closer you get to unlocking new rewards! 
                                            <br></br>- Bronze Badge {'>'} 1 hour: Time Traveler
                                            <br></br>- Silver Badge {'>'} 2 hours: Sound Seeker
                                            <br></br>- Gold Badge {'>'} 4 hours: Music Maverick
                                            <br></br>- Diamond Badge {'>'} 8 hours: Melody Master
                                            <br></br>- Platinum Badge {'>'} 20 hours: Harmony Hero
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </Center>
                    </Box>  
                </SimpleGrid>
            </Box>

            <Box>
                <Heading as='h3' id="profile_element">User</Heading>
                <Heading as='h3' id="profile_element">UserName</Heading>
                <Heading as='h3' id="profile_element">user@gmail.com</Heading>
                <Heading as='h3' id="profile_element">Password</Heading>
                <Center><Image src="bronze.png" id="profile_element"></Image></Center>
                <div id="profile_progress"><Progress value={80} /></div>
                <Center><div id="profile_progress_description">75/120 minutes until Silver level! </div></Center>
            </Box>

            
        </SimpleGrid>
        <Center>
            <Button id="profile_log_out"
                size="lg"
                loadingText='Loggin Out...'
                colorScheme='teal'
                variant='outline'
            >
                Log out!
            </Button>
        </Center>
        
    
    </>
    )
}
export default Profile;