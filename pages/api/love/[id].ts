import nextConnect from 'next-connect';
import getLove from 'models/getLove';

const getPagination = (page: number, size = 5) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to, page };
};

const getWallOfLove = nextConnect()
  .get(async (req, res) => {
    try {
      const {
        // @ts-ignore
        query: { id, page, size },
      } = req;

      const pagination = getPagination(Number(page), Number(size));

      const response = await getLove(Number(id), pagination);

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

export default getWallOfLove;
