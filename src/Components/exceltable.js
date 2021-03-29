import React from "react";
import ReadExcell from "../Services/excelservice";

let result = null;
export default function ExcelTable() {
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          let data = ReadExcell(file);
          data.then((d) => {
            d.map((person) => {
              document.querySelector("#ExcelTable").innerHTML += (
                <tr>
                  <td>${person.ISIM}</td>
                  <td>${person.SOYISIM}</td>
                  <td>${person.YAS}</td>
                  <td>${person.ALDIGI_MAAS}</td>
                  <td>${person.CINSIYETI}</td>
                </tr>
              );
            });
          });
        }}
      ></input>
      <table>
        <thead>
          <th>ISIM</th>
          <th>SOYISIM</th>
          <th>YAS</th>
          <th>ALDIGI_MAAS</th>
          <th>CINSIYETI</th>
        </thead>
      </table>
    </div>
  );
}
