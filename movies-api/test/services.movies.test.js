const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { placesMock } = require('../utils/mocks/places');

describe('services - places', function() {
  const PlacesServices = proxyquire('../services/places', {
    '../lib/mongo': MongoLibMock
  });

  const placesService = new PlacesServices();

  describe('when getPlaces method is called', async function() {
    it('should call the getall MongoLib method', async function() {
      await placesService.getPlaces({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of places', async function() {
      const result = await placesService.getPlaces({});
      const expected = placesMock;
      assert.deepEqual(result, expected);
    });
  });
});
