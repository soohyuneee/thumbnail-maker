import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
	font-size: 30px;
	padding-top: 5vh;
	color: #112d4e;
	text-align: center;
	position: relative;
`;

function Header() {
	return (
		<>
			<HeaderStyle>
				<h1>Thumbnail Maker</h1>
			</HeaderStyle>
		</>
	);
}

export default Header;
