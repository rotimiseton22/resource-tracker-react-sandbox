import "./styles.css";
import DeliveryForm from "./components/DeliveryForm";
import DeliveryList from "./components/DeliveryList";

export default function App() {
  return (
    <div className="container">
      <DeliveryForm />
      <hr />
      <h4>Deliveries</h4>
      <DeliveryList />
    </div>
  );
}
