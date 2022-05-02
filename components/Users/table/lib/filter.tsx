import React from "react";
import Select from "react-select";

export function SelectColumnFilter({
  column: { setFilter, preFilteredRows, id }
}) {
  const options = React.useMemo(() => {
    return [
      { value: "", label: "None" },
      { value: "Madame", label: "Madame" },
      { value: "Mademoiselle", label: "Mademoiselle" },
      { value: "Miss", label: "Miss" },
      { value: "Monsieur", label: "Monsieur" },
      { value: "Mr", label: "Mr" },
      { value: "Mrs", label: "Mrs" },
      { value: "Ms", label: "Ms" }
    ];
  }, [id, preFilteredRows]);

  return (
    <div className="flex gap-x-2 items-baseline">
      <div className="w-38">
        <Select
          placeholder="Status"
          options={options}
          onChange={(e) => setFilter(e.value)}
        />
      </div>
    </div>
  );
}