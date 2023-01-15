import React from "react";
import Header from "./component/Header";
import {createGlobalStyle} from "styled-components";
import Buttons from "./component/Buttons";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F9F7F7;
		margin: 0;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Buttons />
		</>
	);
}

export default App;
