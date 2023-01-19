import React from "react";
import { useQuery, gql } from "@apollo/client";
const ROYALOAKS = gql`
  query {
    royalOaks {
      data {
        id
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          dial
          size
          material
          bracelet
          setting
        }
      }
    }
  }
`;

const Royaloak = () => {
  const { loading, error, data } = useQuery(ROYALOAKS);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  console.log(data);
  const url = data.royalOaks.data.attributes.image.return(
    <div>
      {data.royalOaks.data.map((item) => (
        <div key={item.id}>
          <h1>{item.attributes.name}</h1>
          <p>{item.attributes.setting}</p>
          <img src={item.attributes.image.data.attributes(url)} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Royaloak;
