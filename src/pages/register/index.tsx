import React from "react";
import { MainPageContainer, PageWrapper } from "../main/style";
import Toggle from "@/components/main/Toggle";
import Title from "@/components/utils/Title";
import RegisterLocation from "@/components/utils/RegisterLocation";
import RegisterMap from "@/components/utils/RegisterMap";
import Photo from "@/components/utils/Photo";

const index = () => {
  return (
    <PageWrapper>
      <MainPageContainer>
        <Title page="register" />
        <Photo />
        <RegisterLocation />
        <RegisterMap />
      </MainPageContainer>
    </PageWrapper>
  );
};

export default index;
