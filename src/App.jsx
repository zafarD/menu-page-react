import { useState } from "react";
import menu from './data'
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";


const allCategory = ["all", ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategory)

  const filterCategory = (category) => {
    if(category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu">
      <Title title="our menu" />
      <Categories categories={categories} filterCategory={filterCategory}/>
      <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;
