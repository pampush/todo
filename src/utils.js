class Utils {
  static createIcon({ url, alt = '' }) {
    const myImg = new Image();
    myImg.src = url;
    myImg.alt = alt;
    // myImg.classList.add(className)
    return myImg;
  }

  // import all images in Map ['src path', 'dist path']
  static importAll(r) {
    return new Map(r.keys().map((value) => [value, r(value)]));
  }
}

const images = Utils.importAll(require.context('./img', false, /\.(png|jpe?g|svg|gif)$/));
export { Utils, images };
