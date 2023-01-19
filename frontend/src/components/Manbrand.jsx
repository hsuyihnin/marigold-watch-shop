import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
const BRANDS = gql`
  query {
    manWatchBrands {
      data {
        id
        attributes {
          name
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

const Manbrand = () => {
  const { loading, error, data } = useQuery(BRANDS);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <BrandToolTip>
      <h2>MAN</h2>
      {data.manWatchBrands.data.map((brand) => {
        return (
          <div key={brand.id} className="mb-2">
            <Logo src={brand.attributes.logo.data.attributes.url} alt="" />
            {/* <p className='text-sm'>{ brand.attributes.name }</p> */}
          </div>
        );
      })}
    </BrandToolTip>
  );
};

export default Manbrand;

export const Logo = styled.img`
  width: 100px;
`;
export const BrandToolTip = styled.div`
  width: 500px;
  padding: 10px;
`;
