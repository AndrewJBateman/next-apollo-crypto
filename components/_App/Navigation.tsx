import React from "React";
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Link from "next/link";

const Navigation = () => {
	return (
		<PopupState variant="popover" popupId="demo-popup-menu">
			{(popupState) => (
				<React.Fragment>
					<Button
						variant="contained"
						color="primary"
						{...bindTrigger(popupState)}
					>
						Open Menu
					</Button>
					<Menu {...bindMenu(popupState)}>
						<Container>
							<Link href="/">
								<MenuItem onClick={popupState.close}>Cryptocurrency List</MenuItem>
							</Link>
						</Container>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
};

export default Navigation;