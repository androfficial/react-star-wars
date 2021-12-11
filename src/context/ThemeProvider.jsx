/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import changeCssVariables from '@services/changeCssVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const items = useSelector(({ favorites }) => favorites.items);
  const [theme, setTheme] = useState(null);

  const personFavorites = (personId) =>
    items.some((obj) => obj.personId === personId);

  const handleChangeTheme = (name) => {
    setTheme(name);
    changeCssVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change: handleChangeTheme,
        personFavorites,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
