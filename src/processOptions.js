const axios = require("axios")

const URL = "https://dog.ceo/api"

exports.processBreedsOption = async option => {
  if (!option) {
    return { fetched: false }
  }

  let fetched = false
  let list = null
  let images = null

  // Fetch list of dog breeds
  if (option.list) {
    fetched = true

    try {
      const listResponse = await axios.get(`${URL}/breeds/list/all`)
      list = listResponse.data.message
    } catch (error) {
      throw new Error("Couldn't fetch list of all dog breeds.")
    }
  }

  // Fetch random dog images
  if (option.random && option.random.number !== 0) {
    fetched = true

    let { number } = option.random
    if (typeof number !== "number" || number < 0) {
      number = 1
    }

    try {
      const { status, data: imageData } = await axios.get(
        `${URL}/breeds/image/random/${number}`
      )

      images = status === 404 ? [] : imageData.message
    } catch (error) {
      throw new Error("Couldn't fetch random dog images.")
    }
  }

  return { fetched, list, images }
}

exports.processBreedOption = async option => {
  if (!option) {
    return { fetched: false }
  }

  let images = {}

  if (typeof option === "string") {
    // option = name of a breed
    const { images: breedImages } = await fetchImageByBreed({ name: option })
    images[option] = breedImages
  } else if (Array.isArray(option)) {
    /**
     * Has to do the {...number, ...breed} thing
     * because dog API doesn't allow fetching multiple random images
     * from a breed
     * -> We're adding number * Promise into promiseArr
     */
    const promiseArr = []
    option.forEach(breed => {
      if (typeof breed === "string") {
        promiseArr.push(fetchImageByBreed({ name: breed }))
      } else {
        if (!breed.random) {
          promiseArr.push(fetchImageByBreed({ name: breed.name }))
        } else {
          Array.from(Array(breed.number), () => {
            promiseArr.push(
              fetchImageByBreed({ name: breed.name, random: true })
            )
          })
        }
      }
    })

    return Promise.all(promiseArr).then(results =>
      results.reduce((a, v) => {
        if (a[v.name]) {
          a[v.name] = [...a[v.name], ...v.images]
        } else {
          a[v.name] = v.images
        }
        return a
      }, {})
    )
  } else {
    throw new Error("option.breed needs to be either a string or array")
  }

  return { images }
}

function fetchImageByBreed({ name, random = false }) {
  return new Promise(async (resolve, reject) => {
    const breed = name.toLowerCase()

    const returnObj = {}
    returnObj.name = name

    let response

    try {
      if (!random) {
        response = await axios.get(`${URL}/breed/${breed}/images`)
      } else {
        // !FIXME: cannot add /number to random images by breed
        response = await axios.get(`${URL}/breed/${breed}/images/random`)
        // return axios.get(`${URL}/breed/${breed}/images/random`/${number})
      }
    } catch (error) {
      reject(new Error(`Couldn't fetch images of breed: ${name}`))
    }

    if (response.status === 404) {
      returnObj.images = []
    } else {
      if (typeof response.data.message === "string") {
        returnObj.images = [response.data.message]
      } else {
        returnObj.images = response.data.message
      }
    }

    resolve(returnObj)
  })
}
