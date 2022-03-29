//Library Tools
import {
  AvatarCell,
  userCell,
  TitleCell,
  FirstCell,
  LastCell,
  AdressCell,
  PhoneCell,
} from "./lib/cell";

export const usersManagement = [
  {
    Header: "Profile",
    accessor: "location.street.number",
    Cell: AvatarCell,
  },
  {
    Header: "Name",
    accessor: "email",
    Cell: userCell,
  },
  {
    Header: "Title",
    accessor: "name.title",
    Cell: TitleCell,
  },
  {
    Header: "Firstname",
    accessor: "name.firstname",
    Cell: FirstCell,
  },
  {
    Header: "Lastname",
    accessor: "name.lastname",
    Cell: LastCell,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Cell: PhoneCell,
  },
  {
    Header: "Adress",
    accessor: "location.state",
    Cell: AdressCell,
  },
];
