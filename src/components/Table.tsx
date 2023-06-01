import React from "react";

type Props = {
  columns: string[];
  data: any;
  onEdit: (item: any) => void;
  onDelete: (itemId: number) => void;
};

const Table = ({ columns, data, onEdit, onDelete }: Props) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index + 1}
              className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item: any) => (
          <tr key={item.id}>
            <td className="py-4 px-6 whitespace-nowrap">
              <div className="flex items-center">
                <div className="text-sm font-medium text-gray-900">
                  {item.firstName}
                </div>
              </div>
            </td>
            <td className="py-4 px-6 whitespace-nowrap">
              <div className="flex items-center">
                <div className="text-sm font-medium text-gray-900">
                  {item.lastName}
                </div>
              </div>
            </td>
            <td className="py-4 px-6 whitespace-nowrap">
              <div className="flex items-center">
                <div
                  className={`text-sm font-medium ${
                    item.status === "active"
                      ? "text-emerald-500"
                      : "text-yellow-500"
                  }`}
                >
                  {item.status === "active" ? "Active" : "Inactive"}
                </div>
              </div>
            </td>
            <td className="py-4 px-6 whitespace-nowrap">
              <div className="flex items-center space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-600 focus:outline-none text-sm"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-600 focus:outline-none text-sm"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
