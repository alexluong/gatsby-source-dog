const axios = require("axios")

const URL = "https://dog.ceo/api"

exports.processBreedsOption = async option => {
  if (!option) {
    return { fetched: false }
  }

  let fetched = false
  let list = null
  let image = null

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

      image = status === 404 ? [] : imageData.message
    } catch (error) {
      throw new Error("Couldn't fetch random dog images.")
    }
  }

  return { fetched, list, image }
}

async function fetchImageByBreed(breed, random = false, number = 1) {
  try {
    let response

    if (!random) {
      response = await axios.get(`${URL}/breed/${breed}/images`)
    } else {
      // !FIXME: cannot add /number to random images by breed
      response = await axios.get(`${URL}/breed/${breed}/images/random`)
    }

    const { status, data } = response

    return status === 404 ? [] : data.message
  } catch (error) {
    throw new Error(
      `Couldn't fetch "${breed}" images. Please check to see if your dog breed is available: https://dog.ceo/dog-api/documentation/`
    )
  }
}

exports.processBreedOption = async option => {
  if (!option) {
    return { fetched: false }
  }

  if (typeof breed === "string") {
    const images = await fetchImageByBreed(breed.toLowerCase())
  }
}
