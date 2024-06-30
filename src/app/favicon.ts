export function faviconChange(artistId: string = '') {
  const link: HTMLLinkElement = document.querySelector('[rel="icon"]')!;
  link.href =
    artistId.length && artistId === 'master'
      ? 'artist/master/favicon.ico'
      : 'favicon.ico';
}
