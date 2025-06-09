const DefaultTemplate = ({ data }) => {
    const {
        logo,
        invoiceNumber,
        from,
        billTo,
        dueDate,
        issueDate,
        items,
        notes,
        tax,
        shippingFee,
        discount,
    } = data;

    const formatISODate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        if (isNaN(d)) return "";
        const year = d.getFullYear();
        const month = d.toLocaleString("en-US", { month: "short" });
        const day = String(d.getDate()).padStart(2, "0");
        return `${day}-${month}-${year}`;
    };

    const subTotal = items.reduce((acc, item) => {
        if (item.item && item.rate && item.qty) {
            return acc + parseFloat(item.rate) * parseFloat(item.qty || 1) || 0;
        }
        return acc;
    }, 0);

    const total = subTotal + tax - discount + shippingFee;

    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <div>
                    {logo ? (
                        <img className="h-16" src={logo} />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e3e3e3"
                            className="w-10 h-10 fill-blue-500"
                        >
                            <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z" />
                        </svg>
                    )}
                </div>
                <div className="flex flex-col justify-around items-center">
                    <p className="text-sm font-semibold text-gray-500">
                        Invoice No.
                    </p>
                    <p className="text-md font-bold text-blue-500 tracking-wider">
                        #{invoiceNumber}
                    </p>
                </div>
            </div>
            <hr className="w-full text-gray-200 my-8" />

            <div className="flex flex-row justify-between items-start">
                <div>
                    <p className="text-blue-500 text-sm font-semibold">FROM</p>
                    <pre className="mt-2 font-normal text-gray-800 text-sm/4">
                        {from}
                    </pre>
                </div>
                <div className="text-end">
                    <p className="text-blue-500 text-sm font-semibold">
                        BILL TO
                    </p>
                    <pre className="mt-2 font-normal text-gray-800 text-sm/4">
                        {billTo}
                    </pre>
                </div>
            </div>
            <div className="mt-8 flex flex-row items-center justify-between">
                <p className="text-blue-500 text-sm font-semibold">
                    Issue Date:{" "}
                    <span className="font-normal text-gray-800 text-sm">
                        {formatISODate(issueDate)}
                    </span>
                </p>

                <p className="text-blue-500 text-sm font-semibold">
                    Due Date:{" "}
                    <span className="font-normal text-gray-800 text-sm">
                        {formatISODate(dueDate)}
                    </span>
                </p>
            </div>

            <div className="w-full overflow-x-auto rounded-md mt-6 border border-gray-200">
                <table className="w-full table-fixed text-sm text-left rtl:text-right rounded-md border-collapse">
                    <thead className="w-full text-xs font-semibold text-white bg-blue-500">
                        <tr>
                            <th className="w-2/5 px-6 py-3">Description</th>
                            <th className="px-6 py-3">Rate</th>
                            <th className="px-6 py-3">Qty</th>
                            <th className="px-6 py-3">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {items.map(
                            (row, idx) =>
                                row.item && (
                                    <tr
                                        key={idx}
                                        className="odd:bg-white even:bg-gray-100"
                                    >
                                        <td className="px-6 py-4">
                                            {row.item}
                                        </td>
                                        <td className="px-6 py-4">
                                            {parseFloat(row.rate).toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4">{row.qty}</td>
                                        <td className="px-6 py-4">
                                            {(
                                                parseFloat(row.rate) *
                                                    parseFloat(row.qty) || 0
                                            ).toFixed(2)}
                                        </td>
                                    </tr>
                                )
                        )}
                    </tbody>
                </table>
            </div>

            <div className="w-full mt-4">
                <div className="flex flex-row items-start w-full text-sm font-bold text-gray-700">
                    <div className="w-4/5 font-normal text-gray-600">
                        <p className="w-full text-end my-2 pr-4">SubTotal</p>
                        <p className="w-full text-end my-2 pr-4">Tax</p>
                        <p className="w-full text-end my-2 pr-4">Discount</p>
                        <p className="w-full text-end my-2 pr-4">
                            Shipping Fee
                        </p>
                    </div>
                    <div className="w-1/5 px-6">
                        <p className="my-2 text-end tracking-wide">
                            ${subTotal.toFixed(2)}
                        </p>
                        <p className="my-2 text-end tracking-wide">
                            ${tax.toFixed(2)}
                        </p>
                        <p className="my-2 text-end tracking-wide">
                            ${discount.toFixed(2)}
                        </p>
                        <p className="my-2 text-end tracking-wide">
                            ${shippingFee.toFixed(2)}
                        </p>
                    </div>
                </div>
                <hr className="w-full my-4 text-gray-200" />
                <div className="flex flex-row items-center w-full text-sm font-bold text-gray-700">
                    <div className="w-4/5 font-normal text-gray-600 tracking-wide">
                        <p className="w-full text-end pr-4">Total</p>
                    </div>
                    <div className="w-1/5 px-6">
                        <p className="text-blue-500 font-bold text-lg text-end pr-4 tracking-wide">
                            ${total.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-12 p-6 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-500 mb-2">NOTES</p>
                <pre className="text-sm/4 italic text-gray-700">{notes}</pre>
            </div>
        </div>
    );
};

export default DefaultTemplate;
