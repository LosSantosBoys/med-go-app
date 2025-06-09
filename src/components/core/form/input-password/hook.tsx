import { useState } from "react";

export function useInputPassword() {
  const [visibilite, setVisibility] = useState(false);

  function handleChangeVisibility(): void {
    setVisibility(!visibilite);
  }

  return {
    visibilite,
    handleChangeVisibility
  };
}