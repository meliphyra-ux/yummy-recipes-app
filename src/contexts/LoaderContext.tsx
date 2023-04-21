import { FC, ReactNode, createContext, useState } from 'react';

type LoaderContextProps = {
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
};

type LoaderProviderProps = {
  children: ReactNode;
};

const INITIAL_VALUE: LoaderContextProps = {
  isLoading: false,
  setIsLoading: () => {},
};

export const LoaderContext = createContext(INITIAL_VALUE);

const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading };

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

export default LoaderProvider;
