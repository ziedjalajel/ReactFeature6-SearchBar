import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import CookieDetail from "./components/CookieDetail";
import CookieList from "./components/CookieList";

// Data
import cookies from "./cookies";

// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
} from "./styles";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [cookie, setCookie] = useState(null);
  const [_cookies, setCookies] = useState(cookies);

  const deleteCookie = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== +cookieId);
    setCookies(updatedCookies);
    setCookie(null);
  };

  const selectCookie = (cookieId) => {
    const selectedCookie = cookies.find((cookie) => cookie.id === cookieId);
    setCookie(selectedCookie);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = () => {
    if (cookie)
      return <CookieDetail cookie={cookie} deleteCookie={deleteCookie} />;

    return (
      <CookieList
        cookies={_cookies}
        selectCookie={selectCookie}
        deleteCookie={deleteCookie}
      />
    );
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <>
        <Title>Cookies and Beyond</Title>
        <Description>Where cookie maniacs gather</Description>
        <ShopImage
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
        />
      </>
      {setView()}
    </ThemeProvider>
  );
}

export default App;
