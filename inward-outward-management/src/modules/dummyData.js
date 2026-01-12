export const makeDummyData = (columns, rows = 2) => {
  return Array.from({ length: rows }, (_, i) => {
    const row = { id: i + 1 }

    columns.forEach(col => {
        row[col.key] = "dummy_data"
    })

    return row
  })
}
