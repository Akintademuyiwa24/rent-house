import { useState, useEffect, createContext } from "react";
import React from 'react';

//import data
import {housesData} from '../data'

//create context
export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {

  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])

  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)

  //return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    //remoe duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]

    //set countries state
    setCountries(uniqueCountries);

  },[])

  //return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    //remoe duplicates
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)]

    //set properties state
    setProperties(uniqueProperties);

  },[])

  const handleClick = () => {
    //set loading
    setLoading(true);
    //create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    };

    //parse first and second price to number
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all selcted
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }
      

      // // if all are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // //if countr not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // //if propert not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // //if price not default
      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // //if count. and propt. not default
      
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // //if count. and price not defaut
      
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === country;
        }
      }

      // //propt. and price not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property;
        }
      }

      
    });
    
    setTimeout(() => {
        return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false);
      }, 1000)
  }
  return (
    <HouseContext.Provider value={{country, setCountry, countries, property, setProperty, properties, price, setPrice, houses, loading, handleClick, loading}}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
