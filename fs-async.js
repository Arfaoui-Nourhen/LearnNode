const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result_fi) => {
  if (err) {
    console.log(err) 
  }
  const first = result_fi
  //err is the first arguemnt and it takes the error and the second takes the result if there is no error
  readFile('./content/second.txt', 'utf8', (err, result_sec) => {
    if (err) { 
      console.log(err)
      return   
    }
    const second = result_sec
    writeFile(
      './content/result-asynco.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result_fin) => {
        if (err) {
          console.log(err)
          
        }
      }
    )
  })
})
