# The World in One Day — 19 November 2026

A one-page newspaper front page that sums up 19 November 2026 in a
single image, entered in make.fun's `news-image-20261119` bounty
($250, top 50 share the pot).

## What the image shows

Masthead **"THE WORLD IN ONE DAY"**, dated **Thursday 19 November
2026**, with **48 stories** drawn from that day's wire reports and
**15 illustrations** — three drawn hero scenes, twelve drawn panels
(one per medium story), a region-count strip, a UTC timeline strip,
a dotted world map with 10 numbered pins, a 33-item numbered
"ALSO ON THURSDAY" list and a DATE CHECK footer:

**Heroes (1–3)**
1. **Lead — Vice City / Gaming:** GTA VI launches after 13 years —
   rolling midnight launch, New Zealand first, close to 16 million
   preorders and $1.5bn in pre-sales.
2. **Shenzhen / The Summit:** Trump, Xi and Putin meet — the first
   trilateral of the three leaders, one hour, nuclear arms on the
   table, no deal expected.
3. **The Gulf:** US and Iran trade fire as the Gulf war widens — US
   jets hit a missile site on Qeshm Island; Iran struck a US base in
   Kuwait and a radar site in Bahrain.

**Medium stories (4–15), each with its own drawn illustration**
4. **Bay of Bengal:** Cyclone Akvan bears down on India's east coast,
   landfall expected between Machilipatnam and Puri (110 km/h gusts).
5. **Tech:** Nvidia's new chief promises pay rises as China chip
   sales stop — Colette Kress takes over after Jensen Huang resigns;
   H-series shipments to China halted.
6. **Washington:** Democrats nominate Hakeem Jeffries for Speaker —
   poised to become the first African-American Speaker of the House.
7. **The Hague / Justice:** Myanmar faces a historic genocide verdict
   at the UN court over the Rohingya massacres.
8. **Gaza:** Israeli tanks advance across the Gaza ceasefire line in a
   rare ground incursion beyond the Yellow Line.
9. **Business / AI:** Anthropic poised for a $1.4tn stock market
   debut — the largest AI listing on record.
10. **Climate / COP31:** Ministers race to unblock COP31 talks in
    Antalya as a new draft text goes round.
11. **Energy / IEA:** The Hormuz crisis is the "greatest threat ever"
    to energy security; traffic through the strait is at 42% of
    normal.
12. **Bangladesh:** The interim leader's home is torched as unrest
    hits 28 districts.
13. **Trade:** South Korea's exports pass $1,000bn for the first time
    on strong chip demand.
14. **Economy / IMF:** Global public debt is set to hit 100% of GDP,
    the highest since the Second World War.
15. **Caracas:** The US and Venezuela sign a military cooperation deal
    after a surprise visit by the US defence secretary.

**Also on Thursday (16–48):** the EU's €45bn Ukraine loan proposal,
Voyager 1 reaching a light-day from Earth, Australia sanctioning
Israeli settlers, Peltola winning the Alaska Senate race, Fed minutes
pointing to more rate rises, Modi meeting the Prince and Princess of
Wales, the $190.4m Van Gogh record, Gaza rains displacing 46,000,
Estonia shutting its Russia border, Houthis seizing ground in the Red
Sea, the Crimean Bridge attacked again, North Korea firing missiles,
Microsoft–ByteDance AI talks, an NSA network outage, Somalia
accusing the UAE of secret bases, a climber surviving a 100m fall in
the Alps, Duckett's 133 putting England on top, UK energy bills up
£443 a year, Prince Harry saying he would rejoin the Army, gold at a
13-month low ($3,733.76), Fiji declaring a drought disaster,
Indonesian fires ravaging 3m hectares, and a guilty verdict in the
Moïse murder case — plus 10 more briefs.

**Region counts:** Asia 8 · Europe 9 · Americas 14 · Africa 1 ·
Middle East 6 · Oceania 3 · Global 7 = 48 stories.

**DATE CHECK footer:** stories left out because they were first
reported earlier in the week (Trump's separate Putin/Xi meetings,
the Senegal Faye split, Takaichi–Putin talks, a Taiwan Tu-95
overflight) and stories that are not yet news (Akvan landfall, the
COP31 final text due Fri 20 Nov, the Sea Lion ruling on 28 Nov).

Every story was verified against 19 November 2026 wire reports and
roundups (AP, Reuters, BBC, NDTV, The Hindu, Horizon).

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
