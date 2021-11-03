export const getStaticProps = async () => {
  const res = await fetch(
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/678463a0-4834-4f7e-98e6-c1a47f53d7c1/db.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211103T070642Z&X-Amz-Expires=86400&X-Amz-Signature=37fffad917aac95d854f2ea34cc2f6c2b3133f9ae02fb82e1a887456751c42ca&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22db.json%22'
  );
  const data = await res.json();

  return {
    props: {
      stores: data,
    },
  };
};

const stores = ({ stores }) => {
  console.log('data', stores);

  return (
    <div>
      <h1>All Stores</h1>
      {stores.map((store) => (
        <div key={store.id}>
          <img src={store.img} alt={store.name} />
        </div>
      ))}
    </div>
  );
};

export default stores;
