import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => { // page title element text change
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }

  // affected by title changed
  useEffect(() => {
    updateTitle()
  }, [title])

  return setTitle;
}