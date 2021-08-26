import React, { useState } from "react";
import { fire, db, storage } from "../../util/firebase";
import { v4 as uuidv4 } from "uuid";
import {useHistory} from 'react-router-dom';

const SellForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemBrand, setItemBrand] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [itemColor, setItemColor] = useState('');
  const [itemDescription, setItemDescription] = useState("")
  const [fileUrl, setFileUrl] = useState();
  

  const sellRef = db.collection("itemsForSale");
  let history = useHistory();

  const fileHandler = async (event) => {
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const itemInfo =
      fire.auth().currentUser.uid + ":" + event.target.itemName.value;
    await sellRef.doc(itemInfo).set({
      item: itemName,
      brand: itemBrand,
      price: itemPrice,
      description: itemDescription, 
      id: uuidv4(),
      color: itemColor,
      image: fileUrl,
      sellerId: fire.auth().currentUser.uid,
      sellerName: fire.auth().currentUser.email,
      likes: 0
    });
    history.push('/');
  };

  return (
    <form className="sellForm" onSubmit={submitHandler}>
      <label>Item Name</label>
      <input
        type="text"
        value={itemName}
        name="itemName"
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <label>Brand Name</label>
      <input
        type="text"
        value={itemBrand}
        onChange={(e) => setItemBrand(e.target.value)}
        required
      />

      <label>Price</label>
      <input
        type="number"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        required
      />

      <label htmlFor="itemDescription">Description</label>
      <textarea value={itemDescription}  onChange={(e) => setItemDescription(e.target.value)} id="itemDescription" rows="4" cols="50" required/>

      <label>Color</label>
      <input value={itemColor} onChange={(e) => setItemColor(e.target.value)} type="text"  required/>

      <label>Size</label>
      <select id="sizes" name="sizes" value={itemSize} onChange={(e)=> console.log(e.target.value)} required>
        <option value="S" selected>S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>

      <input type="file" onChange={fileHandler} required/>
      <button>Publish</button>
    </form>
  );
};

export default SellForm;
