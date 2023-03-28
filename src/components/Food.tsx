import React from "react";
import { DATA } from "@/utils";
const FILTER_TYPE = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Pizza",
    value: "pizza",
  },
  {
    name: "Burgers",
    value: "burger",
  },
  {
    name: "Salads",
    value: "salad",
  },
  {
    name: "Chicken",
    value: "chicken",
  },
];
export const Food = () => {
  const [foods, setFoods] = React.useState(DATA);

  //   Filter Type burgers/pizza/etc
  const filterType = (category: string) => {
    if (category === "all") {
      setFoods(DATA);
      return;
    }
    setFoods(
      DATA.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price: any) => {
    setFoods(
      DATA.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated Menu
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex justfiy-between flex-wrap">
            {FILTER_TYPE.map((item, index) => (
              <button
                key={index}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                onClick={() => filterType(item.value)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
