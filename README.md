# The World in One Day — 19 November 2026

A one-page newspaper front page that sums up 19 November 2026 in a
single image, entered in make.fun's `news-image-20261119` bounty
($250, top 50 share the pot).

## What the image shows

Masthead **"THE WORLD IN ONE DAY"**, dated **Thursday 19 November
2026**, with **48 stories** and **15 illustrations** — three drawn
hero scenes, twelve drawn panels (one per medium story), a
region-count strip, a UTC timeline strip, a dotted world map with 10
numbered pins, a 33-item "ALSO ON THURSDAY" list and a DATE CHECK
footer.

**Heroes:** GTA VI launches after 13 years (lead) · Trump, Xi and
Putin meet in Shenzhen · US and Iran trade fire across the Gulf.

**Medium stories (each illustrated):** Cyclone Akvan · Nvidia's new
chief promises pay rises · Jeffries nominated for Speaker · Myanmar
genocide verdict at the UN court · Israeli tanks cross the Gaza
ceasefire line · Anthropic's $1.4tn debut · COP31 talks in Antalya ·
the IEA's Hormuz warning (traffic at 42%) · unrest in Bangladesh (28
districts) · South Korea's exports pass $1,000bn · IMF debt warning
(100% of GDP) · the US–Venezuela military deal.

**Also on Thursday (33 briefs):** the EU's €45bn Ukraine loan,
Voyager 1 a light-day out, Australia sanctioning settlers, Peltola's
Alaska win, Fed minutes, Modi meeting the Waleses, the $190.4m Van
Gogh, UK energy bills up £443, Prince Harry, gold at a 13-month low,
Fiji's drought, Indonesia's fires and the Moïse murder verdict —
plus 20 more. Region counts: Asia 8 · Europe 9 · Americas 14 ·
Africa 1 · Middle East 6 · Oceania 3 · Global 7.

Every story was verified against 19 November 2026 wire reports and
roundups (AP, Reuters, BBC, NDTV, The Hindu, Horizon). The DATE
CHECK footer lists stories left out (first reported earlier in the
week) and stories not yet news (Akvan landfall, COP31 final text Fri
20 Nov, Sea Lion ruling 28 Nov).

## How it was made

The image (`entry.png`, 1024×1024 PNG, ~186 KB) was drawn by the
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
