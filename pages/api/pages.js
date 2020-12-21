import { pixabayConnector } from '../../utils/pixabay-connector';

export default async (req, res) => {
  console.log(req.query.page);
  const currentPage = req.query.page || 1;
  const perPage = 20;

  try {
    const data = await pixabayConnector.searchMedia({ options: { 'page': currentPage } });
    const { totalHits } = data;
    const maxPage = totalHits / perPage;

    res.statusCode = 200;
    res.json({
      data,
      currentPage,
      maxPage,
    });
  } catch (e) {
    console.log(e.message);
  }
};