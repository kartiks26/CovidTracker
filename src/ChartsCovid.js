import { Pie } from "react-chartjs-2";

import React from "react";

function ChartsCovid(props) {
	const { ActiveCases, Deaths, Confirmed, state } = props;
	const chartData = {
		labels: ["Active Cases", "Confirmed", "Deaths"],
		datasets: [
			{
				label: state,
				data: [ActiveCases, Confirmed, Deaths],
			},
		],

		borderWidth: 1,
	};
	return (
		<Pie
			id="myChart"
			data={chartData}
			options={{
				responsive: true,
				maintainAspectRatio: false,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(0,255,0,0.1)",
					"rgba(0, 0, 0, 1)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(0,0,0, 1)",
				],
				borderWidth: 1,
			}}
		/>
	);
}

export default ChartsCovid;
