import { useFetch } from "../fetchData";

const DeliveryList = () => {
  let [loading, allDeliveries, error] = useFetch("./data/deliveries.json");
  if (loading) return <h1>Loading</h1>;
  if (error) return <pre>{error}</pre>;

  let { deliveries } = allDeliveries;

  return (
    <ul>
      {deliveries &&
        deliveries.map((delivery) => (
          <li key={delivery.deliveryId}>
            {delivery.deliveryId} | {delivery.originLocationId} |{" "}
            {delivery.destinationLocationId} | {delivery.resourceIds.length}
          </li>
        ))}
    </ul>
  );
};

export default DeliveryList;
