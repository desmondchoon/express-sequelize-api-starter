const request = require('supertest')
const app = require('../app')
describe('Example Test', () => {

  it('check if set up is running', async () => {
    const res = await request(app)
      .get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body.status).toEqual(200)
  })

})