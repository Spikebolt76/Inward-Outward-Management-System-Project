export const outwardColumns = [
    { 
        key: "outwardNo", 
        header: "Outward No" 
    },
    { 
        key: "outwardDate", 
        header: "Outward Date" 
    },
    { 
        key: "letterForwardedToName", 
        header: "Recipient" 
    },
    {   
        key: "inOutwardModeID", 
        header: "Mode", render: (id, row) => row.modeName || "—" 
    },
    { 
        key: "deliveryStatus", 
        header: "Delivery Status" 
    },
    {
        key: "isReturned",
        header: "Returned"
    },
    {
        key: "subjectShort", 
        header: "Subject"
    }
];