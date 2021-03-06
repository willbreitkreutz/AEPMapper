// this function takes a map scale, the denominator in something like
// 1 : 250,000 and translates that to the zoom scale from a 0 - 20 range
// using the scale table found on https://wiki.openstreetmap.org/wiki/Zoom_levels

const zoomLevels = [
  500000000,
  250000000,
  150000000,
  70000000,
  35000000,
  15000000,
  10000000,
  4000000,
  2000000,
  1000000,
  500000,
  250000,
  150000,
  70000,
  35000,
  15000,
  8000,
  4000,
  2000,
  1000,
  500,
];

module.exports = (scale, ifnull) => {
  console.log("testing", scale);
  if (!scale) return ifnull;
  if (scale >= zoomLevels[0]) return 0;
  if (scale < zoomLevels[zoomLevels.length - 1]) return zoomLevels.length - 1;
  let zoom = 0;
  for (var i = 1; i < zoomLevels.length; i++) {
    if (scale >= zoomLevels[i] && scale < zoomLevels[i - 1]) zoom = i;
    break;
  }
  return zoom;
};
