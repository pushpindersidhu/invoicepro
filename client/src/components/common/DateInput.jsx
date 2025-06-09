const DateInput = ({
    label = "Date Issued",
    value,
    onChange,
    name = "dateIssued",
    labelClassName = "",
    inputClassName = "",
}) => (
    <label
        className={`w-full text-sm font-semibold text-gray-700 ${labelClassName}`}
    >
        {label}
        <input
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full p-2 border border-gray-300 rounded-r-xl rounded-bl-xl font-normal ${inputClassName}`}
        />
    </label>
);

export default DateInput;
