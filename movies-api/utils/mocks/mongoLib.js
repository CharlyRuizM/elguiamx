const sinon = require('sinon');

const { placesMock, filteredPlacesMock } = require('./places');

const getAllStub = sinon.stub();
getAllStub.withArgs('places').resolves(placesMock);

const tagQuery = { tags: { $in: ['Restaurant'] } };
getAllStub.withArgs('places', tagQuery).resolves(filteredPlacesMock('Restaurant'));

const createStub = sinon.stub().resolves(placesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};
