import React from "react";
import AppRouter from "./Router";

const data = {
    code: 1004,
    companyName: "유빈이네 닭갈비유",
    salesPersonCode: 1,
    salesPerson: "정성진",
    representativeName: "서유빈",
    representativeResidentNumber: "010721-4******",
    phoneNumber: "041-573-6337",
    postalCode: "331-090",
    address: "충남 천안시 동남구 성명대길 31",
    representativeCellNumber: "010-1234-5678",
  };


function App() {
  return (
    <AppRouter userObj={data}/>
  );
}
export default App;
