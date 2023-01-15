import React, {useState} from "react";
import styled from "styled-components";

const InputStyle = styled.div`
	display: flex;
	justify-content: center;
`;

const Input = styled.input`
	width: 248px;
	height: 40px;
	float: left;
	margin: 25px;
	box-sizing: border-box;
	border: 1px solid #cacaca;
	border-radius: 14px;
	outline: none;
	font-size: 16px;
	font-weight: 400;
	padding-left: 15px;
	color: #112d4e;
	&:focus {
		border: 3px solid #3f72af;
	}
`;

const TextStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 3rem;
	font-weight: bold;
	z-index: 100;
	color: ${({textColor}) => textColor};
`;

function ImgText({textColor}) {
	const [text, setText] = useState("제목을 입력하세요");

	const onChange = (e) => {
		setText(e.target.value);
	};
	const onClick = (e) => {
		setText("");
	};

	return (
		<>
			<InputStyle>
				<Input onClick={onClick} onChange={onChange} value={text} placeholder={"제목을 입력하세요"}></Input>
			</InputStyle>
			<TextStyle textColor={textColor}>{text}</TextStyle>
		</>
	);
}

export default ImgText;
