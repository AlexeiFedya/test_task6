import React, {useState, useCallback, useEffect,} from 'react';
import {useHttp} from '../../hooks/http.hooks';

import {Loader} from '../loader/loader'
import {AddEmployeeForm} from './add-employee/add-employee';
import {EmployeeItem} from './employee-item/employee-item';

export const EmployeeList = () => {

    const {loading, request} = useHttp()

    const[information, setInformation] = useState({ employee: []})
    const {employee} = information;

    const getProfile = useCallback(async () => {
        try {
            const data = await request('https://reqres.in/api/users?per_page=12', 'GET')
            setInformation({ employee: data.data})
        } catch (e) {}
    }, [request])

    useEffect (()=> {
        getProfile()
    }, [getProfile])

    const createItem = (first_name) => {
        return {
            id: Math.floor(Math.random() * 99999),
            first_name
        }
    }

    const onAddItem = (text) => {
        const newItem = createItem(text)
    
        setInformation(({employee})=> {
            const newArr = [
                ...employee, 
                newItem 
            ];
            return {
                employee: newArr 
            };
        });
    };

    const handlerDeletEmployee = (id) => {
        setInformation(({employee})=> {

            const idx = employee.findIndex((el)=> el.id === id)

            const newArray = [
                ...employee.slice(0, idx), 
                ...employee.slice(idx + 1)];
        
            return {
                employee: newArray
            };
        })
    }


    return (
        <>
        {
            (!loading ) ? 
            <div>
                <AddEmployeeForm onItemAdd={onAddItem}/> 
                <EmployeeItem employee={employee} onDeleted={handlerDeletEmployee}/> 
            </div>    
                : <Loader/>
        } 
        </>
    )
}