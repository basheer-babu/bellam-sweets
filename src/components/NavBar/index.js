import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../common/Logo";
import "./main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			{/* <h3>LOGO</h3> */}
			<Logo/>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/#">services</a>
				{/* <a href="/#"></a> */}
				<a href="/#">About us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
