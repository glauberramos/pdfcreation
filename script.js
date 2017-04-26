const map = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }

const doc = new jsPDF()
let positionY = 20

function drawDocBackground() {
  doc.setFillColor(245, 245, 245)
  doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'FD')
}

function drawDocTitle() {
  const dataImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzEAAACTCAYAAAC+qpf4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAA3lElEQVR4Ae2dCfwX0/7/TxQXXWTLJalkC0XhIsp2xbVX3Pjbs2/Xnu2Hi5LqcYXrIVT2fYmsiezkCkUlopI1XNnpXsz//Zqamu+nmXPOzGdmvvM5n9d5PD7fz+c758xZnu8zZ877LO/TRCnlyYeOBEiABEiABEiABEiABEiABMpOoAkyuETZc8n8kQAJkAAJkAAJkAAJkAAJkECYAJWYMA3+JgESIAESIAESIAESIAESKD0BKjGlFxEzSAIkQAIkQAIkQAIkQAIkECZAJSZMg79JgARIgARIgARIgARIgARKT4BKTOlFxAySAAmQAAmQAAmQAAmQAAmECVCJCdPgbxIgARIgARIgARIgARIggdIToBJTehExgyRAAiRAAiRAAiRAAiRAAmECVGLCNPibBEiABEiABEiABEiABEig9ASoxJReRMwgCZAACZAACZAACZAACZBAmACVmDAN/iYBEiABEiABEiABEiABEig9ASoxpRcRM0gCJEACJEACJEACJEACJBAmQCUmTIO/SYAESIAESIAESIAESIAESk+ASkzpRcQMkgAJkAAJkAAJkAAJkAAJhAlQiQnT4G8SIAESIAESIAESIAESIIHSE6ASU3oRMYMkQAIkQAIkQAIkQAIkQAJhAlRiwjT4mwRIgARIgARIgARIgARIoPQEqMSUXkTMIAmQAAmQAAmQAAmQAAmQQJgAlZgwDf4mARIgARIgARIgARIgARIoPQEqMaUXETNIAiRAAiRAAiRAAiRAAiQQJkAlJkyDv0mABEiABEiABEiABEiABEpPgEpM6UXEDJIACZAACZAACZAACZAACYQJUIkJ0+BvEiABEiABEiABEiABEiCB0hOgElN6ETGDJEACJEACJEACJEACJEACYQJUYsI0+JsESIAESIAESIAESIAESKD0BKjElF5EzCAJkAAJkAAJkAAJkAAJkECYAJWYMA3+JgESIAESIAESIAESIAESKD0BKjGlFxEzSAIkQAIkQAIkQAIkQAIkECZAJSZMg79JgARIgARIgARIgARIgARKT4BKTOlFxAySAAmQAAmQAAmQAAmQAAmECVCJCdPgbxIgARIgARIgARIgARIggdIToBJTehExgyRAAiRAAiRAAiRAAiRAAmECVGLCNPibBEiABEiABEiABEiABEig9ASalj6HGWWwSZMmavfdd9fG9s0336gXX3xRG4aeJEAC2RBYbrnl1A477JBNZAlimTdvnvryyy/VnDlz/M/vv/+e4O50QXfZZRe11FJLxd786KOPKs/zYv3pQQJ5EFh++eXVOeecExv13Llz1aBBg2L96ZEPAdfai8suuywW1JQpU9Rtt90W608PEjARwJvT+Y801tJH0LsJEyY4z6EeZM0y1sbz3L17d/0DWZCvKDTe6NGjvTPOOMPr1KlTLm3AV199pS3NKquskku6fBZq41loLDm1b99eWy9nzZrFetkI/SOX2oslllhCW8dGjRrFOtYIdayx2pwM05WolOJyMh8D/5AACdQrAVEg1J577qkGDx6sJk6cqDAy2LdvX4XZWzoSIAESIAESIIFyEqASU065MFckQAKNRKBDhw5q+PDhavbs2erII49spFwwWRIgARIgARIgAR0BKjE6OvQjARKoWwKtWrVSN9xwg7rzzjtVs2bN6pYDC04CJEACJEACZSRAJaaMUmGeSIAESkOgT58+/hKzddddtzR5YkZIgARIgARIoN4JUImp9xrA8pMACRgJQIEZM2aMatGihTEsA5AACZAACZAACeRPgEpM/oyZAgmQgAME2rZtq5544gkl1nYcKA2LQAIkQAIkQAK1TaBuzompbTEx9yRQnwReeuklNWzYsKoLjzNaVlppJQVLZCuvvLL/vcUWW6g111wzUdxbbrmlv+n/iCOOSHQfA5MACZAACZAACWRLgEpMtjwZGwmQQIYEPvroo1wPQuvSpYvad9991QEHHKDatWtnlfODDz5YXX755erdd9+1Cs9AJEACJEACJEAC2RPguojsmTJGEiCBGiHw+uuvq/PPP19hz8s111yjfv/9d2POmzZtqvr3728MxwAkQAIkQAIkQAL5EaASkx9bxkwCJFAjBKC8nHjiiapXr17qt99+M+YaszcbbLCBMRwDkAAJkAAJkAAJ5EOASkw+XBkrCZBADRJ48MEHrWZZsLm/d+/eNVhCZpkESIAESIAE3CBAJcYNObIUJEACGRG48MIL1fjx442x7bjjjsYwDEACJEACJEACJJAPASox+XBlrCRAAjVMYPjw4cbcb7XVVjS3bKTEACRAAiRAAiSQDwEqMflwZawkQAI1TOCWW25RP/74o7YEyyyzjILJZToSIAESIAESIIHiCVCJKZ45UyQBEig5gf/973/q3//+tzGXf/rTn4xhGIAESIAESIAESCB7AjwnJnumpYqxWbNmqmfPnmq77bZTq6++ulpttdXUqquu6n+WXHJJ9dVXX/mfL7/8Un388cfq6aefVqNHj1boxJXRodPYpk0b1bp1a788yPf06dPV1KlTjSPnZSqPa3IpE9us8vLZZ58Zo8KzVAsOh3127dpV4YDPtm3bqhVXXFGtsMIKatlll/Wf/08//VR98skn/mf27Nlq1qxZCmf0eJ5XuuKtv/76av/991f4RnvWsmVL/7Pccsup7777Tn377bf+58MPP1SvvfaawoGpr776amnKgjxvvvnmao011lBoz5B/HMI6d+5cn/nMmTMVPtOmTVPffPNN6fhHZWjttdf2rfWhbqFtxv9433z//fdqzpw5/gd1DGcrPfPMM1FRNMo1tsN67C1atFj4vm3VqpVvuRFtA+on3rs2Jun1KRTn6+JzB3poS3bZZRe/PcH7aN68eerzzz9XV155pd+eF0e48VLCW8r5z/LLLy/vY72bMGGCExz++Mc/emIu1hszZoz3888/6wsd4SsPgffcc895Z555pidn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x84bFZjC68ASSyzhTZ8+3ahgIMDPP//sDRo0yFtrrbWM+ZSlaN7+++/vjR492vvll1+s4hezy8Z45VFhGDJgHWAdYB1gHWAdYB1gHWjkOjB9t/b+BucmCzpnC/QZfpFAcQS22GIL9dJLL6lmzZpZJzpv3jz10UcfqQ8//ND/fP/996ply5ZKZlLUaqutplq3bq2aN29uHd/w4cPVUUcdZR2eAUmABEiABEiABEiABBqPwMxem97R9v6J/49KTOPJgCkLgX79+qmBAwc2CotJkyapLl26qN9++61R0meiJEACJEACJEACJEACyQjM6LVxp3b3T36LSkwybgydA4ETTjhBDR06VDVt2jSH2KOjhLnlo48+Wv3+++/RAXiVBEiABEiABEiABEigjASgvygqMWUUTR3mCdbIbrrpJn9ZWJ7Fnzt3rjr22GPVPffck2cyjJsESIAESIAESIAESCAfAr4SQxPL+cBlrAkJwMSxbNxXl156qfrhhx8S3m0OjiVjY8eOVZ06daICY8bFECRAAiRAAiRAAiRQagKciSm1eOozcy1atPCXeomVMdW5c+fUEMQ0mXr99dfVvffe68/yfPHFF6nj4o0kQAIkQAIkQAIkQAKlIMDlZKUQAzOhJbDOOusoLDXbbLPNVMeOHVX79u2VnP/SYP/Mr7/+qr788ksFJWXOnDn+93vvvaduvfVWNWvWLG389CQBEiABEiABEiABEqgpAlRiakpczGwDAjDLvMoqqyg5C0ZhnwsdCZAACZAACZAACZBAXRCgElMXYmYhSYAESIAESIAESIAESMAdAr4Sw4397giUJSEBEiABEiABEiABEiCBuiBAJaYuxMxCkgAJkAAJkAAJkAAJkIA7BKjEuCNLloQESIAESIAESIAESIAE6oIAlZi6EDMLSQIkQAIkQAIkQAIkQALuEKAS444sWRISIAESIAESIAESIAESqAsCVGLqQswsJAmQAAmQAAmQAAmQAAm4Q4BKjDuyZElIgARIgARIgARIgARIoC4IUImpCzGzkCRAAiRAAiRAAiRAAiTgDgEqMe7IkiUhARIgARIgARIgARIggbogQCWmLsTMQpIACZAACZAACZAACZCAOwSoxLgjS5aEBEiABEiABEiABEiABOqCAJWYuhAzC0kCJEACJEACJEACJEAC7hCgEuOOLFkSEiABEiABEiABEiABEqgLAlRi6kLMLCQJkAAJkAAJkAAJkAAJuEOASow7smRJSIAESIAESIAESIAESKAuCFCJqQsxs5AkQAIkQAIkQAIkQAIk4A4BKjHuyJIlIQESIAESIAESIAESIIG6IEAlpi7EzEKSAAmQAAmQAAmQAAmQgDsEqMS4I0uWhARIgARIgARIgARIgATqggCVmLoQMwtJAiRAAiRAAiRAAiRAAu4QoBLjjixZEhIgARIgARIgARIgARKoCwJUYupCzCwkCZAACZAACZAACZAACbhDgEqMO7JkSUiABEiABEiABEiABEigLghQiakLMbOQJEACJEACJEACJEACJOAOASox7siSJSEBEiABEiABEiABEiCBuiBAJaYuxMxCkgAJkAAJkAAJkAAJkIA7BP4/3SRQaP/MYcEAAAAASUVORK5CYII=';

  doc.addImage(dataImg, 'PNG', 10, 10, 90, 20)
  positionY = positionY + 25
  doc.setFontSize(22)
  doc.setFontType("bold")
  doc.text(data.name, 10, positionY)
  positionY = positionY + 7

  doc.setFontType("italic")
  doc.setFontSize(14)
  const date = new Date(data.updatedAt)
  doc.text(date.getHours() + ':' + date.getMinutes() + ' ' + map[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(), 10, positionY)
  positionY = positionY + 17
  doc.setFontType("normal")
}

function drawInfo() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(235, 235, 235)
  doc.roundedRect(10, positionY - 7, 170, 10, 1, 1, 'FD')
  doc.text('Total cards: ' + data.participants.length + '   ' + 'Total participants: ' + data.meta.cardCount, 15, positionY)
  positionY = positionY + 10
}

