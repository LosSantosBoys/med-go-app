import { useMemo, useState } from "react";
import { mask } from "react-native-mask-text";

export function useInputPhoneNumber() {
  const [rawValue, setRawValue] = useState("");
  
  const handleChange = (text: string) => {
    const numeric = text.replace(/\D/g, "");
    setRawValue(numeric);
  };

  const value = useMemo(() => mask(rawValue, "(99) 99999-9999"), [rawValue]);

  return {
    value,
    handleChange
  }
}