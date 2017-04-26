const map = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }

const doc = new jsPDF()
let position = 15

function drawTableHeader() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(245, 245, 245)
  doc.roundedRect(5, position, 150, 12, 1, 1, 'FD')
}

function drawTableContent() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(255, 255, 255)
  doc.rect(5, position - 7, 150, 10, 'FD')
}

function drawDocTitle() {
  doc.setFontSize(22)
  doc.setFontType("bold")
  doc.text(data.name, 10, position)
  position = position + 10

  doc.setFontType("italic")
  doc.setFontSize(14)
  const date = new Date(data.updatedAt)
  doc.text(date.getHours() + ':' + date.getMinutes() + ' ' + map[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(), 10, position)
  position = position + 5
  doc.setFontType("normal")

  doc.setLineWidth(.5)
  doc.setDrawColor(230, 230, 230)
  doc.line(10, position, 150, position)
  position = position + 12
  doc.setLineWidth(0)
}

function drawInfo() {
  doc.text('Number of cards: ' + data.participants.length, 10, position)
  position = position + 10
  doc.text('Number of participants: ' + data.meta.cardCount, 10, position)
  position = position + 10
}

function drawColumnTitle(column) {
    drawTableHeader()
    position = position + 7
    doc.text(column.placeholder, 10, position)
    position = position + 10
}

function drawRowContent(row) {
  if (row.selected) {
    doc.setFontType("bold")
  }

  drawTableContent()

  doc.text('Votes ' + row.votes + ' - ' + row.value, 10, position)
  position = position + 10

  doc.setFontType("normal")

  if (row.nodes.length > 0) {
    row.nodes.map(function(node, index) {
      drawTableContent()

      doc.text(node.value, 10 + doc.getStringUnitWidth('Votes ' + row.votes + ' - ') * 5, position)
      position = position + 10
    })
  }
}

drawDocTitle();
drawInfo();

data.columns.map(function(column, index) {
  drawColumnTitle(column)

  column.rows.map(function(row, index) {
    drawRowContent(row)
  })
})

doc.output('dataurlnewwindow')
