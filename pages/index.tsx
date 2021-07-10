import React from "react";
import { useQuery } from "@apollo/react-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";
import CryptoTable from "../components/Index/CryptoTable";
import { GET_CRYPTOS } from "../utils/cryptoPrices";

const Index = () => {
	const { data, loading, error } = useQuery(GET_CRYPTOS, {
		fetchPolicy: "network-only",
		pollInterval: 5000,
	});

	return (
		<div>
			<h1>CryptoTable</h1>
			<Divider />
			{error ? <p>error fetching crypto data</p> : null}
			{loading ? (
				<LinearProgress color="primary" />
			) : (
				<CryptoTable cryptos={data.getCryptos} />
			)}
		</div>
	)
}

export default Index;