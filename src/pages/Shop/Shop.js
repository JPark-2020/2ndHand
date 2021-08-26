import React, { useState, useEffect } from "react";
import { fire, db, storage } from "../../util/firebase";
import './Shop.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


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
    <div className="shopContainer">
      <h4 className="shopHeader">Available Listings</h4>
      <div className="buyFeed">
        {availableMerchandise.map((item) => {
          return (
            <div className="buyItems" key={item.item}>
              <img className="buyImage" src={item.image} alt={item.item} />
              <hr/>
              <p className="itemBrand">{item.brand} <span className="itemSize">{item.size}</span></p>
              <p>{item.item}</p>
              <p>${item.price}</p>
              <p>{item.color}</p>
              <p>{item.sellerName}</p>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default Shop;
