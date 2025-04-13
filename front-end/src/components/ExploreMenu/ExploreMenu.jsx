import React, { useRef } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    const menuRef = useRef(null);

    const scroll = (direction) => {
        const { current } = menuRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
                Discover a variety of freshly brewed coffees, delightful pastries, and savory snacks crafted to satisfy your cravings.
            </p>
            
            <div className="explore-menu-list" ref={menuRef}>
                {menu_list.map((item, index) => (
                    <div 
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                        key={index} 
                        className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
                    >
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>

            {/* Flechas de navegación */}
            <button className="menu-arrow left" onClick={() => scroll('left')}>❮</button>
            <button className="menu-arrow right" onClick={() => scroll('right')}>❯</button>
            <hr />
        </div>
    );
};

export default ExploreMenu;