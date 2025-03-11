const User = require('./user');
const pool = require('../config/db');

jest.mock('../config/db');

test('deve criar um usuário', async () => {
  pool.query.mockResolvedValue({
    rows: [{ id: 1, name: 'Teste', email: 'teste@teste.com', role: 'admin' }],
  });
  const user = await User.create({ name: 'Teste', email: 'teste@teste.com', password: '123', role: 'admin' });
  expect(user.name).toBe('Teste');
});