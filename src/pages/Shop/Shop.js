import React, { useState, useEffect } from "react";
import { fire, db, storage } from "../../util/firebase";


const Shop = () => {
  const [availableMerchandise, setAvailableMerchandise] = useState([]);


  useEffect(() => {
    const fetchMerchandise = async () => {
      const itemsCollection = await db.collection("itemsForSale").get();
      setAvailableMerchandise(
        itemsCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchMerchandise();
  }, []);

  return (
    <>
      <ul>
        {availableMerchandise.map((item) => {
          return (
            <li key={item.item}>
              <img width="100" height="100" src={item.image} alt={item.item} />
              <p>{item.item}</p>
              <p>{item.brand}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.color}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Shop;
