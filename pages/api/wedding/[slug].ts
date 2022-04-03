import nextConnect from 'next-connect';
import getWeddingBySlug from 'models/getWeddings';

const weddingApi = nextConnect()
  .get(async (req, res) => {
    try {
      const {
        // @ts-ignore
        query: { slug },
      } = req;

      const response = await getWeddingBySlug(slug);
      // @ts-ignore
      res.status(200).json(response);
    } catch (e) {
      // @ts-ignore
      res.status(500).json({
        error: true,
        message: e,
      });
    }
  })
  .patch(async () => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default weddingApi;
