# Animation Card

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)

Two animated card designs showcasing hover-driven glow/border effects using CSS pseudo-elements and hue-rotate animation.

## Preview

![Animation Card Preview](Preview-Gif.gif)

## Live Demo

[Animation Card](https://mullaivenese03.github.io/HTML-CSS-JS-Without-Logic/Mini-Projects/11-Animation%20card/)

## Features

- **Card 1**: animated outer border/glow using `::before` and `filter: hue-rotate(...)`.
- **Card 2**: rotating accent strip using `::before` + animated rotation on hover, with an inner panel using `::after`.
- **Responsive layout**: cards stack vertically on smaller screens.
- **Modern dark theme** with high-contrast visuals.

## Technologies Used

- HTML5
- CSS3 (pseudo-elements, keyframes, media queries)

## Project Structure

```text
11-Animation card/
├─ index.html
├─ style.css
└─ Preview-Gif.gif
```

## What I Learned

- **CSS pseudo-elements**: creating decorative layers without extra markup.
- **Hover interactions**: triggering animations conditionally for a more intentional effect.
- **Layout**: switching between row and column layouts using a single breakpoint.

## Challenges Faced

- **Layer ordering**: keeping animations behind content while still visible.
- **Overflow handling**: preventing animated layers from clipping incorrectly.

## How I Solved Them

- Controlled stacking with positioning and z-index rules inside `.wrapper`.
- Used `overflow: hidden` on the second card to contain the rotating strip effect.

## Future Improvements

- Add focus-visible styles for accessibility.
- Add more card variants (neon, gradient, glass) and reusable variables for theming.

## Installation

```bash
git clone https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic.git
cd "HTML-CSS-JS-Without-Logic/Mini-Projects/11-Animation card"
```

Open `index.html` in your browser.

## Author

- Mullai Venese - [MullaiVenese03](https://github.com/MullaiVenese03/)
- Repository: [HTML-CSS-JS-Without-Logic](https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic)

