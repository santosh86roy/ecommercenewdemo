import React, { useState } from "react";
import Product from "../components/Product";
import { Images } from "../Constants/imageConstant";
import { orderBy } from "lodash";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dell Laptop 15.6 inch",
      imageUrl: Images.dell,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 55459,
    },
    {
      id: 2,
      name: "Lenovo Laptop 15.6 inch",
      imageUrl: Images.lenovo,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 48459,
    },
    {
      id: 3,
      name: "MSI Laptop 15.6 inch",
      imageUrl: Images.msi,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 65459,
    },
    {
      id: 4,
      name: "Hp Laptop 15.6 inch",
      imageUrl: Images.hp,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 52459,
    },
  ]);

  const [selectedSortByValue, setSelectedSortByValue] = useState("");

  const handleDropdownChange = (event) => {
    const newValue = event.target.value;
    setSelectedSortByValue(newValue);
    sortBy(newValue);
  };

  const sortBy = (order) => {
    console.log(order);
    const sortedProducts = orderBy(products, ["price"], order);
    console.log(sortedProducts);
    setProducts(sortedProducts);
  };

  return (
    <>
      <div className="px-8 py-6">
        <div className="flex justify-end">
          <label htmlFor="dropdown" className="font-medium">
            Sort By
          </label>
          <select
            id="dropdown"
            value={selectedSortByValue}
            onChange={handleDropdownChange}
          >
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-3">
          {products.map((product) => {
            return (
              <div className="p-4" key={product.id}>
                <Product product={product}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
