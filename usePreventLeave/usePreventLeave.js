
export const usePreventLeave = (onLeaving) => {

    const listener = (e) => {
      e.preventDefault();
      // 이거 안넣어주면 작동 안함
      e.returnValue = "";
    }
    const enablePrevent = () => {
      window.addEventListener('beforeunload', listener)
    }
    const disablePrevent = () => {
      window.removeEventListener('beforeunload', listener)
    }
  
    return { enablePrevent, disablePrevent };
  }
  