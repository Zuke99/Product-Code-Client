import React, { useRef } from "react";


function Output1() {


  

  return (
    <div>
      <div>
        SOUTH CENTRAL RAILWAY <br />
        MEDICAL DEPARTMENT<br />
        MEDICAL DIRECTOR<br />
        CENTRAL HOSPITAL, LALLAGUDA, SECUNDERABAD-500 017<br />
      </div>

      <div>
        No: HQ/MD/69/Stores/PH Code/2023-24/{1}      Date:{Date.now()} <br />
        PCMD/SCR <br />
        Sub: - Allotment of Product Code for {} - Reg. <br />
        With reference to the above, the following item is being proposed for allotment of Product Code and to include in <br />
        the Master list of {} of South-Central Railway and approval is sought for the same. <br />
        <p>The following Firm is the manufacturer/Supplier for the subject item in India. </p>
        <strong >Manufactured By: </strong><br />
        {}
        <strong>Imported / Supplied By: </strong>
        Description: {} Approximate Requirement:{}	 Approximate Rate:   {}

        <p>PCMD/SCR is requested to assign New product code and include in the Master list of medicines of South-Central Railway for use at CH/LGD.
        </p>
      </div>

      <div>
        MEDICAL DIRECTOR<br />
        Central Hospital<br />
        Lallaguda/SC.
      </div>
{/* 
      <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div> */}
    </div>
  );
}
function Output1Container() {
  const componentRef = useRef();

  const handlePrint = () => {
    const content = componentRef.current;

    if (content) {
      const printWindow = window.open('', '_blank');
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div>
      <Output1 ref={componentRef} />
      <button onClick={handlePrint}>Print thisyy</button>
    </div>
  );
}

export default Output1Container;

// export default Output1;