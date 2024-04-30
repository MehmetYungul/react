import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Brands from "../../src/components/home/brands";
import MainLayout from "../../src/components/layout/MainLayout";
import SEO from "../../src/components/seo";
import { getServerSideProps } from "../index";

const Index = ({ configData, landingPageData }) => {
  // useEffect(() => {}, []);

  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `All Brands` : "Loading..."}
        image={`${configData?.base_urls?.business_logo_url}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
        configData={configData}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <Brands viewAll />
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };
