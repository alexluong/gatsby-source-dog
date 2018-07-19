# Gatsby Source Dog

Fetch data from [Dog CEO API](https://dog.ceo/dog-api)

---

## Installation

```bash
yarn add gatsby-source-dog
```

## How to Use

Visit [this](https://dog.ceo/dog-api/breeds-list) or [this](https://dog.ceo/dog-api/documentation/) to get the list of available dog breeds.

In your `gatsby-config.js`, add the plugin and options:

```
{
  ...
    plugins: [
      ...
      {
        resolve: 'gatsby-source-hire-with-google',
        options: {
          breeds: {
            list: true,
            random: {
              number: 5
            },
          },
          breed: [
            "husky",
            "Border Collie",
            "retriever-golden",
            {
              name: "corgi",
            },
            {
              name: "Great Dane",
              random: true,
            },
            {
              name: "pug",
              random: true,
              number: 3,
            },
          ],
        },
      },
    ],
    ...
}
```

## How to Query

**To query all images:**

```
  allDogImage {
    edges {
      node {
        id
        breed
        url
        internal {
          ...
        }
      }
    }
  }
```

**To query all images based on dog breed:**

```
  allDogImage(filter: { breed: { eq:  "Border Collie" } }) {
    edges {
      node {
        id
        breed
        url
        internal {
          ...
        }
      }
    }
  }
```

**To query one image based on id:**

```
  dogImage(id: { eq: "cb75eb4f-0bf4-56ca-ba4a-680b5678526d" }) {
    id
    breed
    url
    internal {
      ...
    }
  }
```
