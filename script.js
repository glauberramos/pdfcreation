function drawHeader(position) {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(245, 245, 245)
  doc.rect(5, position, 150, 10, 'FD')
}

function drawContent(position) {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(255, 255, 255)
  doc.rect(5, position, 150, 10, 'FD')
}

const map = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }

const doc = new jsPDF()
let position = 10

doc.text(data.name, 10, position)
position = position + 10

const date = new Date(data.updatedAt)
doc.text(date.getHours() + ':' + date.getMinutes() + ' ' + map[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(), 10, position)
position = position + 17

doc.text('Number of cards: ' + data.participants.length, 10, position)
position = position + 10
doc.text('Number of participants: ' + data.meta.cardCount, 10, position)
position = position + 10

data.columns.map(function(column, index) {
  drawHeader(position)

  position = position + 7
  doc.text(column.placeholder, 10, position)
  position = position + 10

  column.rows.map(function(row, index) {
    if (row.selected) {
      doc.setFontType("bold")
    }

    drawContent(position - 7)

    doc.text('Votes ' + row.votes + ' - ' + row.value, 20, position)
    position = position + 10

    doc.setFontType("normal")

    if (row.nodes.length > 0) {
      row.nodes.map(function(node, index) {
        drawContent(position - 7)

        doc.text('Votes ' + node.votes + ' - ' + node.value, 20, position)
        position = position + 10
      })
    }
  })
})

doc.output('dataurlnewwindow')
