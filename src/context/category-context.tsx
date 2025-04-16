import { createContext, ReactNode, useContext, useState } from "react";

type CategoriesContextType = {
  currentCategory: string | undefined;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export function CategoriesStateContext({ children }: { children: ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(
    "All"
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentCategory(e.target.value);
  }

  return (
    <CategoriesContext.Provider
      value={{ currentCategory, setCurrentCategory, handleChange }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategoryState = () => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("No Context Provided");
  }

  return context;
};