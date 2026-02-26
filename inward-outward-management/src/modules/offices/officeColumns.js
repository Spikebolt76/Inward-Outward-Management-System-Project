export const officeColumns = [
    {
        key: 'officeName',
        header: 'Office Name'
    },
    {
        key: 'departmentName',
        header: 'Department',
        render: (row) => row.department?.departmentName
    },
    {
        key: 'instituteName',
        header: 'Institute',
        render: (row) => row.institute?.instituteName
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