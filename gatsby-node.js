"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var crypto = require("crypto");

var _require = require("./processOptions"),
    processBreedsOption = _require.processBreedsOption,
    processBreedOption = _require.processBreedOption;

exports.sourceNodes = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, options) {
    var actions = _ref.actions,
        createNodeId = _ref.createNodeId;
    var turnBreedImageIntoGatsbyNode, createNode, breedsResponse, nodeContent, nodeData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            turnBreedImageIntoGatsbyNode = function turnBreedImageIntoGatsbyNode(image) {
              var nodeId = createNodeId("dog-image-" + image.id);
              var nodeContent = JSON.stringify(image);
              var nodeContentDigest = crypto.createHash("md5").update(nodeContent).digest("hex");

              var nodeData = Object.assign({}, image, {
                id: nodeId,
                parent: null,
                children: [],
                internal: {
                  type: "DogImage",
                  content: nodeContent,
                  contentDigest: nodeContentDigest
                }
              });

              return nodeData;
            };

            delete options.plugins;

            // Do the work
            createNode = actions.createNode;
            _context.next = 5;
            return processBreedsOption(options.breeds);

          case 5:
            breedsResponse = _context.sent;

            if (breedsResponse.fetched) {
              // Create DogBreedList
              if (breedsResponse.list) {
                nodeContent = JSON.stringify(breedsResponse.list);
                nodeData = {
                  list: breedsResponse.list,
                  id: createNodeId("dog-breed-list-1"),
                  parent: null,
                  children: [],
                  internal: {
                    type: "DogBreedList",
                    content: nodeContent,
                    contentDigest: crypto.createHash("md5").update(nodeContent).digest("hex")
                  }
                };

                createNode(nodeData);
              }

              // Create DogImage
              breedsResponse.image.forEach(function (imgURL) {
                var imgObj = createImageObjectFromURL(imgURL);
                var nodeData = turnBreedImageIntoGatsbyNode(imgObj);
                createNode(nodeData);
              });
            }

            // const breedResponse = await processBreedOption(options.breed)
            // console.log(breedResponse)
            return _context.abrupt("return");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

function createImageObjectFromURL(url) {
  // url = https://images.dog.ceo/breeds/sheepdog-english/n02105641_13952.jpg
  var lastIndexOfSlash = url.lastIndexOf("/");
  var id = url.slice(lastIndexOfSlash + 1, url.lastIndexOf("."));
  var breedRecognizer = "breeds/";
  var breed = url.slice(url.indexOf(breedRecognizer) + breedRecognizer.length, lastIndexOfSlash).split("-").reduce(function (a, v) {
    return "" + a + v.replace(/^\w/, function (c) {
      return c.toUpperCase();
    }) + " ";
  }, "").trim();

  return { id: id, breed: breed, url: url };
}