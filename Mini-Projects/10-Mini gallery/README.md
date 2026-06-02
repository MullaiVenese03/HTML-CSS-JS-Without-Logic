# Mini Gallery (Sticky Scroll)

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)

A vertical, scroll-driven image gallery that uses **CSS `position: sticky`** to create a “stacked panel” viewing experience.

## Preview

![Mini Gallery Preview](Preview-Gif.gif)

## Live Demo

[Mini Gallery](https://mullaivenese03.github.io/HTML-CSS-JS-Without-Logic/Mini-Projects/10-Mini%20gallery/)

## Features

- **Sticky full-screen cards** so each image occupies the viewport while scrolling.
- **Overlay titles** placed above each image for context.
- **Simple, immersive gallery layout** without any JavaScript.

## Technologies Used

- HTML5
- CSS3 (`position: sticky`, full-viewport sizing)

## Project Structure

```text
10-Mini gallery/
├─ index.html
├─ style.css
├─ Preview-Gif.gif
├─ anime.jpg
├─ ironman.png
├─ pokemon.jpeg
├─ spiderman.jpg
└─ venom.jpg
```

## What I Learned

- **HTML**: structuring repeated “card” sections for consistent layout.
- **CSS**: using sticky positioning to create scroll-driven visual storytelling.
- **UI/UX**: keeping the gallery minimal so the images remain the focus.

## Challenges Faced

- **Sticky behavior**: making sure each card stays pinned at the top during scroll.
- **Text visibility**: ensuring titles stay readable over different images.

## How I Solved Them

- Set each card to full viewport size and used `position: sticky; top: 0`.
- Positioned headings absolutely with a high z-index to keep them above images.

## Future Improvements

- Add responsive title placement and a background gradient behind text for readability.
- Add a thumbnail index or quick navigation.
- Optimize images for faster load and better performance.

## Installation

```bash
git clone https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic.git
cd "HTML-CSS-JS-Without-Logic/Mini-Projects/10-Mini gallery"
```

Open `index.html` in your browser.

## Author

- Mullai Venese - [MullaiVenese03](https://github.com/MullaiVenese03/)
- Repository: [HTML-CSS-JS-Without-Logic](https://github.com/MullaiVenese03/HTML-CSS-JS-Without-Logic)

