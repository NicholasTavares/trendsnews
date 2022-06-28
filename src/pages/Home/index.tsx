import React from 'react';
import {api} from '../../services/api';
import {Container, Describe} from './styles';

interface IMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

interface IResult {
  slug_name: string;
  section: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  des_facet: string[];
  multimedia: IMultimedia[];
}

interface IResponse {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: IResult[];
}

export const Home: React.FunctionComponent = () => {
  const [artsArticle, setArtsArticle] = React.useState<IResponse>();

  React.useEffect(() => {
    async function home() {
      const response = await api('arts');
      setArtsArticle(response);
    }

    home();
  }, []);

  return (
    <Container>
      {artsArticle &&
        artsArticle.results.map(article => (
          <Describe key={article.slug_name}>{article.title}</Describe>
        ))}
    </Container>
  );
};
