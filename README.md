# Thyranathaurus Rexth

![t-rexth](./pics/t_rexth.jpg)

## About

- Split Keyboard
- Wireless
- Ortholinear
- 36 keys
- MX switch compatible
- Hot swap sockets
- Tenting puck compatible

### Notes

PCB track width and spacing is 0.15mm. Make sure your manufacturer is capable of printing boards with those specs. I used [JLCPCB](https://jlcpcb.com/capabilities/pcb-capabilities).

## Credits/Thanks

- Motivated by [Ben Vallack's videos](https://www.youtube.com/channel/UC4NNPgQ9sOkBjw6GlkgCylg)
- Created with [Ergogen v3](https://github.com/ergogen/ergogen)
- Lots of help from members of [Ergogen Discord](https://discord.gg/nbKcAZB)
- Keycaps by [Pseudoku](https://github.com/pseudoku/PseudoMakeMeKeyCapProfiles)
- Artwork by [Perce](https://madebyperce.com)
- Tenting Puck by [lacohe](https://www.thingiverse.com/thing:5336898)

## Parts

| Type | Part | Manufacturer |
|------|-------------------------|----------------|
| Tactile Button | [C&K PTS636 SP43 LFS](https://www.mouser.com/ProductDetail/CK/PTS636-SP43-LFS?qs=vLWxofP3U2wWkB4yXWLrEg%3D%3D&utm_source=eciaauthorized&utm_medium=aggregator&utm_campaign=PTS636-SP43-LFS&utm_term=PTS636-SP43-LFS&utm_content=CK-Switches) | [C&K Switches](https://www.ckswitches.com/media/2779/pts636.pdf) |
| Slide Switch | [EAO 09.10290.01](https://www.mouser.com/ProductDetail/EAO/091029001?qs=2pKMaj72wiH1g4B38TGGGA%3D%3D&utm_source=eciaauthorized&utm_medium=aggregator&utm_campaign=091029001&utm_term=091029001&utm_content=EAO) | [EAO](https://eao.com) |
| Machine Pin Sockets | [Mill-Max 801 INTERCONNECT MACHINED PIN SOCKET](https://www.mouser.com/ProductDetail/Mill-Max/801-47-012-10-012000?qs=5aG0NVq1C4x40xNvDlnKzg%3D%3D) | [Mill-Max](https://www.mill-max.com/products/socket/801-xx-xxx-10-012000) |
| Socket Pins | [Mill-Max 3330 Straight Pin](https://www.mouser.com/ProductDetail/Mill-Max/3330-0-00-15-00-00-03-0?qs=s8Nb1z4Wn%2FSwJBcI97lmUw%3D%3D) | [Mill-Max](https://www.mill-max.com/products/pin/3330) |
| JST PH 2.0 Connector | [TE 1775469-2](https://www.mouser.com/ProductDetail/TE-Connectivity/1775469-2?qs=fvVej%2FMj3jdYOde%252BssG5lg%3D%3D) | [TE Connectivity](https://www.te.com/usa-en/product-1775469-2.html) |

## Choc 30

The [choc30](./choc30) folder contains the first design of this keyboard. It has 30 keys, requires choc compatible switches, and has minimal y spacing. I abandoned that version for a couple reasons. I found the keycaps and spacing too small, and I could not find an enjoyable 30 key layout.

If you are interested in that version beware of a couple issues:

- Attempting to solder battery wires onto the PCB without shorting your battery can be tricky.
- The spacing between the innermost columns is not wide enough, thus the philadelphia minimalist keycaps [do not fit both columns](./pics/choc30_single.jpg).
