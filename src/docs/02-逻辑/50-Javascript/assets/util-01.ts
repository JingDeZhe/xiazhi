//#region getSearchObject
export function getSearchObject() {
  const obj = {}
  const sp = new URLSearchParams(window.location.search)
  for (const [k, v] of sp.entries()) {
    obj[k] = v
  }
  return obj
}
//#endregion getSearchObject

export {}
