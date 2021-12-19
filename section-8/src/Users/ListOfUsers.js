import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'


export default function ListOfUsers(props) {
    return (
        <Card className={classes.users}>
            <ul> 
                
               { props.users.map( (user) =>( 
               <li key={user.id}>
                   {user.n}   ({user.a} yr old) 
               </li>
               ))} 
            </ul> 
         </Card>
    )   
}
