import Reveal from "./node_modules/reveal.js/dist/reveal.esm.js";
import Markdown from "./node_modules/reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "./node_modules/reveal.js/plugin/highlight/highlight.esm.js";

let deck = new Reveal({
  plugins: [Markdown, Highlight],
});
deck.initialize({
  // Display presentation control arrows
  controls: true,

  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial: true,

  // Determines where controls appear, "edges" or "bottom-right"
  controlsLayout: "bottom-right",

  // Visibility rule for backwards navigation arrows; "faded", "hidden"
  // or "visible"
  controlsBackArrows: "faded",

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  // - true:    Show slide number
  // - false:   Hide slide number
  //
  // Can optionally be set as a string that specifies the number formatting:
  // - "h.v":   Horizontal . vertical slide number (default)
  // - "h/v":   Horizontal / vertical slide number
  // - "c":   Flattened slide number
  // - "c/t":   Flattened slide number / total slides
  //
  // Alternatively, you can provide a function that returns the slide
  // number for the current slide. The function should take in a slide
  // object and return an array with one string [slideNumber] or
  // three strings [n1,delimiter,n2]. See #formatSlideNumber().
  slideNumber: false,

  // Can be used to limit the contexts in which the slide number appears
  // - "all":      Always show the slide number
  // - "print":    Only when printing to PDF
  // - "speaker":  Only in the speaker view
  showSlideNumber: "all",

  // Use 1 based indexing for # links to match slide number (default is zero
  // based)
  hashOneBasedIndex: false,

  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash: true,

  margin: 0,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0,
  maxScale: 2,

  disableLayout: false,

  width: 1280,
  height: 1280,

  display: "flex",
});
