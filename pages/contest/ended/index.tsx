import React from "react";
import type { NextPage } from "next";
import axios from "axios";
import { GET_ENDED_CONTEST } from "../../../constant/url";
interface ContestType {
  id: number;
  name: string;
}
const EndedContentList: NextPage = () => {
  const [data, setData] = React.useState<ContestType[]>();

  React.useEffect(() => {
    const config = {
      method: "get",
      url: GET_ENDED_CONTEST,
      headers: {},
      withCredentials: true,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  return (
    <main>
      {data?.map((data, idx) => {
        return <div key={idx}>{data.name}</div>;
      })}
    </main>
  );
};

export default EndedContentList;