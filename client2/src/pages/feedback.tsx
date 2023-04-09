import React from 'react';
import { useState } from 'react';
import {
Box,
Heading,
Button,
FormControl,
FormLabel,
Radio,
RadioGroup,
useToast,
Stack,
} from '@chakra-ui/react';
import Nav from '../components/NavBar';

export default function Feedback() {
   const [visualizations, setVisualizations] = useState('');
   const [features, setFeatures] = useState('');
   const [distracting, setDistracting] = useState('');
   const [design, setDesign] = useState('');
   const [accuracy, setAccuracy] = useState('');
   const [feedback, setFeedback] = useState('');
   const [, setSubmitted] = useState(false);

const toast = useToast();

const handleSubmit = (e) => {
   e.preventDefault();
   setSubmitted(true);
toast({
   title: 'Feedback submitted',
   description: 'Thank you for your feedback!',
   status: 'success',
   duration: 5000,
   isClosable: true,
});
setVisualizations('');
setFeatures('');
setDistracting('');
setDesign('');
setAccuracy('');
setFeedback('');
};

return (
  <Box>  
         <title>NeuroNote Feedback</title>
         <meta name="description" content="Feedback page for NeuroNote" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <Nav />
      <Box p="4" bg="black.100" textAlign="center">
         <Box  w="100%" maxWidth="50rem" mx="auto" p="4">
         <Heading fontSize={'58px'} as="h1" mb="4">
            Feedback
         </Heading>
         <Box fontSize={'36px'} as="p" mb="8" fontWeight="bold">
            Answer the following questions to provide feedback on your experience with NeuroNote.
         </Box>
         <form onSubmit={handleSubmit}>
            <FormControl mb="8" isRequired>
               <FormLabel as="h2" fontSize={'26px'} fontWeight="bold">
                  1) Do you find the graphs and visualizations in the app distracting?
               </FormLabel>
               
               <RadioGroup 
               name="visualizations"
               onChange={(value) => setVisualizations(value)}
               value={visualizations}
               >
                  <Stack spacing={4} direction = "column" >
                  <Radio value="Yes, they are too distracting">Yes, they are too distracting</Radio>
                  <Radio value="No, they are helpful in understanding the data">No, they are helpful in understanding the data</Radio>
                  <Radio value="I don't have an opinion">I don't have an opinion</Radio>
                  </Stack>
               </RadioGroup>
            
            </FormControl>
            <FormControl mb="8" isRequired>
               <FormLabel as="h2" fontSize={'26px'} fontWeight="bold">
                  2) Do you feel that the app's features are organized in a logical and intuitive manner?
               </FormLabel>
               
               <RadioGroup
               name="features"
               onChange={(value) => setFeatures(value)}
               value={features}
               >
                  <Stack spacing={4} direction = "column">
                  <Radio value="Yes, they are easy to find and use">
                     Yes, they are easy to find and use
                  </Radio>
                  <Radio value="No, they are difficult to find and use">
                     No, they are difficult to find and use
                  </Radio>
                  <Radio value="Unclear and difficult to navigate">
                     Unclear and difficult to navigate
                  </Radio>
                  </Stack>
               </RadioGroup>
              
            </FormControl>
            <FormControl mb="8" isRequired>
               <FormLabel as="h2" fontSize={'26px'} fontWeight="bold">
                  3) Which of the following features would make it easier for you to use the app?
               </FormLabel>
               <RadioGroup
               name="distracting"
               onChange={(value) => setDistracting(value)}
               value={distracting}
               >
                  <Stack spacing={4} direction = "column">
                  <Radio value="More detailed explanations and tutorials">
                     More detailed explanations and tutorials
                  </Radio>
                  <Radio value="Fewer graphs and visualizations">
                     Fewer graphs and visualizations
                  </Radio>
                  <Radio value="More customization options">
                     More customization options
                  </Radio>
                  <Radio value="Other">Other</Radio>
                  </Stack>
               </RadioGroup>
            </FormControl>
            <FormControl mb="8" isRequired>
               <FormLabel as="h2" fontSize={'26px'} fontWeight="bold">
                  4) How do you feel about the overall design and visual appeal of NeuroNote?
               </FormLabel>
               <RadioGroup
               name="design"
               onChange={(value) => setDesign(value)}
               value={design}
               >
                  <Stack spacing={4} direction = "column">
                  <Radio value="Very visually appealing">Very visually appealing</Radio>
                  <Radio value="Somewhat visually appealing">
                     Somewhat visually appealing
                  </Radio>
                  <Radio value="Not very visually appealing">
                     Not very visually appealing
                  </Radio>
                  <Radio value="Not visually appealing at all">
                     Not visually appealing at all
                  </Radio>
                  </Stack>
               </RadioGroup>
            </FormControl>
            <FormControl mb="8" isRequired>
               <FormLabel as="h2" fontSize={'26px'} fontWeight="bold">
                  5) How do you feel about the accuracy of the EEG headset in detecting your brainwaves and translating them into music notes?
               </FormLabel>
               <RadioGroup
               name="accuracy"
               onChange={(value) => setAccuracy(value)}
               value={accuracy}
               >
                  <Stack spacing={4} direction = "column">
                  <Radio value="It is very accurate">It is very accurate</Radio>
                  <Radio value="It is somewhat accurate">
                     It is somewhat accurate
                  </Radio>
                  <Radio value="It is not accurate">It is not accurate</Radio>
                  </Stack>
               </RadioGroup>
            </FormControl>
            <FormControl mb="8" isRequired>
               <FormLabel as="h2" fontSize={'26px'} fontWeight="bold">
                  6) Do you feel that NeuroNote provides enough feedback and guidance to help you improve your brainwave control and create better music?
               </FormLabel>
               <RadioGroup
               name="feedback"
               onChange={(value) => setFeedback(value)}
               value={feedback}
               >
                  <Stack spacing={4} direction = "column">
                  <Radio value="Yes, the feedback and guidance are helpful"> Yes, the feedback and guidance are helpful</Radio>
                  <Radio value="Somewhat, but more feedback and guidance would be helpful"> 
                     Somewhat, but more feedback and guidance would be helpful
                  </Radio>
                  <Radio value="No, the feedback and guidance are not helpful">
                     No, the feedback and guidance are not helpful
                  </Radio>
                  </Stack>
               </RadioGroup>
            </FormControl>
            <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            w="100%"
            maxWidth="20rem"
            mx="auto"
            >
               Submit
            </Button>
         </form>
         </Box>
      </Box>
   </Box>
   );
}
