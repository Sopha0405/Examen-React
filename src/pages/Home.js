import React from "react";
import Layout from "../components/templates/Layout";
import Button from "../components/atoms/Button";
import Card from "../components/molecules/Card";

function Home() {
  return (
    <Layout>
      <Button name="Sofía" />
      <Card title="Bienvenida" content="Esta es la página principal" />
    </Layout>
  );
}

export default Home;
