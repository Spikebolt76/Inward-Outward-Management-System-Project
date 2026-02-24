export const userColumns = [
    {
        key: 'username',
        header: 'Username'
    },
    {
        key: 'email',
        header: 'Email'
    },
    {
        key: 'role',
        header: 'Role'
    },
    {
        key: 'departmentName',
        header: 'Department',
        render: (row) => row.department?.departmentName
    },
    {
        key: 'lastLoginAt',
        header: 'Last Login'
    },
    {
        key: 'isActive',
        header: 'Status'
    }
]