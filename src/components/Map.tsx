import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CountryData } from "../utils/types";
import { useQuery } from "react-query";
import L from "leaflet";
import { formatNumberWithCommas } from "../utils/helpers";
let marker = require("../assets/images/marker.png");

// Change Leaflet marker icons
const myMarker = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [12, 24],
});

type Props = {};

const fetchCountriesData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

const Map = (props: Props) => {
  const { isLoading, isError, data } = useQuery(
    "covidDataByCountry",
    fetchCountriesData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((country: CountryData) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={myMarker}
        >
          <Popup>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{country.country}</h2>
              <p className="p-0 m-0">
                Total Active Cases:{" "}
                <b className="text-gray-600">
                  {formatNumberWithCommas(country.active)}
                </b>
              </p>
              <p className="p-0 m-0">
                Total Recovered Cases:{" "}
                <b className="text-emerald-600">
                  {formatNumberWithCommas(country.recovered)}
                </b>
              </p>
              <p className="p-0 m-0">
                Total Deaths:{" "}
                <b className="text-red-600">
                  {formatNumberWithCommas(country.deaths)}
                </b>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
