import { Masker } from "@/src/utils";
import { useMemo, useState } from "react";
import { UseInputCpfProps } from "./props";

export function useInputCpf({ onChangeText }: UseInputCpfProps) {
  const [rawValue, setRawValue] = useState("");

  const handleChange = (text: string) => {
    const numeric = text.replace(/\D/g, "")

    if (onChangeText) {
      onChangeText(numeric)
    }

    setRawValue(numeric)
  }

  const value = useMemo(() => Masker.cpf(rawValue), [rawValue]);

  return {
    handleChange,
    value
  }
}