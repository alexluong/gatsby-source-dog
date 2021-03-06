import crypto from "crypto"
import { processBreedsOption, processBreedOption } from "./process-options"

async function sourceNodes({ actions, createNodeId }, options) {
  delete options.plugins

  function turnBreedImageIntoGatsbyNode(image) {
    const nodeId = createNodeId(`dog-image-${image.id}`)
    const nodeContent = JSON.stringify(image)
    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex")

    const nodeData = {
      ...image,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: "DogImage",
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    }

    return nodeData
  }

  // Do the work
  const { createNode } = actions

  const breedsResponse = await processBreedsOption(options.breeds)
  if (breedsResponse.fetched) {
    // Create DogBreedList
    if (breedsResponse.list) {
      const nodeContent = JSON.stringify(breedsResponse.list)
      const nodeData = {
        list: breedsResponse.list, // TODO: Change this to an array
        id: createNodeId("dog-breed-list-1"),
        parent: null,
        children: [],
        internal: {
          type: "DogBreedList",
          content: nodeContent,
          contentDigest: crypto
            .createHash("md5")
            .update(nodeContent)
            .digest("hex"),
        },
      }
      createNode(nodeData)
    }

    // Create DogImage
    breedsResponse.images.forEach(imgURL => {
      const imgObj = createImageObjectFromURL(imgURL)
      const nodeData = turnBreedImageIntoGatsbyNode(imgObj)
      createNode(nodeData)
    })
  }

  const breedResponse = await processBreedOption(options.breed)
  if (breedResponse.fetched) {
    Object.entries(breedResponse.images).forEach(([name, images]) => {
      images.forEach(imgURL => {
        const imgObj = createImageObjectFromURL(imgURL)
        const nodeData = turnBreedImageIntoGatsbyNode(imgObj)
        createNode(nodeData)
      })
    })
  }
  return
}

function createImageObjectFromURL(url) {
  // url = https://images.dog.ceo/breeds/sheepdog-english/n02105641_13952.jpg
  const lastIndexOfSlash = url.lastIndexOf("/")
  const id = url.slice(lastIndexOfSlash + 1, url.lastIndexOf("."))
  const breedRecognizer = "breeds/"
  const breed = url
    .slice(
      url.indexOf(breedRecognizer) + breedRecognizer.length,
      lastIndexOfSlash,
    )
    .split("-")
    .reverse()
    .reduce((a, v) => `${a}${v.replace(/^\w/, c => c.toUpperCase())} `, "")
    .trim()

  return { id, breed, url }
}

export default sourceNodes
