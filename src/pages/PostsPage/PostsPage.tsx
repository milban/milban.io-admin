import React, { useState } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'src/relay.environment';
import PostsByOffset from 'src/components/post/PostsByOffset';
import Button from 'src/components/common/Button';
import { PostsPageQuery } from 'src/pages/PostsPage/__generated__/PostsPageQuery.graphql';

const PostsPage: React.FC = () => {
  const [take, setTake] = useState<number>(2);
  return (
    <QueryRenderer<PostsPageQuery>
      environment={environment}
      query={graphql`
        query PostsPageQuery($skip: Int, $take: Int) {
          postsByOffset {
            ...PostsByOffset_node @arguments(skip: $skip, take: $take)
          }
        }
      `}
      variables={{
        skip: 0,
        take,
      }}
      render={({ props, error }) => {
        if (error) {
          return <div>error</div>;
        } else if (props) {
          return (
            <>
              <PostsByOffset node={props.postsByOffset} />
              <Button onClick={() => setTake((prev) => prev + 1)}>
                take 증가
              </Button>
            </>
          );
        }
        return <div>loading</div>;
      }}
    />
  );
};

export default PostsPage;
