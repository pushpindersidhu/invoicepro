const TextArea = ({
    label = "",
    placeholder = "",
    rows = 3,
    value,
    onChange,
    name,
    labelClassName = "",
    textareaClassName = "",
    ...props
}) => (
    <label className={`w-full text-sm font-semibold text-gray-700 ${labelClassName}`}>
        {label}
        <textarea
            className={`w-full p-2 border border-gray-200 rounded-r-xl rounded-bl-xl font-normal ${textareaClassName}`}
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={onChange}
            name={name}
            {...props}
        ></textarea>
    </label>
);

export default TextArea;
