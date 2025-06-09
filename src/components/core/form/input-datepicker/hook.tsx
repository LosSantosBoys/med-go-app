import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useMemo, useState } from "react";

export function useInputDatepicker() {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (_: any, selectedDate?: Date): void => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  function handleEnable(): void {
    setShowPicker(true);
  }

  const value = useMemo(() => {
    return date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : ""
  }, [date]);

  return {
    showPicker,
    handleChange,
    value,
    date,
    handleEnable
  }
}