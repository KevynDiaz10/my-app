import Header from "./components/HeaderCompanies";
import { ListTable } from "./components/TableCompanies/ListCompanies";


export default function page() {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <ListTable/>
    </div>
  );
}
