export const storage = (key, value) => {
  if(!value) {
    return localStorage.getItem(key)
  }  

  localStorage.setItem(key, value)
}

export const deleteKeyStorage = key => {
  localStorage.removeItem(key);
}