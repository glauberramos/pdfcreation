const map = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }

const doc = new jsPDF()
let position = 20

function drawHeaderBackground() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(245, 245, 245)
  doc.roundedRect(10, position, 170, 12, 1, 1, 'FD')
}

function drawContentBackground() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(255, 255, 255)
  doc.rect(10, position - 7, 170, 10, 'FD')
}

function drawDocTitle() {
  doc.setFontSize(22)
  doc.setFontType("bold")
  doc.text(data.name, 10, position)
  position = position + 7

  doc.setFontType("italic")
  doc.setFontSize(14)
  const date = new Date(data.updatedAt)
  doc.text(date.getHours() + ':' + date.getMinutes() + ' ' + map[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(), 10, position)
  position = position + 17
  doc.setFontType("normal")
}

function drawInfo() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(245, 245, 245)
  doc.roundedRect(10, position - 7, 170, 10, 1, 1, 'FD')
  doc.text('Total cards: ' + data.participants.length + '   ' + 'Total participants: ' + data.meta.cardCount, 15, position)
  position = position + 10
}

function drawColumnTitle(column) {
    drawHeaderBackground()
    position = position + 7
    doc.text(column.placeholder, 15, position)
    position = position + 10
}

function drawRowContent(row) {
  if (row.selected) {
    doc.setFontType("bold")
  }

  drawContentBackground()

  doc.text('Votes ' + row.votes + ' - ' + row.value, 15, position)
  position = position + 10

  doc.setFontType("normal")

  if (row.nodes.length > 0) {
    row.nodes.map(function(node, index) {
      drawContentBackground()

      doc.text(node.value, 15 + doc.getStringUnitWidth('Votes ' + row.votes + ' - ') * 5, position)
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
