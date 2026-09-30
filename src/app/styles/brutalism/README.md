# Brutalism

Web brutalism borrows its name from 1950s–70s Brutalist architecture (from *béton brut*, "raw concrete"), where structure and material were left exposed instead of being dressed up. On the web it surfaced around 2014–2016, catalogued by Pascal Deville's brutalistwebsites.com, as a reaction against polished, template-driven, interchangeable sites. Its philosophy is honesty of materials: let HTML look like HTML, show the grid, use the browser's defaults, and make the composition confrontational rather than comforting — while still being deliberately arranged.

## Key characteristics
- **Default typography, at extremes**: Times, Arial and Courier (the browser's stock fonts), set either enormous and tightly tracked or tiny and utilitarian, with little in between.
- **Stark colour**: black on white, default link blue `#0000EE` and visited purple `#551A8B`, and at most one harsh accent (pure red, safety yellow).
- **Exposed structure**: visible borders and rules, table-like grids, cells that read like a spreadsheet or a directory listing.
- **Raw elements**: underlined links, grey outset default buttons, bracketed `[nav]` links, `<marquee>`-style tickers. No rounded corners, no gradients, no soft shadows; if there is a shadow, it is a hard offset block.
- **Honesty of materials**: markup, file names, byte sizes, timestamps and HTTP status shown as content instead of hidden.
- **Anti-polish that is still composed**: scale contrast, abrupt collisions and white space are placed on purpose; it should feel raw, not broken or unreadable.
- **Minimal motion**: little or no animation; what exists (a ticker, an instant hover inversion) is abrupt, not eased.

## How this redesign applies it
- Fonts are Arimo, Tinos and Cousine, the metric-compatible clones of Arial, Times New Roman and Courier New, so the page looks "unstyled" on every OS. The name is set in Arimo Bold at 15vw with −0.065em tracking, next to 11–13px Cousine labels.
- The page starts with a black HTTP-style status bar (`GET /styles/brutalism · 200 OK · generated <timestamp>`), and each section is tagged with its own markup (`<section id="about">`). Image captions give the real file name, pixel dimensions and byte size, read from disk when the page renders.
- Everything sits on 2px black rules. The hero metadata is a `<dl>` laid out as a bordered key/value table, projects form a `NO. / FILE / ENTRY` grid and the footer is a literal `<table>`. Stack chips are table cells that share borders, not rounded pills.
- The palette is white, black, default link blue and purple (in the footer they are lightened on black to keep contrast), plus one red: it marks "ME", the marquee and the focus rings. The only shadows are hard 8px offset blocks.
- Hover is an instant inversion (links turn black or red blocks). A grey outset `[ ] show structure` button outlines every element, like a DOM inspector. The tech-stack ticker is the only motion, and it stops under `prefers-reduced-motion`.
- Screenshots start as high-contrast greyscale and show their true colour on hover or focus, the way raw material shows through.

## Learn more
- [Brutalist Websites](https://brutalistwebsites.com/): Pascal Deville's gallery that named and defined the web movement; hundreds of real examples.
- [Brutalist Web Design (David Copeland)](https://brutalist-web.design/): a set of guidelines arguing that brutalism means honesty to the web's materials, not ugliness.
- [Brutalism and Antidesign (Nielsen Norman Group)](https://www.nngroup.com/articles/brutalism-antidesign/): a usability-focused look at where the aesthetic helps and where it hurts.
- [Brutalist architecture (Wikipedia)](https://en.wikipedia.org/wiki/Brutalist_architecture): the architectural origin (Le Corbusier, the Smithsons, *béton brut*) behind the name.
- [Drudge Report](https://www.drudgereport.com/): a long-running live example of default fonts, bare links and a raw column layout at scale.
- [craigslist](https://www.craigslist.org/about/sites): the archetypal utilitarian site, a directory of plain blue links that has barely changed in decades.
