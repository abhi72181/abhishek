import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import "./Mens.css"
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const Womens = () => {
 const [women, setWomen] = useState([])
 const navigate=useNavigate()
  async function getWomensData(){
    let womenData=await axios.get("http://localhost:8080/womens")
    console.log("womens",womenData)
    setWomen(womenData.data)
  }
const moreDetails=(id)=>{
  navigate(`/womens/${id}`)
}
  useEffect(()=>{
    getWomensData()
  },[])
  return (
    <div className='mensBox'>
      <div className='inside-mens'>
      {women.map((e)=>{
        return  <div className='single-item'>
         
               <Box maxW='sm'  borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={e.image}  boxSize='350px'
     alt="image" />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
          
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {e.title}
        </Box>

        <Box>
        {e.price +" "+"Rs."}
          <Box as='span' color='gray.600' fontSize='sm'>
         
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < (e.rates) ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            
          </Box>
        </Box>
       
      </Box>
       <Button onClick={()=>moreDetails(e.id)}>CLick for More Details..</Button>
       <br /><br />
    </Box>
    </div>
       
      })}
       </div>
    </div>
  )
}

export default Womens