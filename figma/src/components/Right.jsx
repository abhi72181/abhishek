import React, { useContext } from "react";
import { Switch } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import "./Right.css";
import { ThemeContext } from "@emotion/react";
import { ThemeContexts } from "../context/ThemeContexts";


let data=[{
 
  name:"Nrupul Dev",
  city:"Bangalore",
  country:"India",
  value:70,
  professional:15,
  points:3000
},
{
  name:"Elon Musk",
  city:"NewYork",
  country:"USA",
  value:50,
  professional:12,
  points:2000
},{
  name:"Abhishek",
  city:"Chandrapur",
  country:"India",
  value:100,
  professional:18,
  points:5000
}]
const Right = () => {
  const {theme,setTheme}=useContext(ThemeContexts)
  return (
    <div className="rightBoundary">
      <br />
      <div className="container">
        <div className="flex">
          <h1>My Dashboard</h1>
          <Stack align="center" direction="row">
            <Switch size="lg" onChange={()=>{theme=="light"?setTheme("dark"):setTheme("light")}} />
          </Stack>
        </div>
      </div>
      <br />
      {data.map((e)=>{
          return (<div className="box">
        
          <Container>
            <span className="flexing">
              <Wrap>
                <WrapItem>
                  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                </WrapItem>
              </Wrap>
              <div className="notflex">
                <div>{e.name}</div>
                <div>{e.city},{e.country}</div>
              </div>
            </span>
            <br />
            <Slider aria-label="slider-ex-1" defaultValue={e.value}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <br />
            <div className="flex">
              <div>professional level {e.professional}</div>
              <h2>{e.points} points</h2>
            </div>
            <br />
          </Container>
        </div>
          )
        })}
      
    </div>
  );
};

export default Right;
