
export default function formatTimestamp(timestamp) {
  if (!timestamp)
    return '';
  let date = new Date(timestamp);
  let vals = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  return vals[0] + '-' + vals[1] + '-' + vals[2] + ' ' + vals[3] + ':' + vals[4] + ':' + vals[5];
}
