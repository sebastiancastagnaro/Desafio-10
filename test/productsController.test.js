

const request = require('supertest');
const app = require('../src/app');

describe('POST /api/products', () => {
  it('should create a product with valid data', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ title: 'Test Product', price: 50 });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('Product created successfully');
    expect(res.body.product.title).toEqual('Test Product');
  });

  it('should return an error when title and price are missing', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('Title and price are required');
  });
});

describe('GET /api/mockingproducts', () => {
  it('should return 50 mock products', async () => {
    const res = await request(app)
      .get('/api/mockingproducts');

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(50);
  });
});
