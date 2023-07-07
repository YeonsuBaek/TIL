export function findElement(statingElement, selector) {
  let currentElement = statingElement;

  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
}
