import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'src/relay.environment';
import { PostsByCursorPageQuery } from 'src/pages/PostsByCursorPage/__generated__/PostsByCursorPageQuery.graphql';
import PostsByCursor from 'src/components/post/PostsByCursor';

const PostsByCursorPage: React.FC = () => {
  return (
    <QueryRenderer<PostsByCursorPageQuery>
      environment={environment}
      query={graphql`
        query PostsByCursorPageQuery($count: Int!, $cursor: ID) {
          postsByCursor {
            ...PostsByCursor_postsByCursorNode
              @arguments(count: $count, cursor: $cursor)
          }
        }
      `}
      variables={{
        count: 2,
      }}
      render={({ props, error }) => {
        if (error) {
          return <p>error...</p>;
        } else if (props) {
          return <PostsByCursor postsByCursorNode={props.postsByCursor} />;
        } else {
          return <p>loading...</p>;
        }
      }}
    />
  );
};

export default PostsByCursorPage;
