---
path: "/docs/api"
name: ""
---

# API Explanation

The `options` is an object that can take 2 key-value pairs.

1.  `breeds`: this lets us interact with every kind of dog breeds in the database.
2.  `breed`: this gives us images from a specific breed of dog.

---

## Breeds Configuration

`breeds` option takes in an object that may contain these fields:

### 1. list

Fetch a list of all dog breed

- `type: Boolean`
- `default: false`

[Example](/examples/list)

Query:

```
{
  dogBreedList {
    list
  }
}
```

### 2. Random

Get random dog images from all dog breeds. The number of images is specified by the `number` option.

- `type: Boolean`
- `default: false`

### 3. Number

Specify the number of random dog images that we want

- `type: Number`
- `default: 1`

[Example](/examples/all-breeds)

---

## Breed Configuration

`breed` option takes in a string, an object, or most commonly, an array of strings and objects.

To specify which dog breed we want to fetch, we can do it in 2 ways:

- `string`: `"collie", "collie-border", "Border Collie"`: These are all acceptable way of identifying a dog breed. If given a string, the plugin will fetch `ALL` available images of this breed.
- `object`: This gives us more control over the number of images we want to fetch.

```
{
  name: "Border Collie",
  random: true,
  number: 3,
}
```

#### NOTE:

- For the `object` option, if `random` is `false`, the plugin will fetch all available images of the breed.
- `random` and `number` will behaves similarly to those fields in `breeds` option.

#### EXAMPLES:

- [One breed image](/examples/one-breed)
