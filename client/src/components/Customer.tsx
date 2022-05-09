import React, {useEffect, useState} from 'react';

import {ICustomerObject} from "../interface/ICustomerObject";
const Customer:React.FC=():JSX.Element=> {
    const [customers,setCustomers]=useState<ICustomerObject[]>([]);
    const x=()=>{
        fetch('http://localhost:5000/api/customers').then(res=>res.json().then(r=>{console.log(r);setCustomers(r)}))
    }
    useEffect(()=>{x()},[]);
    return (
        <div>
            <button onClick={x}>fff</button>
            <h1>Clients Name</h1>
            <h1 className=""></h1>
            {customers.map((customer)=><div key={customer.id}>Name:{customer.firstName} {customer.lastName}</div>)}
        </div>
    );
}

export default Customer;
