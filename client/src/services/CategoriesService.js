import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async ListCategories() {
    const categories = await this.httpClient.get('/categories');

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();