import InvoiceLogo from "../components/InvoiceLogo";
import ItemsTable from "../components/ItemsTable";
import Preview from "../components/Preview";
import DateInput from "../components/common/DateInput";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";

import { useState } from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

const initialItem = { item: "", rate: "", qty: "" };

const InvoicePage = () => {
    const [logo, setLogo] = useState(null);
    const [selectedFile, setSelectedFile] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [from, setFrom] = useState("");
    const [billTo, setBillTo] = useState("");
    const [issueDate, setIssueDate] = useState(Date.now());
    const [dueDate, setDueDate] = useState(Date.now());
    const [items, setItems] = useState([{ ...initialItem }]);
    const [notes, setNotes] = useState("");
    const [tax, setTax] = useState("");
    const [shippingFee, setShippingFee] = useState("");
    const [discount, setDiscount] = useState("");

    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file.name);
            const reader = new FileReader();
            reader.onload = (e) => {
                setLogo(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (idx, field, value) => {
        const updated = items.map((row, i) =>
            i === idx
                ? {
                      ...row,
                      [field]: value,
                  }
                : row
        );
        setItems(updated);
    };

    const handleAdd = () => {
        setItems([...items, { ...initialItem }]);
    };

    const handleRemove = (idx) => {
        setItems(items.filter((_, i) => i !== idx));
    };

    const handleClear = () => {
        setItems([initialItem]);
    };

    return (
        <div className="flex flex-row justify-evenly items-start min-h-screen bg-gray-100 p-8">
            <div className="w-1/2 min-h-screen p-6 bg-white shadow-md rounded-lg mr-8 flex flex-col items-center">
                <div className="w-full flex justify-between items-center mb-4">
                    <InvoiceLogo
                        selectedFile={selectedFile}
                        handleLogoChange={handleLogoChange}
                    />
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold tracking-widest text-accent-500">
                            INVOICE
                        </h1>
                        <div className="w-full flex text-md text-gray-600">
                            <span className="h-full px-4 py-2 rounded-l bg-gray-800 text-white">
                                #
                            </span>
                            <Input
                                type="text"
                                value={invoiceNumber}
                                onChange={(e) =>
                                    setInvoiceNumber(e.target.value)
                                }
                                placeholder="0"
                                name="invoiceNumber"
                                className="h-full pr-4 pl-2 py-2 w-24 inline-block text-end bg-gray-100 rounded-r outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex w-full mt-4">
                    <TextArea
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        name="from"
                        label="From"
                        placeholder="Enter your name or company's name&#13;&#10;Address"
                        labelClassName="mr-3"
                        textareaClassName="outline-accent-400"
                    />

                    <TextArea
                        placeholder="Client's Name&#13;&#10;Address"
                        label="Bill to"
                        value={billTo}
                        onChange={(e) => setBillTo(e.target.value)}
                        name="bill_to"
                        labelClassName="ml-3"
                        textareaClassName="outline-accent-400"
                    />
                </div>

                <div className="w-full flex mt-4">
                    <DateInput
                        label="Issue Date"
                        value={
                            issueDate && !isNaN(new Date(issueDate))
                                ? new Date(issueDate).toISOString().split("T")[0]
                                : ""
                        }
                        onChange={(e) => setIssueDate(e.target.value)}
                        name="issueDate"
                        labelClassName="mr-3"
                        inputClassName="outline-accent-400"
                    />
                    <DateInput
                        label="Due Date"
                        value={
                            dueDate && !isNaN(new Date(dueDate))
                                ? new Date(dueDate).toISOString().split("T")[0]
                                : ""
                        }
                        name="dueDate"
                        onChange={(e) => setDueDate(e.target.value)}
                        labelClassName="ml-3"
                        inputClassName="outline-accent-400"
                    />
                </div>

                <ItemsTable
                    className="mt-4"
                    items={items}
                    handleChange={handleChange}
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}
                    handleClear={handleClear}
                />

                <div className="grid grid-cols-3 gap-4 mt-6 w-full">
                    <div>
                        <label
                            className={`w-full text-sm font-semibold text-gray-700`}
                            htmlFor="tax"
                        >
                            Tax ($)
                            <input
                                type="number"
                                name="tax"
                                value={tax}
                                onChange={(e) => setTax(e.target.value)}
                                className={`w-full p-2 border border-gray-300 rounded-r-xl rounded-bl-xl font-normal`}
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            className={`w-full text-sm font-semibold text-gray-700`}
                            htmlFor="shippingFee"
                        >
                            Shipping Fee ($)
                            <input
                                type="number"
                                name="shippingFee"
                                value={shippingFee}
                                onChange={(e) => setShippingFee(e.target.value)}
                                className={`w-full p-2 border border-gray-300 rounded-r-xl rounded-bl-xl font-normal`}
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            className={`w-full text-sm font-semibold text-gray-700`}
                            htmlFor="discount"
                        >
                            Discount ($)
                            <input
                                type="number"
                                name="discount"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                className={`w-full p-2 border border-gray-300 rounded-r-xl rounded-bl-xl font-normal`}
                            />
                        </label>
                    </div>
                </div>

                <TextArea
                    placeholder="Terms and Conditions"
                    label="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    name="notes"
                    labelClassName="mt-4"
                    textareaClassName="outline-accent-400"
                />

                <button className="w-full mt-9 px-4 py-2 bg-accent-500 text-white rounded hover:bg-accent-600 transition-colors">
                    Generate Invoice
                </button>
            </div>
            <div className="w-1/2 h-full p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
                <Preview>
                    <DefaultTemplate
                        data={{
                            logo,
                            invoiceNumber,
                            from,
                            billTo,
                            dueDate,
                            issueDate,
                            items,
                            notes,
                            tax: parseFloat(tax) || 0,
                            shippingFee: parseFloat(shippingFee) || 0,
                            discount: parseFloat(discount) || 0,
                        }}
                    />
                </Preview>
            </div>
        </div>
    );
};

export default InvoicePage;