function drawHeaderBackground() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(235, 235, 235)
  doc.roundedRect(10, positionY, 170, 12, 1, 1, 'FD')
}

function drawContentBackground() {
  doc.setDrawColor(221, 221, 221)
  doc.setFillColor(255, 255, 255)
  doc.rect(10, positionY - 7, 170, 10, 'FD')
}

function checkPageBreak() {
  if (positionY > doc.internal.pageSize.height) {
    doc.addPage()
    drawDocBackground()
    positionY = 10
  }
}

function drawColumnTitle(column) {
    checkPageBreak()
    drawHeaderBackground()
    positionY = positionY + 7
    doc.text(column.placeholder, 15, positionY)
    positionY = positionY + 10
}

function drawRowContent(row) {
  if (row.selected) {
    doc.setFontType("bold")
  }

  drawContentBackground()

  doc.text('Votes ' + row.votes + ' - ' + row.value, 15, positionY)
  positionY = positionY + 10

  doc.setFontType("normal")

  if (row.nodes.length > 0) {
    row.nodes.map(function(node, index) {
      checkPageBreak()
      drawContentBackground()

      doc.text(node.value, 15 + doc.getStringUnitWidth('Votes ' + row.votes + ' - ') * 5, positionY)
      positionY = positionY + 10
    })
  }

  checkPageBreak()
}

drawDocBackground()
drawDocTitle()
drawInfo()

data.columns.map(function(column, index) {
  drawColumnTitle(column)

  column.rows.map(function(row, index) {
    drawRowContent(row)
  })
})

doc.output('dataurlnewwindow')
