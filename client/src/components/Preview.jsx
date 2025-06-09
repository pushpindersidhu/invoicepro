import { useRef } from "react";

const Preview = ({ children }) => {
    const contentRef = useRef();

    const handlePrint = () => {
        const printWindow = window.open(
            "",
            "_blank",
            "width=850,height=1100,top=100,left=100,toolbar=no,scrollbars=yes,resizable=yes"
        );

        if (printWindow) {
            const styleLinks = Array.from(
                document.querySelectorAll('link[rel="stylesheet"], style')
            )
                .map((link) => link.outerHTML)
                .join("");

            const printStyles = `
                <style>
                    @page {
                        size: A4;
                        margin: 20mm;
                    }
    
                    html, body {
                        margin: 0;
                        padding: 0;
                        width: 210mm;
                        height: 297mm;
                        background: white;
                        box-sizing: border-box;
                        font-family: sans-serif;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
    
                    .print-container {
                        width: 210mm;
                        height: 297mm;
                        padding: 20mm;
                        box-sizing: border-box;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                </style>
            `;

            const content = contentRef.current
                ? contentRef.current.innerHTML
                : "<p>No content</p>";

            printWindow.document.write(`
                <html>
                    <head>
                        <title>Invoice</title>
                        ${styleLinks}
                        ${printStyles}
                    </head>
                    <body>
                        <div class="print-container">
                            ${content}
                        </div>
                        <script>
                            window.onload = function() {
                                setTimeout(() => {
                                    window.print();
                                    window.close();
                                }, 300);
                            };
                        </script>
                    </body>
                </html>
            `);

            printWindow.document.close();
        }
    };

    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-wider text-accent-500">
                    PREVIEW
                </h1>
                <div>
                    <button onClick={handlePrint} className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e3e3e3"
                            className="fill-gray-700 cursor-pointer"
                        >
                            <path d="M320-120q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v160q0 33-23.5 56.5T800-280h-80v80q0 33-23.5 56.5T640-120H320ZM160-360h80q0-33 23.5-56.5T320-440h320q33 0 56.5 23.5T720-360h80v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160Zm480-280v-120H320v120h-80v-120q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v120h-80Zm80 180q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320ZM160-560h640-640Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <hr className="my-4 border-gray-200" />
            <div className="w-full" ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default Preview;
