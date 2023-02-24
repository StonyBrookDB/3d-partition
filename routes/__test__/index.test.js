const app = require('../../app');
const request = require('supertest');
const data = require('../test-registration.json')

describe('POST /get-collisions', () => {
  it('should get the collisions ', async () => {
    const res = await request('https://pfn8zf2gtu.us-east-2.awsapprunner.com')
    .post('/get-collisions')
    .send(JSON.stringify(data));

    expect(res.statusCode).toEqual(200);
  });

  
});
