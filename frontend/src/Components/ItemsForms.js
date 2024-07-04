import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    const [first_name, setfirst_name] = useState('');
    const [middle_name, setmiddle_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    useEffect(() => {
        if (item) {
            setfirst_name(item.first_name);
            setmiddle_name(item.middle_name);
            setlast_name(item.last_name);
            setaddress(setaddress);
            setemail(setemail);
            setphone(setphone);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { first_name, middle_name, last_name , address, email, phone};
        try {    
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {    
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
       <form onSubmit={handleSubmit}>
           <div>
               <label>Firstname:</label>
               <input type="text" value={first_name} onChange={(e) => setfirst_name(e.target.value)}/>
            </div>
            <div>
               <label>Middlename:</label>
               <input typ="text" value={middle_name} onChange={(e) => setmiddle_name(e.target.value)}/>
            </div>
            <div>
            <label>Lastname:</label>
            <input type='text' value={last_name} onChange={(e) => setlast_name(e.target.value)} />
            </div>
            <div>
               <label>Address:</label>
               <input type="text" value={address} onChange={(e) => setaddress(e.target.value)}/>
            </div>
            <div>
               <label>Email:</label>
               <input type="text" value={email} onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div>
               <label>Phone:</label>
               <input type="text" value={phone} onChange={(e) => setphone(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );

 };

 export default ItemForm;