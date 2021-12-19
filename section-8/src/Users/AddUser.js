import React ,{useState}from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrModal from '../UI/ErrModal';
import classes from './AddUser.module.css'

export default function AddUser(props) {

    const [inputusername, setinputusername ] = useState('');
    const [inputage, setage ] = useState('');

    const initialError = {
        title:'not correct',
        message:'plz put the valid age and name'
    }
    const [error, setError] = useState(false);

    const addUserHandle= (event) => {
        event.preventDefault();

        if(inputusername.trim().length === 0 || inputage.trim().length === 0) {
            setError({
                title:'not correct',
                message:'plz put the valid age and name'
            });
            return;
        }

        props.onAdd(inputusername,inputage);

        setinputusername('');
        setage('');
 
    }

    const onChangeUserNameFunc = (event) =>
    {
        setinputusername( event.target.value);
    }

    const onChangeUserAgeFunc = (event) =>
    {
        setage( event.target.value);
    }


    return (
        <div>
            { error && <ErrModal title="error occured" message="something went wrong"/>}
            
            <Card myclassName={classes.input}>
                <form onSubmit={addUserHandle}>
                <label htmlFor="username">Username</label>
                <input  type="text" value={inputusername} onChange={onChangeUserNameFunc}/>

                <label htmlFor="age">Age</label>
                <input  type="number" value={inputage} onChange={onChangeUserAgeFunc}/>

                <Button   type="submit">Add User</Button>
                </form>

            </Card>

        </div>
    )
}
