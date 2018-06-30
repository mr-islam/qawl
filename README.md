# al-kitab

![Mockup](https://preview.ibb.co/iFnSk8/mockup.png)


--------

As salāmu ´alaykum dear sisters and brothers,

There are dozens of amazing Qur'ān applications on mobile devices, and some great ones online for all devices (like the awesome quran.com) — but there was nothing up-to-date that targeted desktop computers/laptops.

Al-Kitāb is an uncompromising desktop Qur'ān reading app, featuring:

* Ultra high quality images of the Medina Mushaf

* Precise, user-controlled zoom settings

* Go to any page of the Qur'ān by selecting a surah, "turning" the page, or directly typing in your page of choice

* Do the above using keyboard shortcuts! Simply start typing your page and then press enter to go there, and then use the left/right arrow keys to flip pages quickly

* Restart reading from exactly where you left-off between app restarts

* Simple and focused to allow you to be the same!

* Longevity — this is an open-source project, so all of you are invited to give feedback, report bugs, and/or develop improvements

## Install
Head to the [releases page](https://github.com/mr-islam/al-kitab/releases).

Alternatively, try out a limited version of [al-Kitāb, online](https://mr-islam.github.io/al-kitab/) — 
with a lower quality mushaf. This is just so you can give it a try; 
the real experience is on the desktop app!

## Dev
1. Clone the repo
2. `cd` to the directory 
3. Run `yarn` to install (dev) dependencies
4. `yarn start` to run the app locally

**[Mushaf Source](https://archive.org/details/ar_Mushaf_AlMadinah_new_TruePDF)** — broken up using a terminal script

**Structure**: `Package.json` calls `Main.js`, which loads `index.html`, 
which then loads `script.js`/`surahs.js`/`style.css` || Or, simply start the sequence from 
`index.html` onwards by launching it in a web browser.

**Packaging**: Linux and Windows was done on my personal Linux machine using `yarn dist`; 
packaging Mac attempted using Travis and `yarn release`.

## To-do

- **ASAP**: test packages on Mac and Windows… (I only have Linux!)

- zoom keyboard shortcuts
- button to launch current surah on quran.com (allowing easy access to translations/recitations)
  - by comparing current page using if-statements to the page definitons from `surahs.js`
  - only issue: if they are in a long surah they will be taken to it's beginning…
- animations upon page change
  - if too complex, just make a fade in/out box on the left/right respective of page depending on page change saying the new page and showing an arrow
- bookmarks feature
  - entails small button to make/unmake bookmark, a dropdown to visit saved bmarks, some array in localstorage
- Marketing
  - reach out on twitter, publications, reddit

- remove unnecesssary parts of electron to trim app size 
  - use Juli engine? electrino?
