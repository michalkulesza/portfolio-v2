import React from "react";
import { Main } from "./Footer.styled";
import { SectionTemplate } from "../../templates";
import { Button, Subtitle, Title } from "../../components";

import { footerData } from "../../fixtures/footer";
import { Colors } from "../../styles/snippets";

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<Main style={{ backgroundColor: Colors.lightGrey }}>
			<SectionTemplate>
				<Subtitle>{footerData.subtitle}</Subtitle>
				<Title>{footerData.title}</Title>
				<p style={{ textAlign: "center", marginBottom: "2rem" }}>{footerData.text}</p>
				<Button url={`mailto:${footerData.email}`} color="purple" textColor="light" scaleOnHover large>
					{footerData.email}
				</Button>
				<p style={{ fontSize: "1rem", textAlign: "center", marginTop: "2rem", color: Colors.grey }}>
					{footerData.footer}
				</p>
			</SectionTemplate>
		</Main>
	);
};

export default Footer;
