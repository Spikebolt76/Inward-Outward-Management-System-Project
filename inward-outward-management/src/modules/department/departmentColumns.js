export const departmentColumns = [
    {
        key: 'departmentName',
        header: 'Department Name'
    },
    {
        key: 'shortName',
        header: 'Short Name'
    },
    {
        key: 'institute',
        header: 'Institute',
        render: (row) => row.institute?.instituteName
    },
    {
        key: 'headPersonName',
        header: 'Head'
    },
    {
        key: 'email',
        header: 'Email'
    },
    {
        key: 'isActive',
        header: 'Status'
    }
];
