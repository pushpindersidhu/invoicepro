const Input = ({
    label = "",
    type = "text",
    value,
    onChange,
    placeholder = "",
    name,
    labelClassName = "",
    inputClassName = "",
    ...rest
}) => (
    <label className={`w-full text-sm text-gray-700 ${labelClassName}`}>
        {label}
        <input
            type={type}
            className={`w-full p-2 border border-gray-300 rounded mt-1 ${inputClassName}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            {...rest}
        />
    </label>
);

export default Input;
