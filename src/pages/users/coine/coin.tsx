import { useParams } from "react-router-dom";

function coin() {
  const { params } = useParams();
  return <h1>Coin : {params}</h1>;
}
export default coin;
