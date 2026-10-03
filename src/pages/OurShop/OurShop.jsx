import BlurrySectionTItle from "./../../components/BlurrySectionTitle/BlurrySectionTItle";
import coverImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTab from "../../components/OrderTab/OrderTab";
import { useParams } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const OurShop = () => {
  const [menu, loading] = useMenu();
  const { category } = useParams();
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks", "offered"];
  const initialTabIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  console.log(initialTabIndex);

  if (loading) {
    return <p>Loading...</p>;
  }

  // const [defaultIndex, setDefaultIndex] = useState(0);
  // const { category } = useParams();
  // const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  // const initialIndex = categories.indexOf(category);

  const salads = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const desserts = menu?.filter((item) => item.category === "dessert");
  const soups = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");

  return (
    <div>
      <title>Bistro Boss Restaurant | Shop</title>

      {/* Section Title */}
      <BlurrySectionTItle imgURL={coverImg} title="Our Shop" desc="Would you like to try a dish?" />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="py-10">
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
