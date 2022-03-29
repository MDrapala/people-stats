import { useEffect, useState, useMemo } from "react";
import lodash from "lodash";

import { DB_USER } from "../../lib/data/dbusers";
import Donnuts from "./stats/Donnuts";

//Tools tables
import Tables from "../tools/tables";
import { countryManagement } from "./table/columnsTables";
import { optionsManagement } from "./table/optionsTables";

const Dashboard = () => {
  const columns = useMemo(() => countryManagement, []);
  const [users, setUsers] = useState([]);

  const loadingUsers = () => {
    setUsers(DB_USER);
  };

  useEffect(() => {
    loadingUsers();
  }, []);

  //Gender Donnuts
  let { female, male } = lodash.countBy(DB_USER, "gender");
  let labelGender = [];
  users.map((user) => {
    if (!labelGender.includes(user.gender)) {
      labelGender.push(user.gender);
    }
  });

  //Country Donnuts
  let country = Object.entries(lodash.countBy(DB_USER, "location.country")).map(
    ([key, value]) => value
  );
  let labelCountry = [];
  users.map((user) => {
    if (!labelCountry.includes(user.location.country)) {
      labelCountry.push(user.location.country);
    }
  });

  const data = (label, data) => {
    return {
      labels: label,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#32CD32",
            "#4B0082",
            "#9932CC",
            "#87CEEB",
            "#DEB887",
            "#FFD700",
            "#FFA500",
            "#FF4500",
            "#DA70D6",
            "#FF69B4",
            "#FF1493",
            "#C71585",
            "#DB7093",
            "#FF00FF",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#32CD32",
            "#4B0082",
            "#9932CC",
            "#87CEEB",
            "#DEB887",
            "#FFD700",
            "#FFA500",
            "#FF4500",
            "#DA70D6",
            "#FF69B4",
            "#FF1493",
            "#C71585",
            "#DB7093",
            "#FF00FF",
          ],
        },
      ],
    };
  };

  let topCountry: any = [];
  Object.entries(lodash.countBy(DB_USER, "location.country")).map(
    ([key, value]: any) => topCountry.push({ country: key, count: value })
  );

  return (
    <>
      <div className="w-full h-full flex-col">
        <div className="flex space-x-4 align-center items-center align-items">
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">Users</span>
              <h1 className="text-2xl font-bold">{users.length}</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 align-items">
          <Donnuts title={"Gender"} data={data(labelGender, [female, male])} />
          <Donnuts title={"Country"} data={data(labelCountry, country)} />
        </div>
        <div className="mt-10">
          <Tables
            columns={columns}
            fetchData={topCountry
              .sort((a, b) => b.count - a.count)
              .slice(0, 15)}
            options={optionsManagement}
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
