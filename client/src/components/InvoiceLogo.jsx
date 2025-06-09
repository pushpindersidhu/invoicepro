const InvoiceLogo = ({ selectedFile, handleLogoChange }) => {
    return (
        <div className="w-full max-w-sm">
            <div className="w-2/3 h-[76px] flex items-center justify-center">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full border-2 border-accent-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-1000"
                >
                    <div className="flex flex-row items-center justify-center px-3">
                        <svg
                            className="w-8 h-8 text-accent-400 mx-2 shrink-0 p-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        {selectedFile ? (
                            <p className="text-xs text-green-600 text-center px-4 text-ellipsis line-clamp-3">
                                Selected: {selectedFile}
                            </p>
                        ) : (
                            <p className="text-xs text-gray-500 text-center px-4">
                                <span className="font-semibold">
                                    Click to upload
                                </span>{" "}
                                or drag and drop logo
                            </p>
                        )}
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleLogoChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default InvoiceLogo;
