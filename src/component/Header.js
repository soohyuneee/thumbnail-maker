import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
	font-size: 30px;
	padding-top: 25px;
	color: #112d4e;
	text-align: center;
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
