export const financialYearColumns = [
    {
        key: 'yearName',
        header: 'Year'
    },
    {
        key: 'startDate',
        header: 'Start Date'
    },
    {
        key: 'endDate',
        header: 'End Date'
    },
    {
        key: 'isCurrent',
        header: 'Current',
        render: (row) => row.isCurrent ? <span className="text-green-600">Yes</span> : <span className="text-red-600">No</span>
    },
    {
        key: 'isActive',
        header: 'Status'
    }
]
