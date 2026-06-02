# 3D Image Slider (Marvel)

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)

A CSS-driven **3D rotating image carousel** using `transform-style: preserve-3d`, perspective transforms, and keyframe animation for a continuous rotation effect.

## Preview

No local screenshot/preview image was found in this folder (the UI can be viewed in the live demo).

## Live Demo

[3D Image Slider](https://mullaivenese03.github.io/HTML-CSS-JS-Without-Logic/3D-Image-Slider/)

## Features

- **3D ring layout**: each slide is placed around a circle using a calculated `rotateY(...)` + `translateZ(...)`.
- **Continuous rotation** using a `@keyframes` animation on the slider container.
- **Large hero typography** with stroke effect using a pseudo-element (`h1::after` + `-webkit-text-stroke`).
- **Model foreground layer** via a background image in CSS (for depth and composition).

## Technologies Used

- HTML5
- CSS3 (3D transforms, keyframes, pseudo-elements)

## Project Structure

```text
3D-Image-Slider/
├─ index.html
├─ style.css
└─ README.md
```

## What I Learned

- **HTML**: structuring repeated slide items and using CSS variables for configuration.
- **CSS**: building 3D scenes with perspective, `preserve-3d`, and transform composition.
- **UI/UX**: using motion carefully to create an immersive effect without needing JavaScript.
- **Architecture**: controlling behavior via CSS custom properties (`--quantity`, `--position`) for scalable layout rules.

## Challenges Faced

- **3D positioning math**: distributing items evenly in a circle and keeping them facing the viewer.
- **Layering + readability**: balancing the rotating slider with big typography and a foreground model.
- **Asset management**: ensuring all referenced local image assets exist and load correctly on deploy.

## How I Solved Them

- **Even distribution**: used `rotateY(calc((var(--position) - 1) * (360 / var(--quantity))*1deg))`.
- **Depth**: pushed slides outward using `translateZ(500px)` and controlled camera with perspective.
- **Layering**: set z-index for slider/content and used a pseudo-element stroke for the headline.

## Future Improvements

- Add responsive tuning for smaller screens (scale, translateZ, and typography).
- Add hover-to-pause and reduced-motion support for accessibility.
- Add captions and navigation controls (optional JS).

## Installation

```bash
git clone https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic.git
cd "HTML-CSS-JS-Without-Logic/3D-Image-Slider"
```

Open `index.html` in your browser.

## Author

- Mullai Venese - [MullaiVenese03](https://github.com/MullaiVenese03/)
- Repository: [HTML-CSS-JS-Without-Logic](https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic)
