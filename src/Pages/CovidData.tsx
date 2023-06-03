import Card from "../components/Card";
import LineChart from "../components/LineChart";
import Map from "../components/Map";

type Props = {};

const CovidData = (props: Props) => {
  return (
    <div className="space-y-10">
      <Card title="Graph showing COVID cases fluctuations from 1/22/20 to 3/9/23">
        <LineChart />
      </Card>
      <Card title="Map showing COVID data for each country. Click on any of the marker to view information.">
        <Map />
      </Card>
    </div>
  );
};

export default CovidData;
