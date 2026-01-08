import React from "react";
import { useParams } from "react-router-dom";
import { service } from "./../constant/constant";
import Title from "../Components/ui/Title";

export default function SectorDetails() {
  const { id } = useParams();
  let item = service.find((item) => item.id == id);

  return (
    <section
      className="flex flex-col items-center justify-center text-center"
      dir="rtl"
    >
      <Title title={"القطاعات"} />
    </section>
  );
}
