const doc = new jsPDF()
let position = 10

data.columns.map(function(column, index) {
  doc.text(column.placeholder, 10, position)
  position = position + 10

  column.rows.map(function(row, index) {
    doc.text('Votes ' + row.votes + ' - ' + row.value, 20, position)
    position = position + 10

    if (row.nodes.length > 0) {
      row.nodes.map(function(node, index) {
        doc.text('Votes ' + node.votes + ' - ' + node.value, 20, position)
        position = position + 10
      })
    }

  })
})

doc.output('dataurlnewwindow')
