import React from "react";
import Header from "./component/Header";
import {createGlobalStyle} from "styled-components";
import RandomColor from "./component/RandomColor";

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
			<RandomColor />
		</>
	);
}

export default App;
