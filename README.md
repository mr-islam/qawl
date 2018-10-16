# al-kitab

[![logo](https://i.imgur.com/KSL8Ae9.png)](http://www.youtube.com/watch?v=YYVfddZCyMs "Click for Video Demonstration")

--------

## Why Qawl?

There are dozens of amazing Qur'ān applications on mobile devices, and some great ones online for all devices (like the awesome quran.com) — but there was nothing up-to-date that targeted desktop computers/laptops with only useful features (without excess) and beautiful design. 

Al-Kitāb is an uncompromising desktop Qur'ān reading app, featuring:

* Ultra **high-quality** images of the Medina Mushaf that millions are familiar with

* Precise, user-controlled **zoom**

* Easy **navigation** of the Qur'ān by selecting a surah, "turning" the page, or directly typing in your page of choice

* **Keyboard shortcuts**! Simply start typing your page and then press enter to go there, and then use the left/right arrow keys to flip pages quickly, and many more!

* Launch al-Kitab **lightning fast**, and restart reading from exactly where you left-off, with the same zoom and theme

* **Longevity** — this is an open-source project, so all of you are invited to give feedback, report bugs, and/or develop improvements. It is not dependent on any one person.

* With one click of a button, open the current surah on Quran.com to benefit from **audio recitations, analyses and translations**

* Soothe your eyes with 

### Installation
Head to the [releases page](https://qawl.navedislam.com/#section3) and choose the appropriate download for your operating system. 


### Keyboard Shortcuts
*Tooltips also explain the keyboard shortcuts for the respective function*

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
  
