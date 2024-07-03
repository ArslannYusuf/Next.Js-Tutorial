import DashboardMenu from "@/components/dashboard-menu";
import React from "react";
import { Container } from "react-bootstrap";


export const metadata = {
	title: {
		absolute: "Dashboard ",
	},
	description: "Our company supports ...",
};


const Layout = ({ children }) => {
	return (
		<>
			<DashboardMenu />
			<Container className="flex-grow-1">{children}</Container>
		</>
	);
};

export default Layout;