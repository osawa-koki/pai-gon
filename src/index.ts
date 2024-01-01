import calcD from './calcD'
import { svgElement, minusButtonElement, plusButtonElement } from './elements'

let count = 4

const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
centerCircle.setAttribute('r', '0.1')
centerCircle.setAttribute('cx', '50')
centerCircle.setAttribute('cy', '50')
centerCircle.style.fill = 'black'
centerCircle.style.stroke = 'black'
centerCircle.style.strokeWidth = '1'
svgElement.appendChild(centerCircle)

const baseCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
baseCircle.setAttribute('r', '25')
baseCircle.setAttribute('cx', '50')
baseCircle.setAttribute('cy', '50')
baseCircle.style.fill = 'none'
baseCircle.style.stroke = 'black'
baseCircle.style.strokeWidth = '0.3'
svgElement.appendChild(baseCircle)

const d = calcD(count)
const dOut = document.createElementNS('http://www.w3.org/2000/svg', 'path')
dOut.setAttribute('d', `M ${d.points.out} Z`)
dOut.style.fill = 'none'
dOut.style.strokeWidth = '0.3'
svgElement.appendChild(dOut)

const dIn = document.createElementNS('http://www.w3.org/2000/svg', 'path')
dIn.setAttribute('d', `M ${d.points.in} Z`)
dIn.style.fill = 'none'
dIn.style.strokeWidth = '0.3'
svgElement.appendChild(dIn)

function update (): void {
  const d = calcD(count)
  dOut.setAttribute('d', `M ${d.points.out} Z`)
  dIn.setAttribute('d', `M ${d.points.in} Z`)
}

minusButtonElement.addEventListener('click', () => {
  count--
  update()
  if (count <= 3) minusButtonElement.disabled = true
})

plusButtonElement.addEventListener('click', () => {
  count++
  update()
  if (count > 3) minusButtonElement.disabled = false
})
