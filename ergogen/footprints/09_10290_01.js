module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'T', // for Toggle
        side: 'F'
    },
    body: p => {
        const left = p.param.side == 'F' ? '-' : ''
        const right = p.param.side == 'F' ? '' : '-'

        return `
          (module SWITCH_09-10290_EOZ (layer F.Cu)
            (descr "https://www.digikey.com/en/products/detail/eao/09.10290.01/8733108?utm_adgroup=Switches&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Supplier_EAO%20Corporation_1948_Co-op&utm_term=&utm_content=Switches&gclid=EAIaIQobChMIlK6T1v-P9wIV-AiICR2OqAvWEAQYASABEgIJMvD_BwE https://media.digikey.com/pdf/Data%20Sheets/EAO%20PDFs/series1k2_201004.pdf")
            (tags "2.5mm height SPDT right angle slide")

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference ${p.ref} (at 2.54 1.1938) (layer F.SilkS) ${p.ref_hide}
              (effects (font (size 1 1) (thickness .15)))
            )

            (fp_line (start 4.9276 7.0866) (end 4.9276 9.4742) (layer ${p.param.side}.Fab) (width .1))
            (fp_line (start 2.54 7.0866) (end 2.54 9.4742) (layer ${p.param.side}.Fab) (width .1))
            (fp_line (start 2.54 9.4742) (end 4.9276 9.4742) (layer ${p.param.side}.Fab) (width .1))
            (fp_line (start -2.7178 -.9398) (end -2.7178 9.7282) (layer ${p.param.side}.CrtYd) (width .05))
            (fp_line (start -2.7178 9.7282) (end 7.7978 9.7282) (layer ${p.param.side}.CrtYd) (width .05))
            (fp_line (start 7.7978 9.7282) (end 7.7978 -.9398) (layer ${p.param.side}.CrtYd) (width .05))
            (fp_line (start 7.7978 -.9398) (end -2.7178 -.9398) (layer ${p.param.side}.CrtYd) (width .05))
            (fp_line (start -2.4638 1.1938) (end 7.5438 1.1938) (layer ${p.param.side}.Fab) (width .1))
            (fp_line (start 7.5438 1.1938) (end 7.5438 7.0866) (layer ${p.param.side}.Fab) (width .1))
            (fp_line (start 7.5438 7.0866) (end -2.4638 7.0866) (layer ${p.param.side}.Fab) (width .1))
            (fp_line (start -2.4638 7.0866) (end -2.4638 1.1938) (layer ${p.param.side}.Fab) (width .1))

            ${'' /* pins */}
            (pad 3 thru_hole circle (at 0 0) (size 1.3716 1.3716) (drill .8636) (layers *.Cu *.Mask) ${p.net.from.str})
            (pad 1 thru_hole circle (at 2.54 0) (size 1.3716 1.3716) (drill .8636) (layers *.Cu *.Mask) ${p.net.to.str})
            (pad 2 thru_hole circle (at 5.08 0) (size 1.3716 1.3716) (drill .8636) (layers *.Cu *.Mask))
          )
        `
    }
};
