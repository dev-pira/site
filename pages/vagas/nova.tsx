import * as React from "react";
import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { JobsIntro } from "../../components/JobsIntro";
import { JobForm } from "../../components/JobForm";
import { CreateJobRequest } from "../../models/job";
import { Alert, Snackbar } from "@mui/material";

const NewJobPage: NextPage = () => {
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successOpen, setSuccessOpen] = React.useState(false);

  const action = async (data: CreateJobRequest) => {
    const url = "/api/jobs";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify(data);
    const result = await fetch(url, { method: "POST", headers, body });
    console.log(result);
    if (!result.ok) {
      setErrorMessage(
        "Aconteceu um problema. Por favor, contacte o administrador."
      );
      setErrorOpen(true);
    } else {
      setSuccessOpen(true);
    }
  };

  const handleErrorClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setErrorOpen(false);
  };

  const handleSuccessClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSuccessOpen(false);
  };

  return (
    <div>
      <Navbar />
      <JobsIntro />
      {/*  TODO: Needs a specific Intro */}
      <JobForm action={action} />
      <Footer />
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={errorOpen}
        onClose={handleErrorClose}
      >
        <Alert severity="error" onClose={handleErrorClose}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
      >
        <Alert severity="success" onClose={handleSuccessClose}>
          Vaga registrada. Logo ela aparecerá em nosso site.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewJobPage;
