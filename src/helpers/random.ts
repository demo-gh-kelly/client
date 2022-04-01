export default function random(): string {
  if ('crypto' in window) {
    const arr = new Uint8Array(40 / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
  }

  return Math.random().toString(36).substr(2, 5);
}

function dec2hex(dec: number): string {
  return dec.toString(16).padStart(2, '0');
}
