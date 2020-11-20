import React from "react";
import { Main } from "./Footer.styled";
import { SectionTemplate } from "../../templates";
import { Button, Subtitle, Title } from "../../components";

import { footerData } from "../../fixtures/footer";
import { Colors } from "../../styles/snippets";
import { CONTACT } from "../../constants/routes";

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<Main id={CONTACT}>
			<SectionTemplate style={{ marginTop: 0, marginBottom: 0 }}>
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
