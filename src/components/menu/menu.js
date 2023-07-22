import React, { useState } from 'react'
import Menuapi from '../../menuApi/menuApi'
import MenuCard from './card'
import './menu.css'
const Menu = () => {

    const [menuData, setMenuData] = useState(Menuapi);

    const filteritem =(category) =>{
        const filteredList = Menuapi.filter((list) =>{
            return list.category===category;
        });
        setMenuData(filteredList);
    }

    return (
        <>
        <div className='btn-group'>
            <button className='button' onClick={() =>setMenuData(Menuapi) }>All</button>

            <button className='button' onClick={() => filteritem("Breakfast")}>Breakfast</button>

            <button className='button' onClick={() => filteritem("Lunch")}>Lunch</button>

            <button className='button' onClick={() => filteritem("Dinner")}>Breakfast</button>
        </div>
        <MenuCard menuData = {menuData}/>
        </>
    );

}
export default Menu;