import { useEffect } from 'react';
import StyledContacts from './StyledContacts';

const Contacts = () => {
  useEffect(() => {
    document.title = 'Contacts - Yummy!';

    return () => {
      document.title = 'Yummy!';
    };
  }, []);

  return (
    <StyledContacts>
      <h2>Thanks for visiting Yummy!</h2>
      <p>
        Here is mentioned all of the links to external API's, developers and
        illustrators
      </p>
      <h3>
        Illustrations: <a href="https://popsy.co/illustrations">Popsy.co</a>
      </h3>
      <h3>
        Recipes API: <a href="https://rapidapi.com/apidojo/api/tasty/">Tasty</a>
      </h3>
      <h3>
        My GitHub: <a href="https://github.com/meliphyra-ux">meliphyra-ux</a>
      </h3>
    </StyledContacts>
  );
};

export default Contacts;
