import getUnicodeFlagIcon from "country-flag-icons/unicode";

export function countryCell({ row }: any) {
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        {getUnicodeFlagIcon(row.original.country)}
        <div className="flex items-center pl-2">{row.original.country}</div>
      </div>
    </>
  );
}

export function countCell({ row }: any) {
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        <div className="flex items-center">{row.original.count}</div>
      </div>
    </>
  );
}
