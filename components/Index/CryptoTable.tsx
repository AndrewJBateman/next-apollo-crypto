import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { formatCurrency } from '../../utils/filters';

const useStyles = makeStyles({
	table: {
		minWidth: 550,
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
							<TableCell>Rank</TableCell>
              <TableCell>Logo</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Symbol</TableCell>
							<TableCell align="right">Price</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cryptos.map((row) => (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.rank}
								</TableCell>
                <TableCell>
									<Avatar alt="image of crypto" src={row.logo_url} className={classes.small} />
								</TableCell>
								<TableCell align="left">
									{row.name}
								</TableCell>
                <TableCell align="left">
                  {row.currency}
								</TableCell>
								<TableCell align="right">{formatCurrency(row.price)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default CryptoTable;
