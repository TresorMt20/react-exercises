import React from 'react'
import mealImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header() {
    return (
        <>
           <header className={classes.header}>
               <h1>ReactMeals</h1>
               <HeaderCartButton/>
           </header>
           <div>
               <img src={mealImage}/>
           </div>
        </>
    )
}
