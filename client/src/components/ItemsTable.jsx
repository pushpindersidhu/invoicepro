import TableRow from "./TableRow";

export default function ItemsTable({
    items,
    handleChange,
    handleAdd,
    handleRemove,
    handleClear,
}) {
    return (
        <div className="w-full overflow-x-auto rounded-lg shadow mt-6 border border-gray-200">
            <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 rounded-md">
                <thead className="w-full text-xs text-gray-700 bg-gray-50 border-b border-b-gray-200 ">
                    <tr>
                        <th className="w-2/5 px-6 py-3">Description</th>
                        <th className="px-6 py-3">Rate</th>
                        <th className="px-6 py-3">Qty</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {items.map((row, idx) => (
                        <TableRow
                            key={idx}
                            row={row}
                            idx={idx}
                            onChange={handleChange}
                            onRemove={handleRemove}
                        />
                    ))}
                </tbody>
            </table>

            <div className="flex justify-end m-4">
                <button
                    onClick={handleClear}
                    className="h-fit px-6 py-2 bg-gray-100 border-gray-400 rounded-lg border-[1px] text-sm font-semibold text-gray-700 flex justify-center items-center cursor-pointer mr-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="fill-gray-700 mr-2"
                    >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" />
                    </svg>

                    <span>Clear All</span>
                </button>
                <button
                    onClick={handleAdd}
                    className="h-fit px-6 py-2 bg-gray-100 border-gray-400 rounded-lg border-[1px] text-sm font-semibold text-gray-700 flex justify-center items-center cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill=""
                        className="fill-gray-700 mr-2"
                    >
                        <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                    </svg>
                    <span>Add Item</span>
                </button>
            </div>
        </div>
    );
}
