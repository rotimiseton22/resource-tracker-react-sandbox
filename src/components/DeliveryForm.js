import { useState, useEffect } from "react";

const DeliveryForm = () => {
  let [allLocations, setAllLocations] = useState([]);
  let [resourcesAtLocation, setResourcesAtLocation] = useState([]);
  let [deliveryOrigin, setDeliveryOrigin] = useState("");
  let [deliveryDestination, setDeliveryDestination] = useState("");

  const getLocations = async () => {
    let locations_data = await fetch("./data/locations.json");
    let response = await locations_data.json();
    setAllLocations(response.locations);
  };

  const getResources = async () => {
    let resources_data = await fetch("./data/resources.json");
    let response = await resources_data.json();
    setResourcesAtLocation(response.resources);
  };

  useEffect(() => {
    getLocations();
    getResources();
  }, []);

  return (
    <form>
      <select
        name="Origin"
        value={deliveryOrigin}
        onChange={(e) => setDeliveryOrigin(e.target.value)}
      >
        {allLocations &&
          allLocations.map((location) => (
            <option key={location.locationId} value={location.locationId}>
              {location.name}
            </option>
          ))}
      </select>
      <br />
      <select
        name="Destination"
        value={deliveryDestination}
        onChange={(e) => setDeliveryDestination(e.target.value)}
      >
        {allLocations &&
          allLocations
            .filter((location) => location.locationId !== deliveryOrigin)
            .map((location) => (
              <option key={location.locationId} value={location.locationId}>
                {location.name}
              </option>
            ))}
      </select>
      <br />
      {resourcesAtLocation &&
        resourcesAtLocation
          .filter((resource) => resource.lastLocationId === deliveryOrigin)
          .map((resource) => (
            <label key={resource.id}>
              {resource.id}
              <input type="checkbox" value={resource.id} />
            </label>
          ))}
    </form>
  );
};

export default DeliveryForm;
