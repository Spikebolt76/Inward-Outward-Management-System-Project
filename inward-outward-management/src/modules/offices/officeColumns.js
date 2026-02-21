export const officeColumns = [
    {
        key: 'OfficeName',
        header: 'Office Name'
    },
    {
        key: 'DepartmentName',
        header: 'Department',
        render: (row) => row.Department?.DepartmentName
    },
    {
        key: 'OpeningDate',
        header: 'Opening Date'
    },
    {
        key: 'OpeningInwardNo',
        header: 'Starting Inward No'
    },
    {
        key: 'OpeningOutwardNo',
        header: 'Starting Outward No'
    }
]