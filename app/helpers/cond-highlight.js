import Ember from 'ember';
import { htmlSafe } from '@ember/string';

// I know I could've used a RegExp here, but it felt a little cumbersome for
// this. I am also very aware that inlining the strings like this is not very
// beautiful and can lead to XSS and code execution, but htmlSafe will escape
// all potentially dangerous characters.
export function condHighlight([paragraph, highlight, ...rest]) {
  return htmlSafe(paragraph.replace(highlight, `<strong class='highlighted'>${highlight}</strong>`));
}

export default Ember.Helper.helper(condHighlight);
