"use client";
import { useEffect, useState } from "react";

const ImageChanger = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imageSources = ["pt1.svg", "pt2.svg", "pt3.svg"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative">
			<img
				src={imageSources[currentIndex]}
				alt="Changing Image"
				className="animate-fadeInOut z-10 mt-10"
			/>
		</div>
	);
};

export default ImageChanger;
