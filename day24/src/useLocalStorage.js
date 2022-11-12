import React, { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorage] = useState(()=>{
        try{
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue; 
        }catch(error){
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value)=>{
        setLocalStorage(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [localStorageValue,setValue];
}
