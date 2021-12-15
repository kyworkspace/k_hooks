/**
 * This is not Hook. but excute like hook
 * It use MDN Notification system
 * @param1 Notification Title
 * @param2 Notification Option (find MDN Notification options)
 * **/
export const useNotification=(title,options)=>{
    //if Notification aren't in window . it return
    if(!("Notification" in window)){
      return
    }
  
    const fireNotification=()=>{
        // if you doesn't have Notification permission, it request
      if(Notification.permission !== "granted"){
        Notification.requestPermission().then(permission=>{
            //after permission granted..
          if(permission === "granted"){
            new Notification(title,options)
          }else{
            return;
          }
        });
      }else{
        // or shoot Notification
        new Notification(title,options)
      }
    }
  
    return fireNotification;
  }
  