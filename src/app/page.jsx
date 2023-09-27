import Image from "next/image";
import HeaderTitle from "./components/HeaderTitle";
import NewDomainForm from "./components/NewDomainForm";
import DomainRow from "./components/DomainRow";

export default function Home() {
  return (
    <div>
      <NewDomainForm />
      <HeaderTitle preTitle={"Your Domains"} mainTitle={"4 Domains"} />
      <DomainRow />
      <DomainRow />
      <DomainRow />
      <DomainRow />
    </div>
  );
}
