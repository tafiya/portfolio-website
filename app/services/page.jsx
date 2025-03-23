import ServicePage from "@/components/pageComponant/service/ServicePage";
import { getAllService } from "@/service";
import React from "react";
const page = async () => {
  const { data } = await getAllService();

  return (
    <div>
      <ServicePage services={{ data }}></ServicePage>
    </div>
  );
};

export default page;
