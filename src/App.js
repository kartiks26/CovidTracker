import "./App.css";

import { useEffect, useState } from "react";
import ChartsCovid from "./ChartsCovid";
import MapComp from "./Map";
import ImageSlider from "./Carousel/imageSlider";

import Logo from "./CovidTrackerLogo.svg";
function App() {
	var [FinalDate, setFinalDate] = useState("2021-06-25");
	const setDate = () => {
		const D = new Date();
		var date = D.getUTCDate();
		var Month = D.getUTCMonth() + 1;
		var Year = D.getUTCFullYear();
		if (date < 10) {
			date = "0" + date;
		}
		if (Month < 10) {
			Month = "0" + Month;
		}
		// 2021-06-25
		setFinalDate(Year + "-" + Month + "-" + date);
	};
	console.log(FinalDate);

	const [Data, setData] = useState([]);
	const [state, setstate] = useState("Maharashtra");
	const [stateData, setstateData] = useState({});
	const [ready, setReady] = useState(false);
	useEffect(() => {
		fetch("https://api.covid19api.com/live/country/india")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
		setDate();
	}, []);
	console.log(Data);
	const SetStateData = () => {
		for (let i = 2800; i < Data.length; i++) {
			if (Data[i].Province === state && Data[i].Date.includes(FinalDate)) {
				setstateData(Data[i]);
				setReady(true);

				break;
			}
		}
		console.log(stateData);
	};

	return (
		<div className="App">
			<header className="mainPage">
				<div className="navbar">
					<img src={Logo} alt="logo" />
					<h1>Covid Tracker</h1>
					<ul>
						<li> Home </li>

						<li> Help </li>
						<li> About </li>
					</ul>
				</div>
				<div className="SearchBar">
					<input
						list="states"
						type="text"
						placeholder={state}
						onChange={(e) => {
							setstate(e.target.value);
						}}
					/>

					<datalist id="states" className="dropdown">
						<option value="Maharashtra" />
						<option value="Delhi" />
						<option value="Karnataka" />
						<option value="Tamil Nadu" />
						<option value="Gujarat" />
						<option value="Madhya Pradesh" />
						<option value="Rajasthan" />
						<option value="Uttar Pradesh" />
						<option value="West Bengal" />
						<option value="Bihar" />
						<option value="Odisha" />
						<option value="Jharkhand" />
						<option value="Andhra Pradesh" />
						<option value="Telangana" />
						<option value="Kerala" />
						<option value="Assam" />
						<option value="Jammu and Kashmir" />
						<option value="Chandigarh" />
						<option value="Punjab" />
						<option value="Haryana" />
						<option value="Uttarakhand" />
						<option value="Himachal Pradesh" />
						<option value="Goa" />
						<option value="Manipur" />
						<option value="Tripura" />
						<option value="Meghalaya" />
						<option value="Nagaland" />
						<option value="Arunachal Pradesh" />
						<option value="Mizoram" />
						<option value="Sikkim" />
						<option value="Chhattisgarh" />
						<option value="Andaman and Nicobar Islands" />
						<option value="Dadra and Nagar Haveli" />
						<option value="Daman and Diu" />
						<option value="Lakshadweep" />
						<option value="Puducherry" />
					</datalist>
					<button
						onClick={() => {
							console.log("clicked", state);
							SetStateData();
						}}
					>
						GET
					</button>
				</div>
				<div className="indicators">
					<div className="indicator">
						<h6>State</h6>
						<h6>{state}</h6>
					</div>
					<div className="indicator">
						<h6>Active Cases</h6>
						<h6>{stateData.Active}</h6>
					</div>
					<div className="indicator">
						<h6>Deaths</h6>
						<h6>{stateData.Deaths}</h6>
					</div>
					<div className="indicator">
						<h6>Confirmed</h6>
						<h6>{stateData.Confirmed}</h6>
					</div>
				</div>
			</header>
			<div classname="chartAndGraph">
				<div className="okk">
					<div className="PieChart">
						<h1>Graphical Representation</h1>

						<ChartsCovid
							ActiveCases={stateData.Active}
							Deaths={stateData.Deaths}
							Confirmed={stateData.Confirmed}
							state={state}
						/>
					</div>
				</div>
				<div className="okk2">
					<div className="mapContainer">
						<h1>Map Representation</h1>
						<MapComp Lat={stateData.Lat} Lan={stateData.Lon} ready={ready} />
					</div>
				</div>
			</div>
			<div className="Carousel">
				<ImageSlider />
			</div>
		</div>
	);
}

export default App;
