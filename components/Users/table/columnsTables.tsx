// Library Tools
import {
  AvatarCell,
  UserCell,
  TitleCell,
  FirstCell,
  LastCell,
  AdressCell,
  PhoneCell,
  GenderCell
} from './lib/cell'
import { SelectColumnFilter } from "./lib/filter";

export const usersManagement = [
  {
    Header: 'Profile',
    accessor: 'location.street.number',
    Cell: AvatarCell
  },
  {
    Header: 'Name',
    accessor: 'email',
    Cell: UserCell
  },
  {
    Header: 'Title',
    accessor: 'name.title',
    Cell: TitleCell
  },
  {
    Header: 'Gender',
    accessor: 'gender',
    Filter: SelectColumnFilter,
    Cell: GenderCell
  },
  {
    Header: 'Firstname',
    accessor: 'name.firstname',
    Cell: FirstCell
  },
  {
    Header: 'Lastname',
    accessor: 'name.lastname',
    Cell: LastCell
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    Cell: PhoneCell
  },
  {
    Header: 'Adress',
    accessor: 'location.state',
    Cell: AdressCell
  }
]
