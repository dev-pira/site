import React from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>DEVPIRA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
};

export default Header;
