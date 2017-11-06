import HomeScreen from 'containers/Home';
import CreditScore from 'containers/CreditScore';
import Drawings from 'containers/Drawings';
import Recommendations from 'containers/Recommendations';

const pagesModule = {
  pages: {
    HOME: { screen: HomeScreen },
    RECOMMENDATIONS: { screen: Recommendations },
    CREDIT_SCORE: { screen: CreditScore },
    DRAWINGS: { screen: Drawings }
  },
  listing() {
    return Object.keys(this.pages).reduce((memo, page) => {
      const mm = {};
      mm[page] = page;
      return { ...memo, ...mm };
    }, {});
  }
};


export const navigation = pagesModule.pages;
export default pagesModule.listing();
