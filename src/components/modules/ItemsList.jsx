import ServiceCard from "./ServiceCard";
import ProductCard from "./ProductCard";

const ItemsList = ({ type, list, containerStyles, itemStyles }) => {
  return (
    <div className={containerStyles}>
      {list.map((item, index) => {
        if (type === "services") {
          return <ServiceCard {...item} itemStyles={itemStyles} key={index} />;
        } else if (type === "products") {
          return <ProductCard {...item} itemStyles={itemStyles} key={index} />;
        }
      })}
    </div>
  );
};

export default ItemsList;
