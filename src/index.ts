import calcD from './calcD'
import { svgElement, minusButtonElement, plusButtonElement, inPolygonElement, outPolygonElement, inLengthElement, outLengthElement, paiMinElement, paiMaxElement } from './elements'

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

const dOut = document.createElementNS('http://www.w3.org/2000/svg', 'path')
dOut.style.fill = 'none'
dOut.style.strokeWidth = '0.3'
svgElement.appendChild(dOut)

const dIn = document.createElementNS('http://www.w3.org/2000/svg', 'path')
dIn.style.fill = 'none'
dIn.style.strokeWidth = '0.3'
svgElement.appendChild(dIn)

function update (): void {
  const d = calcD(count)
  dOut.setAttribute('d', `M ${d.points.out} Z`)
  dIn.setAttribute('d', `M ${d.points.in} Z`)

  //   e.textContent = count;
  // });
  // ind.textContent = (Math.round(rt["length"]["in"] * 10000) / 10000).toFixed(4);
  // outd.textContent =  (Math.round(rt["length"]["out"] * 10000) / 10000).toFixed(4);
  // min.textContent = rt["length"]["in"] / 2 / 25;
  // max.textContent = rt["length"]["out"] / 2 / 25;

  inPolygonElement.textContent = count.toString()
  outPolygonElement.textContent = count.toString()

  inLengthElement.textContent = (Math.round(d.length.in * 10000) / 10000).toFixed(4)
  outLengthElement.textContent = (Math.round(d.length.out * 10000) / 10000).toFixed(4)

  paiMinElement.textContent = (d.length.in / 2 / 25).toString()
  paiMaxElement.textContent = (d.length.out / 2 / 25).toString()
}
update()

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
