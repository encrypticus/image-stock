import { pixabayConnector } from '../../utils/pixabay-connector';

export default async (req, res) => {
  const { query, mediaType, ...options } = req.body;
  const perPage = 40;

  try {
    const data = await pixabayConnector.searchMedia({ query, options, mediaType });
    const { totalHits } = data;
    const maxPage = Math.ceil(totalHits / perPage);
    const { page, ...otherOptions } = options;

    res.statusCode = 200;
    res.json({
      data,
      currentPage: req.body.page,
      maxPage,
      options: otherOptions,
      mediaType,
    });
  } catch (e) {
    console.log(e.message);
  }
};
