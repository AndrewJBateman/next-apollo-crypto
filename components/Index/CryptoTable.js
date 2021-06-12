import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { formatCurrency } from "../../utils/filters";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const CryptoTable = ({ cryptos }) => {
	const classes = useStyles();

	return (
		<>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="caption table">
					<caption>A table of crypto currency prices</caption>
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Symbol</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Market Cap.</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cryptos.map((row) => (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.rank}
								</TableCell>
								<TableCell align="right">
									<Avatar alt="image of crypto" src={row.logo_url} />
									{row.name}
								</TableCell>
								<TableCell align="right">{row.currency}</TableCell>
								<TableCell align="right">{formatCurrency(row.price)}</TableCell>
								<TableCell align="right">
									{formatCurrency(row.market_cap)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default CryptoTable;