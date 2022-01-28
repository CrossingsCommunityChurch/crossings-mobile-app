import gql from 'graphql-tag';

export default gql`
  query allEvents {
    allEvents {
      id
      htmlContent
      title
      start
      end
      location
      coverImage {
        sources {
          uri
        }
      }
    }
    allGroups {
      id
      htmlContent
      title
      location
      start
      end
      coverImage {
        sources {
          uri
        }
      }
    }
  }
`;
