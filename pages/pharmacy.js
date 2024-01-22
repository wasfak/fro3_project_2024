import Info from "@/components/Info";
import React, { useState } from "react";

export default function Pharmacy() {
  const [data, setData] = useState(null);
  const pharmacies = [
    { id: 1, name: "elz3fran" },
    { id: 2, name: "hokok" },
    { id: 3, name: "khulfa" },
    { id: 4, name: "adab" },
    { id: 5, name: "madenty" },
    { id: 6, name: "madent_porsaid" },
    { id: 7, name: "semad" },
    { id: 8, name: "zgazig" },
    { id: 9, name: "arkan" },
    { id: 10, name: "ismailia" },
    { id: 11, name: "galaa" },
    { id: 12, name: "gomhorya" },
    { id: 13, name: "golf" },
    { id: 14, name: "drasat" },
    { id: 15, name: "rehab" },
    { id: 16, name: "swees" },
    { id: 17, name: "mohafza" },
    { id: 18, name: "mostashfa_aam" },
    { id: 19, name: "manzala" },
    { id: 20, name: "awel_kh" },
    { id: 21, name: "awel_march" },
    { id: 22, name: "new_domyat" },
    { id: 23, name: "elestad" },
    { id: 24, name: "gamaa" },
    { id: 25, name: "gesh" },
    { id: 26, name: "seka" },
    { id: 27, name: "bank_masr" },
    { id: 28, name: "shar3_porsaid" },
    { id: 29, name: "domyat" },
    { id: 30, name: "sheraton" },
    { id: 31, name: "kanat_swees" },
    { id: 32, name: "madient_nasr" },
  ];

  const getData = async (name) => {
    const res = await fetch("/api/pharmSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();

    if (data) {
      setData(data);
    }
  };

  const handleSubmit = (name) => {
    getData(name);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-wrap min-w-full">
        {pharmacies.map((pharmacy) => (
          <div key={pharmacy.id}>
            <button
              className="py-2 px-2 rounded-xl mt-4 bg-black text-white flex items-center ml-5 capitalize"
              onClick={() => handleSubmit(pharmacy.name)}
            >
              {pharmacy.name}
            </button>
          </div>
        ))}
      </div>

      <div>{data && <Info data={data} />}</div>
    </>
  );
}
