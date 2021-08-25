import "./FeaturedItem.css";

const FeaturedItem = () => {
  return (
    <div className="featuredItemContainer">
      <div className="featuredItemImage">
        <img src="assets/images/shades.jpeg" alt="item image" />
      </div>
      <div className="featuredItemInfo">
        <p>added 9 hours ago</p>
        <h4>
          Item Brand <span>Size</span>
        </h4>
        <p>Item Name</p>
        <p>
          Price <span>Like/Dislike</span>
        </p>
      </div>
    </div>
  );
};

export default FeaturedItem;
