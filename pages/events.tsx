import type { NextPage } from "next";
import React from "react";
import { Footer } from "../components/Footer";
import { Initiatives } from "../components/Initiatives";
import { Navbar } from "../components/Navbar";
import { Box } from "../components/Box";

const Event: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#3f4052;",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "560px",
            justifyContent: "space-around",
          }}
        ></Box>
      </Box>
      <Initiatives />
      <Footer />
    </div>
  );
};

export default Event;
