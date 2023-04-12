
import { Center, Square, Circle, FormControl } from '@chakra-ui/react'
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
import Nav from '../components/NavBar'
import React, { useState } from 'react';
import '../styles/feedbackForm.css'
import { Form } from 'react-router-dom'

function FeedbackForm()
{
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);


    return (
        <>
        
            <Nav />

            <div className="feedback_container">

                <Center>
                    <Heading as='h3' size='xl' className="profile_title" >Please help us improve your experience!</Heading>
                

                    <FormControl>
                        {/* Overall experience */}
                        <Heading as="h3" size="lg" id="feedback_question_header">How was your overall experience?</Heading>
                        <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                            <button
                                
                                type="button"
                                key={index}
                                className={index <= rating1 ? "on" : "off"}
                                onClick={() => setRating1(index)}
                            >
                                <span id="feedback_star">&#9733;</span>
                            </button>
                            );
                        })}
                        </div>

                        {/* Fun Fator  */}
                        <Heading as="h3" size="lg" id="feedback_question_header">How likely are you to recommend Neuronote to a friend?</Heading>
                        <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                            <button
                                
                                type="button"
                                key={index}
                                className={index <= rating2 ? "on" : "off"}
                                onClick={() => setRating2(index)}
                            >
                                <span id="feedback_star">&#9733;</span>
                            </button>
                            );
                        })}
                        </div>

                        {/* Challenging Fator  */}
                        <Heading as="h3" size="lg" id="feedback_question_header">How challenging was it to create your first note?</Heading>
                        <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                            <button
                                
                                type="button"
                                key={index}
                                className={index <= rating3 ? "on" : "off"}
                                onClick={() => setRating3(index)}
                            >
                                <span id="feedback_star">&#9733;</span>
                            </button>
                            );
                        })}
                        </div>

                        {/* Challenging Fator  */}
                        <Heading as="h3" size="lg" id="feedback_question_header">How convenient is NeuroNote to use?</Heading>
                        <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                            <button
                                
                                type="button"
                                key={index}
                                className={index <= rating4 ? "on" : "off"}
                                onClick={() => setRating4(index)}
                            >
                                <span id="feedback_star">&#9733;</span>
                            </button>
                            );
                        })}
                        </div>

                        <br></br>
                        <Button
                            marginLeft='250px'
                            padding='25px'
                            fontSize='27px'
                            width='150px'
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </FormControl>
                </Center>
            </div>
        </>
    );
}

export default FeedbackForm;