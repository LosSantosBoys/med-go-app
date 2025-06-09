import { useState } from "react";

export function useLogin() {
  const [remindMe, setRemindMe] = useState(false);

  function handleChangeRemindMe(): void {
    setRemindMe(!remindMe);
  }

  return {
    remindMe,
    handleChangeRemindMe
  };
}