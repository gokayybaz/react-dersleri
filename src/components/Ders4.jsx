import React from "react";

export default function Ders4() {
  const title = (
    <h1>Ders 4 - JSX'i değişkene atama ve değişkeni JSX içerisinde kullanma</h1>
  );
  const name = "Gökay";
  const surName = "Baz";
  const birthYear = 2004;
  let currentYear = 2023;
  let age = (birthYear, currentYear) => currentYear - birthYear;
  const description = <p>React Öğreniyorum!!!</p>;
  const pageStyle = {
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    padding: "0.5rem",
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div style={pageStyle}>
      {title}
      <div>
        <p>Ad : {name}</p>
        <p>Soyad : {surName}</p>
        <p>Yaş : {age(birthYear, currentYear)}</p>
        {description}
      </div>
    </div>
  );
}
