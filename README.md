# al-kitab

![screenshot](https://preview.ibb.co/iFnSk8/mockup.png)


--------

There are dozens of amazing Qur'ān applications on mobile devices, and some great ones online for all devices (like the awesome quran.com) — but there was nothing up-to-date that targeted desktop computers/laptops.

Al-Kitāb is an uncompromising desktop Qur'ān reading app, featuring:

* Ultra **high-quality** images of the Medina Mushaf millions are familiar with

* Precise, user-controlled **zoom**

* Easy **navigation** of the Qur'ān by selecting a surah, "turning" the page, or directly typing in your page of choice

* **Keyboard shortcuts**! Simply start typing your page and then press enter to go there, and then use the left/right arrow keys to flip pages quickly

* Launch al-Kitab **lightning fast**, and restart reading from exactly where you left-off

* **Longevity** — this is an open-source project, so all of you are invited to give feedback, report bugs, and/or develop improvements

* With one click of a button, open the current surah on Quran.com to benefit from **audio recitations and translations**

## Installation
Head to the [releases page](https://github.com/mr-islam/al-kitab/releases) and choose the appropriate download for your operating system. Install and benefit!

Alternatively, try out a limited version of [al-Kitāb, online](https://mr-islam.github.io/al-kitab/) — this has a lower quality mushaf to make it load faster.

# Usage

The interface has been tested thorougly for intuitivity — all actions are done by the bottom bar: surah is selected by clicking the text on the left, numbers at the center are page numbers (click, type the desired page and hit enter. Or, just start typing numbers and it will automatically gain focus), the arrow icons to its left and right flip the page respectively, the globe icon in the right-cluster opens the current surah on quran.com, and the zoom keys are after that. 

There are also keybaord shortcuts for your convenience:

| Action  | Key |
| ------------- | ------------- |
| Turn page right  | `→`  |
| Turn page left  | `←`  |
| Zoom in | `+` |
| Zoom out | `-` |

## Development
1. Clone the repo
2. `cd` to the directory 
3. Run `yarn` to install (dev) dependencies
4. `yarn start` to run the app locally

**[Mushaf Source](https://archive.org/details/ar_Mushaf_AlMadinah_new_TruePDF)** — broken up using a terminal script with 

**Structure**: `Package.json` calls `Main.js`, which loads `index.html`, which then loads `script.js`/`surahs.js`/`style.css`. Or, simply start the sequence from `index.html` onwards by launching it in a web browser.

**Packaging**: `electron-builder` is used. Windows was done on my PC using `yarn dist`; 
packaging for Mac attempted using Travis and `yarn release`.

## Decisions:

- Mobile devices will not be supported; there are already amazing native apps built for them 
- This is meant to replicate the mushaf, so single-page view won't be supported
- Notes & bookmarks will not be added to the app; keeping separate (digital/manual) notebooks is encouraged
  
