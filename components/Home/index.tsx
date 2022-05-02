import { useEffect, useState, useMemo } from 'react'
import lodash from 'lodash'

import { DB_USER } from '../../lib/data/dbusers'
import Donnuts from './stats/Donnuts'

// Tools tables
import Tables from '../tools/tables'
import { countryManagement } from './table/columnsTables'
import { optionsManagement } from './table/optionsTables'
import Users from '../tools/icons/users'

const Dashboard = () => {
  const columns = useMemo(() => countryManagement, [])
  const [users, setUsers] = useState([])

  const loadingUsers = () => {
    setUsers(DB_USER)
  }

  useEffect(() => {
    loadingUsers()
  }, [])

  // Gender Donnuts
  const { female, male } = lodash.countBy(DB_USER, 'gender')
  const labelGender = []
  users.map((user) => {
    if (!labelGender.includes(user.gender)) {
      labelGender.push(user.gender)
    }
  })

  // Country Donnuts
  let country = Object.entries(lodash.countBy(DB_USER, "location.country")).map(
    ([key, value]) => {return { key, value }}
  );

  let labelCountry = [];
  users.map((user) => {
    if (!labelCountry.includes(user.location.country)) {
      labelCountry.push(user.location.country);
    }
  });

  const data = <T,>(label: T, datas: T) => {
    return {
      labels: label,
      datasets: [
        {
          data: datas,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#32CD32',
            '#4B0082',
            '#9932CC',
            '#87CEEB',
            '#DEB887',
            '#FFD700',
            '#FFA500',
            '#FF4500',
            '#DA70D6',
            '#FF69B4',
            '#FF1493',
            '#C71585',
            '#DB7093',
            '#FF00FF'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#32CD32',
            '#4B0082',
            '#9932CC',
            '#87CEEB',
            '#DEB887',
            '#FFD700',
            '#FFA500',
            '#FF4500',
            '#DA70D6',
            '#FF69B4',
            '#FF1493',
            '#C71585',
            '#DB7093',
            '#FF00FF'
          ]
        }
      ]
    }
  }

  const topCountry = []
  Object.entries(lodash.countBy(DB_USER, 'location.country')).map(
    ([key, value]) => topCountry.push({ country: key, count: value })
  )

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
              <Users size={50} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 align-items">
          <Donnuts title="Gender" items={data(labelGender, [female, male])} />
          <Donnuts title="Country" items={data(labelCountry, country)} />
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
  )
}
export default Dashboard
