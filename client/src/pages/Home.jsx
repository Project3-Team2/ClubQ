import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMERS } from '../utils/queries';

const HomePage = () => {
    // Scroll to top 
    useEffect(smoothScrollToHomePageTop, []);
    return (
      <>
        
      </>
    );
  };
  
  export default HomePage;