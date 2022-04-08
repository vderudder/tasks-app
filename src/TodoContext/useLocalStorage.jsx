import React, {useEffect, useState} from "react";

export function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          // Get local storage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          // Check if local storage is empty
          if (!localStorageItem) {
            // If empty, set local storage to initial value
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            // Set parsedItem to show initial value
            parsedItem = initialValue;
          }
          else {
            // If full, brings items from local storage to show
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
  
          setLoading(false);
        }
        catch (error) {
          setError(error);
  
        }
      }, 1000);
    });
  
  
    // Save changes to local storage
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }
      catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  }