export default function loops () {
  console.groupCollapsed('mock array');
  [...Array(5)].forEach(console.log)
  console.groupEnd()
}
