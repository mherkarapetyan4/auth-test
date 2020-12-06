export const storage = (key, value) => {
  if(!value) {
    return localStorage.getItem(key)
  }  

  localStorage.setItem(key, value)
}