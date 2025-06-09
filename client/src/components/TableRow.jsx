const TableData = ({ type, value, onChange, placeholder }) => {
    return (
        <td className="px-2 py-2">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="px-4 py-2 w-full outline-none border border-gray-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
        </td>
    );
};

export default function TableRow({ idx, row, onChange, onRemove }) {
    return (
        <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-100">
            <TableData
                type="text"
                value={row.item}
                onChange={(e) => onChange(idx, "item", e.target.value)}
                placeholder="Item"
            />
            <TableData
                type="number"
                value={row.rate}
                onChange={(e) => onChange(idx, "rate", e.target.value)}
                placeholder="Rate"
            />
            <TableData
                type="number"
                value={row.qty}
                onChange={(e) => onChange(idx, "qty", e.target.value)}
                placeholder="Qty"
            />
            <td className="px-6 py-4">
                {(parseFloat(row.rate) * parseFloat(row.qty) || 0).toFixed(2)}
            </td>
            <td className="px-6 py-4">
                <button
                    className="cursor-pointer"
                    onClick={() => onRemove(idx)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="fill-red-600 mx-2"
                    >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}
