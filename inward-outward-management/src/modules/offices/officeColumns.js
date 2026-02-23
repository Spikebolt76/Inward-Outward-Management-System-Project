export const officeColumns = [
    {
        key: 'officename',
        header: 'Office Name'
    },
    {
        key: 'departmentName',
        header: 'Department',
        render: (row) => row.Department?.departmentName
    },
    {
        key: 'instituteName',
        header: 'Institute',
        render: (row) => row.Institute?.instituteName
    },
    {
        key: 'email',
        header: 'Email'
    },
    {
        key: 'isActive',
        header: 'Status'
    }
]