import { fire, db } from "../../util/firebase";
import { useEffect, useState} from "react";
import './Profile.css';

const Profile = () => {
  const [myItems, setMyItems] = useState([]);
  const userEmail = fire.auth().currentUser.email;
  const ref = db.collection("itemsForSale")
  

  useEffect(() => {
    const fetchMyItems = async () => {
      const itemsCollection = await db
        .collection("itemsForSale")
        .where("sellerName", "==", userEmail)
        .get();
      setMyItems(
        itemsCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchMyItems();
  }, []);

  function deleteItem(item) {
    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="shopContainer">
      <h4 className="shopHeader">My Listings</h4>
      <div className="buyFeed">
        {myItems.map((item) => {
          return (
            <div className="buyItems" key={item.item}>
              <p
                className="itemRemove"
                onClick={() => deleteItem(item)}
              >
                X
              </p>
              <img className="buyImage" src={item.image} alt={item.item} />
              <hr />
              <p className="itemBrand">
                {item.brand} <span className="itemSize">{item.size}</span>
              </p>
              <p>{item.item}</p>
              <p>${item.price}</p>
              <p>{item.color}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
