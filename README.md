# Qawl

[![logo](https://i.imgur.com/ZABEsxq.png)](https://qawl.navedislam.com)

## Why Qawl?

There are dozens of amazing Qur'ān applications on mobile devices, and some great ones online for all devices (like the awesome quran.com) — but there was nothing up-to-date that targeted desktop computers/laptops with only useful features (without excess) and beautiful design. 

Qawl is an uncompromising desktop Qur'ān reading app, featuring:

- Lightning-fast startup and performance ⚡
- Ultra high-quality scanned mushaf 📷
- Beautiful-yet-effective design 🔮
- Powerful navigation using table of contents, page flip, or direct entry 🎯
- Precise, user-controlled zoom 🔎
- One-click access to recitations, tafsir and translations 🖱
- Offline support ☁
- Comprehensive keyboard shortcuts 🎹
- Stunning dark theme 🌙
- Resume directly at your last read page, zoom and theme 💾
- Natural controls with simple click-and-drag scrolling, touchpad pinch gestures, and automatic entry of page when pressing number keys ✋🏼
- Helpful tooltips to explain all features and teach keyboard shortcuts 💭

See [**Qawl in action**](http://www.youtube.com/watch?v=EWtOurhTzqo "").


### Installation
Head to the [releases page](https://qawl.navedislam.com/#section3) and choose the appropriate download for your operating system. 


### Keyboard Shortcuts
*Tooltips within the app also explain the keyboard shortcuts for the respective function*

| Action            | Shortcut |
|-------------------|----------|
| Turn page left    | `A`      |
| Turn page right   | `D`      |
| Next Surah        | `W`      |
| Previous Surah    | `S`      |
| Zoom in           | `=`      |
| Zoom out          | `-`      |
| Toggle fullscreen | `F11`    |
| Toggle theme      | `T`      |
| Jump to last page | `E`      |
| Open on quran.com | `Q`      |

-----

### Development
1. Clone the repo
2. `cd` to the directory 
3. Run `npm i` to install (dev) dependencies
4. `npm start` to run the app locally
5. Build using `npm run dist`

**[Mushaf Source](https://archive.org/details/ar_Mushaf_AlMadinah_new_TruePDF)** — broken up using a [terminal script](https://gist.github.com/mr-islam/67de74c60adb9d10057d9b83d19b5563) with `convert` from `imagemagick` at a DPI of 150. 

**Structure**: `package.json` calls `main.js`, which loads `index.html`, which then loads `script.js`/`surahs.js`/`style.css`.

#### Design Decisions:

- Mobile devices will not be supported; there are already amazing native apps built for them. Qawl supports tablet screen-sizes, though.
- This is meant to replicate the mushaf, so single-page view won't be supported. 
- Notes & bookmarks will not be added to the app; keeping separate (digital/manual) notebooks is encouraged instead.
  
