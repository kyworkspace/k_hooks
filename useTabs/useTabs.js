import { useState } from "react";

/**
 * @CustomHook
 * @param1 tab index that you want to show 
 * @param2 All Tab Array
 * @returns1 currentItem : current Tab
 * @returns2 changeItem : tab index change method
 * **/
export const useTabs=(initialTab, allTabs)=>{
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    //when alltab is empty or it's type is not Array this method will be returned
    if(!allTabs || !Array.isArray(allTabs)){
      return; 
    }
  
    return {
      currentItem : allTabs[currentIndex],
      changeItem : setCurrentIndex
    }
  }