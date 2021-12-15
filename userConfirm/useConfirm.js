export const useConfirm=(message="", onConfirm, onCancel)=>{

  if(!onConfirm || typeof onConfirm !== 'function') return;
  
  if(onCancel && typeof onCancel !== 'function') return;

  const conformAction=()=>{
    if(window.confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return conformAction;
}
