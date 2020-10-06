var app = require('../server');
var chai = require('chai');
var request = require('supertest');
var should = chai.should();

describe('Get initial songData', () => {
  it('Should GET songData associated with songID = 1', (done) => {
    request(app)
      .get('/songdata/1')
      .set('Accept', 'application/json')
      // .expect('Content-Type', "text/html; charset=utf-8")
      .expect((res) => {
        res.body.songID.should.be.eql(1);
      })
      .expect(200, done);
  })
})