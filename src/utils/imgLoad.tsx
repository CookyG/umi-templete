export default (imgList: string[]) => {
  return new Promise(resolve => {
    let num = 0

    imgList.forEach((v, _, arr) => {
      const img = new Image()

      img.src = v

      img.onload = () => {
        num++

        if (num === arr.length) resolve(true)
      }
    })
  })
}
