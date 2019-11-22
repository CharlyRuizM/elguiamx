const assert = require('assert');
const proxyquire = require('proxyquire');

const { placesMock, PlacesServiceMock } = require('../utils/mocks/places.js');
const testServer = require('../utils/testServer');

describe('routes - places', function() {
  const route = proxyquire('../routes/places', {
    '../services/places': PlacesServiceMock
  });

  const request = testServer(route);
  describe('GET /places', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/places').expect(200, done);
    });

    it('should respond with the list of places', function(done) {
      request.get('/api/places').end((err, res) => {
        assert.deepEqual(res.body, {
          data: placesMock,
          message: 'places listed'
        });

        done();
      });
    });
  });
});
