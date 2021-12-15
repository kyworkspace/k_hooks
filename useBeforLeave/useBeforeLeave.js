import { useEffect } from "react";

//마우스가 페이지를 벗어나는 경우
export const useBeforeLeave=(onBefore)=>{
  
    const handle = (event)=>{
      const {clientY} = event;
      if(clientY <= 0){
        onBefore();
      }
      
    }
    useEffect(() => {
      if(typeof onBefore !== "function"){
        return
      }
      
      document.addEventListener('mouseleave',handle);
      return ()=>{
        document.removeEventListener('mouseleave',handle)
      }
    }, [])
  }