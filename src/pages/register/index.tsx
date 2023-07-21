import React from "react";
import { MainPageContainer, PageWrapper } from "../main/style";
import Title from "@/components/utils/Title";
import RegisterLocation from "@/components/utils/RegisterLocation";
import RegisterMap from "@/components/utils/RegisterMap";
import Photo from "@/components/utils/Photo";
import { RegisterFormWrapper, RegisterPageContainer } from "./style";

const index = () => {
  return (
    <PageWrapper>
      <MainPageContainer>
        <Title page="register" />
        <RegisterPageContainer>
          <Photo />
          <RegisterFormWrapper>
            <RegisterLocation />
          </RegisterFormWrapper>
          <RegisterMap />
        </RegisterPageContainer>
      </MainPageContainer>
    </PageWrapper>
  );
};

export default index;
