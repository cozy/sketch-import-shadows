import sketch from 'sketch'

const { Shape, Artboard, Group, Text, UI } = sketch

// documentation: https://developer.sketchapp.com/reference/api/

const initialValue = `none
rgba(29, 33, 42, 0.08) 0px 2px 4px 0px, rgba(29, 33, 42, 0.06) 0px 4px 16px 0px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.08) 0px 3px 5px 0px, rgba(29, 33, 42, 0.06) 0px 4px 17px 0px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.09) 0px 4px 6px 0px, rgba(29, 33, 42, 0.07) 0px 5px 19px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.09) 0px 5px 8px 1px, rgba(29, 33, 42, 0.07) 0px 5px 20px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.09) 0px 6px 9px 1px, rgba(29, 33, 42, 0.07) 0px 5px 22px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.1) 0px 7px 10px 1px, rgba(29, 33, 42, 0.07) 0px 6px 23px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.1) 0px 8px 11px 1px, rgba(29, 33, 42, 0.08) 0px 6px 24px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.1) 0px 9px 13px 1px, rgba(29, 33, 42, 0.08) 0px 6px 26px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.11) 0px 10px 14px 1px, rgba(29, 33, 42, 0.08) 0px 7px 27px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.11) 0px 11px 15px 2px, rgba(29, 33, 42, 0.08) 0px 7px 29px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.11) 0px 12px 16px 2px, rgba(29, 33, 42, 0.09) 0px 7px 30px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.12) 0px 13px 17px 2px, rgba(29, 33, 42, 0.09) 0px 8px 31px 4px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.12) 0px 13px 19px 2px, rgba(29, 33, 42, 0.09) 0px 8px 33px 4px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.13) 0px 14px 20px 2px, rgba(29, 33, 42, 0.09) 0px 9px 34px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.13) 0px 15px 21px 2px, rgba(29, 33, 42, 0.1) 0px 9px 35px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.13) 0px 16px 22px 3px, rgba(29, 33, 42, 0.1) 0px 9px 37px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.14) 0px 17px 23px 3px, rgba(29, 33, 42, 0.1) 0px 10px 38px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.14) 0px 18px 25px 3px, rgba(29, 33, 42, 0.1) 0px 10px 40px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.14) 0px 19px 26px 3px, rgba(29, 33, 42, 0.11) 0px 10px 41px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.15) 0px 20px 27px 3px, rgba(29, 33, 42, 0.11) 0px 11px 42px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.15) 0px 21px 28px 3px, rgba(29, 33, 42, 0.11) 0px 11px 44px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.15) 0px 22px 30px 4px, rgba(29, 33, 42, 0.11) 0px 11px 45px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.16) 0px 23px 31px 4px, rgba(29, 33, 42, 0.12) 0px 12px 47px 8px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px
rgba(29, 33, 42, 0.16) 0px 24px 32px 4px, rgba(29, 33, 42, 0.12) 0px 12px 48px 8px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px`

const shadowRx = /rgba\(([0-9]+), ([0-9]+), ([0-9]+), ([0-9\.]+)\) ([0-9\.]+)px ([0-9\.]+)px ([0-9\.]+)px ([0-9\.]+)px/

const hex = n => {
  const s = n.toString(16)
  return s.length == 1 ? '0' + s : s
}

const parseShadowSpec = shadowSpec => {
    const m = shadowRx.exec(shadowSpec)
    if (!m) {
      console.log('Bad shadow: ', shadowSpec)
        throw new Error("Shadow must be in the form rgba(29, 33, 42, 0.16) 0px 24px 32px 4px")
    } 
    let r = Math.round(parseFloat(m[1], 10))
    let g = Math.round(parseFloat(m[2], 10))
    let b = Math.round(parseFloat(m[3], 10))
    let a = Math.round(parseFloat(m[4], 10) * 255)

    const color = `#${hex(r)}${hex(g)}${hex(b)}${hex(a)}`

    return {
        color: color,
        x: parseFloat(m[5], 10),
        y: parseFloat(m[6], 10),
        blur: parseFloat(m[7], 10),
        spread: parseFloat(m[8], 10),
    }
}

const parseShadows = shadowSpecs => {
  debugger
  console.log(shadowSpecs, typeof shadowSpecs)
  try {
    if (shadowSpecs == 'none') {
        return []
    } 
    const shadows = shadowSpecs.split(', rgba\(')
        .map((x, i) => i > 0 ? 'rgba(' + x : x)
    return shadows.map(parseShadowSpec)
  } catch (e) {
    console.error(e)
    return false
  }
}

const cardSize = { w: 100, h: 100 }
const padding = { x: 20, y: 20 }

const getInputFromUser = (prompt, options) => new Promise((resolve, reject) => {
  UI.getInputFromUser(
    prompt,
    options,
    (err, value) => {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    }
  )
})

export default async function() {
  var document = sketch.getSelectedDocument()
  var page = document.selectedPage
  
  var input = await getInputFromUser('Paste shadows', {
    initialValue: initialValue,
    numberOfLines: 30,
    description:
      'This is an example JSON color palette. Replace it with your own JSON code.',
  })

  const lines = input.split('\n').filter(Boolean)
  const shadows = lines.map(parseShadows).filter(Boolean)

  const artboard = new Artboard({
    parent: page,
    name: 'shadows',
    frame: { y: 0, width: 1000, height: 1000 },
    flowStartPoint: true,
  })

  const cols = 6
  const rows = Math.round(shadows.length / 6) 
  for (let i = 0; i < rows; i++ ) { 
    for (let j = 0; j < cols; j++ ) {
      const n = i * cols + j
      const g = new Group({
        name: `elevation-${n}`,
        parent: page, 
        frame: { x: 110 * i + padding.x, y: 110 * j + padding.y, width: cardSize.w, height: cardSize.h }
      })
      const s = new Shape({
        parent: g,
        style: {
          borders: [],
          shadows: shadows[n],
          fills: ['#fff']
        },
        frame: { x: 0, y: 0, width: cardSize.w, height: cardSize.h }
      })
      const t = new Text({
        parent: g,
        frame: {x: 0, y: 0, width: cardSize.w, height: cardSize.h },
        text: `${n}`,
        alignment: Text.Alignment.center,
      })
    }
  }
}
