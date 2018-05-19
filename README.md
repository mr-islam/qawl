# al-kitab
Read the Qur'ān from wherever and whenever you want.

[image]

## Goal
Have a simple interface that launches directly onto Surah selection. At the bottom will be a toggle for the user to select what mushaf they want (indopak or madina). Both masāhif will be from online PDF scans, which will be broken up into images (page-by-page or how? decide when facing it). Selecing a surah will load the relevant page actually, and then keyboard shortcut and beautiful floating gui will let people go the next/prev page. The application will function perfectly offline.

## To-do

page change logic flow:
	DONE: event buttonLeft press, right press, add +2
	IN PROG: animation to fade away/flip/slideRight, then block:none
			change src of image left/right
			block:display again to show image <--- how would an animation fit here?
