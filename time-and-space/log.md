# Issues Log

## March 15

- [X] Scroll bar moves back to halfway point after overall container hits end (bottom, bottom), does not show any additional HTML content
  - suspect the issue is with pinning

- [X] On refresh, if scroll was not at the starting point, the content that should be on the page at that point in the scroll, is not on the page
  - might also be related to pinning, but could be a timeline issue or a dynamic generation of JS content issue

- [ ] Question: reversing animations, overriding animations in the timeline

- [ ] allow single, repeating animations to run while applying timeline animations

## March 16

- [X] prevent trigger from being added to elements repeatedly on the exploding animation
  
- [ ] Transitions: copying elements to new section in same locations vs one long timeline
  - long timeline sort of unmanageable

## March 17

- [ ] animation repeats without deleting item from the DOM, but I want to keep the items there to appear again when scrolling back
