import { MapContainer, TileLayer, Circle } from "react-leaflet";

export default function MapComp(props) {
	const { Lat, Lan, ready } = props;
	return ready ? (
		<MapContainer center={[Lat, Lan]} zoom={4}>
			<Circle center={[Lat, Lan]} color="red" fillColor="red" radius={100000} />

			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
		</MapContainer>
	) : (
		<h2 className="leaflet-container">Loading...</h2>
	);
}
