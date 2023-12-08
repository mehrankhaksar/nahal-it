import { products } from "@/constants/list";

import ProductDetailsPage from "@/components/templates/ProductDetailsPage";

export default function ProductDetails({ params: { id } }) {
  const product = products.find((item) => item.id === id);

  return <ProductDetailsPage {...product} />;
}
