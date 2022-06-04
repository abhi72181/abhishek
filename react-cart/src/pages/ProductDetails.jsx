import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import InvalidRoute from "./InvalidRoute";
import axios from "axios";

const ProductDetails = () => {
  const [single, setSingle] = useState({});
  const [error, setError] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  async function putData() {
    let data = await axios
      .get(`http://localhost:8080/mens/${id}`)
      .catch((err) => setError(err.response.status));

    console.log(data, "data");
    setSingle(data.data);
    console.log(single, "single");
  }
  useEffect(() => {
    putData();
  }, []);
  return (
    <div style={{ marginLeft: "650px" }}>
      {error == 404 ? (
        <InvalidRoute />
      ) : (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={single.image} boxSize="350px" alt="image" />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {/* {console.log(single.rating.rate,"check")} */}
                {single.counts} Available
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {single.title}
            </Box>

            <Box>
              {single.price + " " + "Rs."}
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {single.description}
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < single.rates ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {single.counts} reviews
              </Box>
            </Box>
          </Box>
          <Button>Add to cart</Button>
        </Box>
      )}
    </div>
  );
};

export default ProductDetails;
