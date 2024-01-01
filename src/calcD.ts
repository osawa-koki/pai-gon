function rotate (x: number, y: number, deg: number): number[] {
  const xx = (Math.cos(Math.PI * deg / 180) * x) - (Math.sin(Math.PI * deg / 180) * y)
  const yy = (Math.sin(Math.PI * deg / 180) * x) + (Math.cos(Math.PI * deg / 180) * y)
  return [xx, yy].map(e => Math.round(e * 10000) / 10000)
}

export default function calcD (gon: number): {
  points: {
    out: string
    in: string
  }
  length: {
    out: number
    in: number
  }
} {
  const r = 25
  const theta = 180 / gon
  const answer = {
    points: {
      out: '',
      in: ''
    },
    length: {
      out: 0,
      in: 0
    }
  };
  (function () { // 外接
    const x = r
    const y = Math.tan(Math.PI * theta / 180) * x
    let xy
    let i
    const ary = []
    for (i = 0; i < gon; i++) {
      xy = rotate(x, y, 360 * i / gon)
      ary.push(`${xy[0] + 50} ${xy[1] + 50}`)
    }
    const len = Math.tan(Math.PI * theta / 180) * x * gon * 2
    answer.points.out = ary.join(', ')
    answer.length.out = len
  })();
  (function () { // 内接
    const x = Math.cos(Math.PI * theta / 180) * r
    const y = Math.tan(Math.PI * theta / 180) * x
    let xy
    let i
    const ary = []
    for (i = 0; i < gon; i++) {
      xy = rotate(x, y, 360 * i / gon)
      ary.push(`${xy[0] + 50} ${xy[1] + 50}`)
    }
    const len = Math.tan(Math.PI * theta / 180) * x * gon * 2
    answer.points.in = ary.join(', ')
    answer.length.in = len
  })()
  return answer
}
