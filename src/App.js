import React, { useState } from 'react';
import menu from './data'
import Categories from './Components/Categories';
import Menu from './Components/Menu';


const allCategories = [ 'all' , ...new Set( menu.map( item => item.category))]

function App() {

  const [ allMenu , setAllMenu ] = useState(menu)
  const [ categories, setGategories ] = useState (allCategories);

  const filterMenus = (category) => {
    if( category === 'all') {
      setAllMenu(menu)
      return
    }
    let filterdMenus = menu.filter( item => item.category === category)
    setAllMenu(filterdMenus)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories = {categories} filterMenus={filterMenus} />
        <Menu allMenu = {allMenu} />
      </section>
    </main>
  );
}

export default App;
