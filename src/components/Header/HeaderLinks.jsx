/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					target="_blank"
					color="transparent"
					className={classes.navLink}
				>
					Contacto
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					target="_blank"
					color="transparent"
					className={classes.navLink}
				>
					Localización
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					target="_blank"
					color="transparent"
					className={classes.navLink}
				>
					Planes
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-twitter"
					title="Sígueme en Twitter"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="#"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-twitter"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-facebook"
					title="Sígueme en Facebook"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.facebook.com/amaia.etxeberriaarrieta"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-facebook"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="Sígueme en Instagram"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.instagram.com/amayuskii"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-instagram"} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
