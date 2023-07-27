export const setCssVar = (prop: any, val: any, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}
