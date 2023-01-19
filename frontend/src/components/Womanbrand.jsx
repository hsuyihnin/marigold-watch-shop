import React from "react";
import { useQuery, gql } from "@apollo/client";

const WMBRANDS = gql`
  query {
    wmbrands {
      data {
        id
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const Womanbrand = () => {
  const { loading, error, data } = useQuery(WMBRANDS);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  console.log(data);
  return (
    <>
      {data.wmbrands.data.map((brand) => {
        return (
          <div key={brand.id}>
            <h1>{brand.attributes.name}</h1>
            <img src={brand.attributes.logo.data.attributes.url} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Womanbrand;
