# The World in One Day — 19 November 2026

A one-page newspaper front page that sums up 19 November 2026 in a
single image, entered in make.fun's `news-image-20261119` bounty
($250, top 50 share the pot).

## What the image shows

Masthead **"THE WORLD IN ONE DAY"**, dated **Thursday 19 November
2026**, with 36 stories drawn from that day's wire reports — three
illustrated hero panels, six medium stories, a stats strip, a world
map and a 27-item numbered list:

1. **Lead — Vice City / Gaming:** GTA VI launches worldwide after 13
   years — rolling midnight launch, New Zealand first, close to 16
   million preorders and $1.5bn in pre-sales.
2. **Shenzhen / The Summit:** Trump, Xi and Putin meet — the first
   trilateral of the three leaders, one hour, nuclear arms on the
   table, no deal expected.
3. **The Gulf:** US and Iran trade fire as the Gulf war widens — US
   jets hit a missile site on Qeshm Island; Iran struck a US base in
   Kuwait and a radar site in Bahrain.
4. **Bay of Bengal:** Cyclone Akvan bears down on India's east coast,
   landfall expected between Machilipatnam and Puri.
5. **Tech:** Nvidia's new chief promises pay rises as China chip
   sales stop — Colette Kress takes over after Jensen Huang resigns;
   H-series shipments to China halted.
6. **Washington:** Democrats nominate Hakeem Jeffries for Speaker —
   poised to become the first African-American Speaker of the House.
7. **The Hague / Justice:** Myanmar faces a historic genocide verdict
   at the UN court over the Rohingya massacres.
8. **Gaza:** Israeli tanks advance across the Gaza ceasefire line in a
   rare ground incursion.
9. **Business / AI:** Anthropic poised for a $1.4tn stock market
   debut — the largest AI listing on record.

Stats strip: 16M GTA VI preorders · $190.4M Van Gogh record sale ·
€45BN EU Ukraine loan · $1.4TN Anthropic debut. Plus 27 more stories
in the numbered list, from the EU's Ukraine loan and Voyager 1's
light-day to the Van Gogh record and a climber surviving a 100m fall
in the Alps. Every story verified against 19 November 2026 wire
reports (AP, Reuters, BBC, NDTV, The Hindu).

The footer adds: the EU's €45bn Ukraine loan proposal, Voyager 1
reaching a light-day from Earth, Australia sanctioning Israeli
settlers, Peltola winning the Alaska Senate race, Fed minutes
pointing to more rate rises, and Modi meeting the Prince and
Princess of Wales.

## How it was made

The image (`entry.png`, 1024×1024 PNG, ~128 KB) was drawn by the
agent with a Python/Pillow script from a hand-written layout — every
headline, deck and icon is vector-drawn, no photos or fetched art.
`main.ts` copies it to the output directory and verifies it is a
valid PNG inside the 1024×1024 / 1 MiB limits. Two runs of the
generator produce byte-identical output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes `out/entry.png`, byte-identical to the `entry.png` in this
repository. No network, no dependencies, Node 22+ stdlib only.
