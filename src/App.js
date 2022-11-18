import "./styles.css";
// import { useState } from "react";
// import { useFetch } from "./fetchData";
// import EmployeeList from "./components/EmployeeList";
import DeliveryForm from "./components/DeliveryForm";
import DeliveryList from "./components/DeliveryList";

export default function App() {
  return (
    <>
      <DeliveryForm />
      <h1>Deliveries</h1>
      <DeliveryList />
    </>
  );
}
