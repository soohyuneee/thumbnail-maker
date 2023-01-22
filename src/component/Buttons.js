import React, {useState} from "react";
import styled, {css} from "styled-components";
import Text from "./Text";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";

const Container = styled.div`
	height: 402px;
	width: 768px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	${({color, image, gradient}) => {
		return css`
			background-color: ${color};
			background-image: url(${image});
			background: ${gradient};
		`;
	}}
`;

const Button = styled.button`
	width: 150px;
	height: 40px;
	margin-left: 25px;
	float: left;
	border: 1px solid #cacaca;
	border-radius: 14px;
	font-size: 16px;
	font-weight: bold;
	background-color: white;
	color: #112d4e;
	transition: 0.5s;
	&:hover {
		background-color: #dbe2ef;
		transition: 0.5s;
		border: none;
		cursor: pointer;
	}
`;

const ButtonStyle = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 8%;
	left: 25%;
`;

function getRandomImage() {
	const backgroundArr = [img1, img2, img3, img4, img5];
	const randomIndex = Math.floor(Math.random() * backgroundArr.length);
	return backgroundArr[randomIndex];
}

function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomGradient() {
	const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
	const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
	return `linear-gradient(to right,${color1}, ${color2})`;
}

function Buttons() {
	const [color, setColor] = useState("#dbe2ef");
	const [image, setImage] = useState();
	const [gradient, setGradient] = useState();
	const [textColor, setTextColor] = useState("#112d4e");

	const onRandomColorClick = () => {
		setColor(getRandomColor());
		setGradient("");
		setImage("");
	};

	const onRandomImageClick = () => {
		setImage(getRandomImage());
		setColor("");
		setGradient("");
	};

	const onRandomgradientClick = () => {
		setGradient(getRandomGradient());
		setColor("");
		setImage("");
	};

	const onRandomTextClick = () => {
		setTextColor(getRandomColor());
	};

	return (
		<>
			<Container color={color} image={image} gradient={gradient} />
			<Text textColor={textColor} setTextColor={setTextColor} />
			<ButtonStyle>
				<Button onClick={onRandomColorClick}>랜덤 단색</Button>
				<Button onClick={onRandomgradientClick}>랜덤 그라이언트</Button>
				<Button onClick={onRandomImageClick}>랜덤 이미지</Button>
				<Button onClick={onRandomTextClick}>랜덤 텍스트 색상</Button>
			</ButtonStyle>
		</>
	);
}

export default Buttons;
