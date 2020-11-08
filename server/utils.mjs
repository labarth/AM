const whiteList = ['http://localhost:3000'];

export const getWhiteList = (origin, callback) => {
  if (whiteList.indexOf(origin) !== -1 || !origin) {
    callback(null, true)
  } else {
    callback(new Error('Not allowed by CORS'))
  }
}