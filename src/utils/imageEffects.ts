export const adjustBrightness = (element: HTMLImageElement, brightness: number) => {
  element.style.filter = `brightness(${brightness})`;
};