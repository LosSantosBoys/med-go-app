import { router } from "expo-router";
import { useState } from "react";

export function useCreateaccount() {
  const [agreePolitics, setAgreePolitics] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  function handleChangeAgreePolitics(): void {
    setAgreePolitics(!agreePolitics);
  }

  function handleChangeAgreeTerms(): void {
    setAgreeTerms(!agreeTerms);
  }

  function handleClickSumit(): void {
    router.push('/create-account-data');
  }

  return {
    agreePolitics,
    agreeTerms,
    handleChangeAgreePolitics,
    handleChangeAgreeTerms,
    handleClickSumit
  };
}