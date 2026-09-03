const versaoController = require('../../../api/controllers/versao');

describe('Versao Controller', () => {
  // Mock para simular o objeto req e res
  const req = {};
  const res = {
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    delete process.env.VERSAO_API;
  });

  test('get deve retornar JSON com os campos app e versao', async () => {
    const { get } = versaoController();
    await get(req, res);

    expect(res.json).toHaveBeenCalledWith({ app: 'BIA', versao: '4.3.0' });
  });

  test('get deve retornar versao "4.3.0" como fallback quando VERSAO_API não está definido', async () => {
    delete process.env.VERSAO_API;

    const { get } = versaoController();
    await get(req, res);

    expect(res.json).toHaveBeenCalledWith({ app: 'BIA', versao: '4.3.0' });
  });

  test('get deve retornar o valor de VERSAO_API quando a variável de ambiente está definida', async () => {
    process.env.VERSAO_API = '1.0.0';

    const { get } = versaoController();
    await get(req, res);

    expect(res.json).toHaveBeenCalledWith({ app: 'BIA', versao: '1.0.0' });
  });

  test('get deve sempre retornar o campo app com valor "BIA"', async () => {
    process.env.VERSAO_API = '2.0.0';

    const { get } = versaoController();
    await get(req, res);

    const chamada = res.json.mock.calls[0][0];
    expect(chamada).toHaveProperty('app', 'BIA');
    expect(chamada).toHaveProperty('versao', '2.0.0');
  });
});