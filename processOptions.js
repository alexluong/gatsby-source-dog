"use strict";

var fetchImageByBreed = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(breed) {
    var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var response, _response, status, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            response = void 0;

            if (random) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return axios.get(URL + "/breed/" + breed + "/images");

          case 5:
            response = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.next = 10;
            return axios.get(URL + "/breed/" + breed + "/images/random");

          case 10:
            response = _context2.sent;

          case 11:
            _response = response, status = _response.status, data = _response.data;
            return _context2.abrupt("return", status === 404 ? [] : data.message);

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            throw new Error("Couldn't fetch \"" + breed + "\" images. Please check to see if your dog breed is available: https://dog.ceo/dog-api/documentation/");

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 15]]);
  }));

  return function fetchImageByBreed(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = require("axios");

var URL = "https://dog.ceo/api";

exports.processBreedsOption = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
    var fetched, list, image, listResponse, number, _ref2, status, imageData;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (option) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", { fetched: false });

          case 2:
            fetched = false;
            list = null;
            image = null;

            // Fetch list of dog breeds

            if (!option.list) {
              _context.next = 17;
              break;
            }

            fetched = true;

            _context.prev = 7;
            _context.next = 10;
            return axios.get(URL + "/breeds/list/all");

          case 10:
            listResponse = _context.sent;

            list = listResponse.data.message;
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            throw new Error("Couldn't fetch list of all dog breeds.");

          case 17:
            if (!(option.random && option.random.number !== 0)) {
              _context.next = 33;
              break;
            }

            fetched = true;

            number = option.random.number;

            if (typeof number !== "number" || number < 0) {
              number = 1;
            }

            _context.prev = 21;
            _context.next = 24;
            return axios.get(URL + "/breeds/image/random/" + number);

          case 24:
            _ref2 = _context.sent;
            status = _ref2.status;
            imageData = _ref2.data;


            image = status === 404 ? [] : imageData.message;
            _context.next = 33;
            break;

          case 30:
            _context.prev = 30;
            _context.t1 = _context["catch"](21);
            throw new Error("Couldn't fetch random dog images.");

          case 33:
            return _context.abrupt("return", { fetched: fetched, list: list, image: image });

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[7, 14], [21, 30]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.processBreedOption = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(option) {
    var images;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (option) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", { fetched: false });

          case 2:
            if (!(typeof breed === "string")) {
              _context3.next = 6;
              break;
            }

            _context3.next = 5;
            return fetchImageByBreed(breed.toLowerCase());

          case 5:
            images = _context3.sent;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}();