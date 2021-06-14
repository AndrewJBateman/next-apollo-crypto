import React from "React";
import Head from "next/head";
import Container from '@material-ui/core/Container';
import Navigation from "./Navigation";

const styles = {
  container: {
    paddingTop: '1em',
    paddingBottom: '1em',
    minWidth: '100%'
  }
}

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Crypto Price Table</title>
      </Head>
      <Container text style={styles.container}>
      <Navigation />
        {children}
      </Container>
    </>
  )
}

export default Layout