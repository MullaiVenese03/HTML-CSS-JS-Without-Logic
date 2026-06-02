# Timer Project

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)

A simple countdown timer that starts when you enter a number and visually tracks progress using a shrinking progress bar.

## Preview

No local screenshot/preview image was found in this folder (the UI can be viewed in the live demo).

## Live Demo

[Timer Project](https://mullaivenese03.github.io/HTML-CSS-JS-Without-Logic/Timer-Project/)

## Features

- **Countdown timer** that starts on input change.
- **Progress bar** that updates every second based on remaining time.
- **Time’s up alert** when the timer reaches below zero.
- **Instant reset on new input** by clearing any previously running interval.

## Technologies Used

- HTML5
- CSS3
- JavaScript (`setInterval`, DOM events)

## Project Structure

```text
Timer-Project/
├─ index.html
├─ style.css
├─ script.js
└─ 404.html
```

## What I Learned

- **HTML**: mapping UI elements to clear IDs for dynamic updates.
- **CSS**: building a compact card layout and a gradient progress bar.
- **JavaScript**: managing intervals safely (clearing old timers) and updating UI on a fixed cadence.
- **UI/UX**: representing time visually with a progress bar instead of only numbers.
- **Architecture**: keeping timer state minimal (`currVal`, `totalVal`, `interval`) for predictable behavior.

## Challenges Faced

- **Multiple timers running**: entering a new value while a previous interval is still active.
- **Accurate progress math**: keeping the progress bar proportional to remaining time.
- **End condition handling**: preventing negative time from continuing forever.

## How I Solved Them

- **Cleared intervals** before starting a new countdown using `clearInterval(interval)`.
- **Computed progress** as \((currVal / totalVal) * 100\) and applied it to `progressBar.style.width`.
- **Stopped on completion**: alerted the user and cleared the interval when the time is up.

## Future Improvements

- Add pause/resume controls and keyboard shortcuts.
- Clamp values to non-negative integers and handle invalid inputs more gracefully.
- Add sound/vibration feedback on completion.
- Allow minutes/seconds input instead of only a raw number.

## Installation

```bash
git clone https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic.git
cd "HTML-CSS-JS-Without-Logic/Timer-Project"
```

Open `index.html` in your browser.

## Author

- Mullai Venese - [MullaiVenese03](https://github.com/MullaiVenese03/)
- Repository: [HTML-CSS-JS-Without-Logic](https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic)
