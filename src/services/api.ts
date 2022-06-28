import axios from 'axios';

export const api = async (section: string) =>
  await axios
    .get(
      `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=R72nl9ABYQAGeEWHEU7CdTsENynUqeb7`,
    )
    .then(response => response.data);
