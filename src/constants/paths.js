export const PATHS = Object.freeze({
  ROOT: '/',
  _AUTH: 'auth',
  _POST: 'posts', 

  get AUTH() {
    return `${this.ROOT}${this._AUTH}`;
  }, 
  POST(id) {
    return `${this.ROOT}${this._POST}/${id}`;
  },
  get POSTS() {
    return `${this.ROOT}`;
  },
});