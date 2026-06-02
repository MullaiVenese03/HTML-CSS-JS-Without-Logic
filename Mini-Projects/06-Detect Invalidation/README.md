# Detect Invalidation (Email Validation UI)

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)

A small validation demo that uses **native HTML5 email validation** + CSS pseudo-classes to show **valid/invalid** states, including a shake animation on invalid input.

## Preview

No local screenshot/preview image was found in this folder (the UI can be viewed in the live demo).

## Live Demo

[Detect Invalidation](https://mullaivenese03.github.io/HTML-CSS-JS-Without-Logic/Mini-Projects/06-Detect%20Invalidation/)

## Features

- **Native email validation** via `type="email"` and a `pattern` rule.
- **Instant visual feedback**:
  - red border + shake animation when invalid
  - green border when valid
- **No JavaScript needed** (pure HTML + CSS behavior).

## Technologies Used

- HTML5 (form validation)
- CSS3 (pseudo-classes + keyframes)

## Project Structure

```text
06-Detect Invalidation/
├─ index.html
└─ style.css
```

## What I Learned

- **HTML**: leveraging built-in validation attributes (`type`, `pattern`, `title`) to guide users.
- **CSS**: using `:invalid` and `:valid` to style input states without extra code.
- **UI/UX**: communicating errors clearly and immediately to reduce confusion.

## Challenges Faced

- **Triggering validation states** consistently across browsers.
- **Non-intrusive feedback**: making invalid state noticeable without being overwhelming.

## How I Solved Them

- Combined `type="email"` with a clear regex-style `pattern` and a helpful `title`.
- Used a short shake animation (`0.2s`) to draw attention while keeping it subtle.

## Future Improvements

- Add helper text under the input (example format) and live hints.
- Add `prefers-reduced-motion` support to disable shake for users who prefer less motion.

## Installation

```bash
git clone https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic.git
cd "HTML-CSS-JS-Without-Logic/Mini-Projects/06-Detect Invalidation"
```

Open `index.html` in your browser.

## Author

- Mullai Venese - [MullaiVenese03](https://github.com/MullaiVenese03/)
- Repository: [HTML-CSS-JS-Without-Logic](https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic)

