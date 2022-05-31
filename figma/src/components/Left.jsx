import React from "react";
import "./Left.css";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon ,EmailIcon,PlusSquareIcon,QuestionIcon} from '@chakra-ui/icons'
const Left = () => {
  return (
    <div className="leftBoundary">
      <br />
      <Wrap>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Wrap>
      <br />
      <br />
      <br />
      <br />
      
      <AddIcon />
      <br />
      <EmailIcon/>
      <br />
     <PhoneIcon />
     <br />
     <WarningIcon />
     <br />
     <PlusSquareIcon/>
     <br />
     <QuestionIcon />
     <br />
    </div>
  );
};

export default Left;
