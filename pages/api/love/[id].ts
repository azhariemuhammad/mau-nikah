import nextConnect from 'next-connect';
import getLove from 'models/getLove';

const getWallOfLove = nextConnect()
  .get(async (req, res) => {
    try {
      console.log({ req });
      const {
        // @ts-ignore
        query: { id },
      } = req;

      const response = await getLove(Number(id));
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
