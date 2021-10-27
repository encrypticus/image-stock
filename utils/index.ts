export const mobileWidth = 641;
export const tabletWidth = 801;

export const getImageUrlFromVideoMeta = (pictureId: string) =>
  `https://i.vimeocdn.com/video/${pictureId}_640x360.jpg`;

export const getImageUrlFromImageMeta = (previewUrl: string) =>
  previewUrl.replace(/_(\d+)\.(.+)$/, (_, num, ext) => '__' + 340 + '.' + ext);
