const Stores = ({ stores }) => {
  //   console.log('data', stores);

  return (
    <div>
      <h1>All Stores</h1>
      {/* {stores.map((store) => (
        <div key={store.id}>
          <img src={store.image} alt={store.name} />
        </div>
      ))} */}

      {stores.map((store) => (
        <div key={store.id}>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={store.image} rounded />
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:9000/stores');
  const stores = await res.json();

  return {
    props: {
      stores,
    },
  };
};

export default Stores;
