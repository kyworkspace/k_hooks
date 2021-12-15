import { useRef } from "react";

export const useFullScreen = (callback) => {
    //target for FullScreen
    const element = useRef();
  
    //inner callback
    const runCb = isFull=>{
      if(callback && typeof callback ==="function"){
        //when you want know just flag value for fullscreen
        callback(isFull);
      }
    }
  
    //Into the Fullscreen
    const triggerFullScreen = () => {
      if (element.current) {
        if(element.current.requestFullscreen){
          element.current.requestFullscreen();
        }else if(element.current.mozRequestFullScreen){
          element.current.mozRequestFullScreen();
        }else if(element.current.webkitRequestFullScreen){
          element.current.webkitRequestFullScreen();
        }else if(element.current.msRequestFullScreen){
          element.current.msRequestFullScreen();
        }
        runCb(true);
      }
    }
      
    //Exit from Full screen
    const exitFullScreen = () => {
      
      //when there are something about full screen element?
      if(document.fullscreenElement){
        //exit from full screen
        if(document.exitFullscreen){
          document.exitFullscreen(); 
        }else if(document.mozCancelFullScreen){
          document.mozCancelFullScreen();
        }else if(document.webkitExitFullScreen){
          document.webkitExitFullScreen();
        }else if(document.msExitFullScreen){
          document.msExitFullScreen();
        }
        runCb(false);
      }
    }
    
    return { element, triggerFullScreen, exitFullScreen }
  }