
# Test Presentation

This is a playground to implement and preview the test presentation.

The presentation will be used in a bigger project, with a more complex build environment so these pages have to be lightweight. We provided a quick and dirty framework that should be enough to implement everything.

## Important

> Do NOT modify package.json. If you really need anything extra, ask. This is just a simplified environment so you can start building. The result will be part of a larger project, which is not linked here.

- Do NOT use any CSS frameworks (e.g. Bootstrap, Tailwind, etc), we need a clean CSS solution with human identifiable id/class names
- Use the HTML files provided to create the page layouts
- We provide the JavaScript framework. You can add utility/helper functions if needed

## Getting Started

The project uses Node v14+ (with NPM 6), and Snowpack for quick iteration, with SASS/SCSS support.

> Run `npm i` in the project folder to install the dependencies.

> The live server can be started with `npm start`.

## Folder structure

- `/public` contains the static files, and here are the HTML files to use.
  - `assets` should contain images, fonts, etc
- `/src` contains the files that need any build steps
  - `css` can contain files with SCSS syntax
  - `scripts` JavaScript files
  - it's OK to create extra files and `@import` them if needed

## Implementation

There is a desktop version and a mobile version of the presentation with different behavior.

> Before starting with the implementation make sure to check the Figma document, and go through the info boxes in there for hints on how to implement everything.

### Desktop

The desktop version can be paged through like a slideshow. The page transitions are handled via [Highway.js](https://highway.js.org/) and [GSAP](https://greensock.com/).

The desktop pages are separated into html files each, that are named like in the Figma document (e.g. `public/Amenities01.html`). The one exception is the Intro page, which is named `public/index.html`. There is also `public/_desktopTemplate.html`, which contains a skeleton template, if needed.

> ONLY work inside the `page-container` div, do not change anything outside of it, or the header.

Styling is separated into 2 files:

- `src/css/brand.css` should contain CSS reset, typography, custom attributes; basically it should be easy to change the presentation look and feel by just changing some parameters here
- `src/css/layout.css` should contain all the separate page layouts

The page transitions should be based on the reference animations, and implemented as follows:

I have created a basic setup in `src/scripts/script.js`, and added some transition examples in `src/scripts/transitions/`. Implement the GSAP-based transitions here. You can modify my examples as well if needed.

### Mobile

The mobile version is a fullscreen page (for the Intro), and a vertical scrolling page (for the rest of the content), no paging mechanism, you can just layout the pages after each other according to the Figma document.

The mobile version should be implemented in two files:

- `public/index-mobile.html` should contain the Intro page as a fullscreen page
- `public/_mobile.html` for the scrolling page with the rest of the content

> ONLY work inside the `page-container` div, do not change anything outside of it, or the header.

Styling should be implemented as follows:

- `src/css/brand_m.css` should contain any setup that is different from the desktop version, e.g.: font sizing
- `src/css/layout_m.css` should contain layouting for everything on the page

The transition effects should be scroll-based (see reference animations):

There are GSAP ScrollTrigger-based transitions and I have created an example setup in `src/scripts/script_m.js`. Implement the transition effects based on these examples.

## Good luck

If you have any questions/concerns, ask away!
