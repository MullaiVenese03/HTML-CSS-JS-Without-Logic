# Car Slider

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)

A carousel-style landing page that cycles “car slides” using **DOM reordering** for next/previous navigation.

## Preview

This folder includes a preview video:

- `Preview-Video.mp4`

## Live Demo

[Car Slider](https://mullaivenese03.github.io/HTML-CSS-JS-Without-Logic/Car-Slider/)

## Features

- **Next / Previous navigation** that rotates slides by appending/prepending `.item` elements.
- **Layered slide layout** with image + content sections (left copy, right specs list).
- **CSS-driven transitions** and keyframe animations for content in/out states.
- **Responsive adjustments** for smaller widths (layout simplification and text resizing).

## Technologies Used

- HTML5
- CSS3 (keyframes, transitions, media queries)
- JavaScript (DOM selection + reordering)
- Font Awesome (icons via CDN)

## Project Structure

```text
Car-Slider/
├─ index.html
├─ style.css
├─ script.js
└─ Preview-Video.mp4
```

## What I Learned

- **HTML**: structuring complex slide content into reusable “item” blocks.
- **CSS**: staging content with `position: absolute`, z-index layering, and keyframe transitions.
- **JavaScript**: implementing a carousel by reordering nodes instead of calculating indices.
- **UI/UX**: keeping navigation simple (two buttons) and allowing the visuals to lead the experience.
- **Architecture**: separating “animation state” (CSS `:nth-child`) from “slide order” (JS DOM order).

## Challenges Faced

- **Carousel logic simplicity**: rotating content without complicated index math.
- **Animation timing**: coordinating CSS content animations when slides change order.
- **Asset paths**: ensuring image paths exist and are correct for deployment.

## How I Solved Them

- **DOM rotation**: used `appendChild(lists[0])` for next and `prepend(lists[last])` for previous.
- **CSS sequencing**: relied on `#slide .item:nth-child(...)` rules to determine which slide is “active”.
- **Deployment safety**: kept dependencies CDN-based (fonts/icons) and assets referenced from the project folder.

## Future Improvements

- Add touch/swipe support for mobile.
- Add autoplay with pause-on-hover.
- Add accessible keyboard navigation and focus states.
- Ensure all referenced local image assets are present and optimized.

## Installation

```bash
git clone https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic.git
cd "HTML-CSS-JS-Without-Logic/Car-Slider"
```

Open `index.html` in your browser.

## Author

- Mullai Venese - [MullaiVenese03](https://github.com/MullaiVenese03/)
- Repository: [HTML-CSS-JS-Without-Logic](https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic)
