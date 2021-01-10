import React from 'react';
import {
  createPaginationContainer,
  graphql,
  RelayPaginationProp,
} from 'react-relay';
import { PostsByCursor_postsByCursorNode } from 'src/components/post/PostsByCursor/__generated__/PostsByCursor_postsByCursorNode.graphql';
import Button from 'src/components/common/Button';

interface PostsByCursorProps {
  postsByCursorNode: PostsByCursor_postsByCursorNode;
  relay: RelayPaginationProp;
}

const PostsByCursor: React.FC<PostsByCursorProps> = ({
  postsByCursorNode,
  relay,
}) => {
  const loadMore = () => {
    if (relay.isLoading()) {
      return;
    }
    relay.loadMore(2, (error) => {
      console.log(error);
    });
  };
  return (
    <div>
      <div>
        {postsByCursorNode.posts?.edges.map((post) => (
          <div key={post?.node?.id}>
            <h3>{post?.node?.title}</h3>
            <h4>{post?.node?.author?.username}</h4>
          </div>
        ))}
      </div>
      <Button onClick={loadMore}>다음</Button>
    </div>
  );
};

export default createPaginationContainer<PostsByCursorProps>(
  PostsByCursor,
  {
    postsByCursorNode: graphql`
      fragment PostsByCursor_postsByCursorNode on PostsByCursorNode
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 3 }
        cursor: { type: "ID" }
      ) {
        id
        posts(first: $count, after: $cursor)
          @connection(key: "PostsByCursor_posts") {
          edges {
            cursor
            node {
              id
              title
              author {
                username
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.postsByCursorNode && props.postsByCursorNode.posts;
    },
    getVariables: (props, { count, cursor }) => {
      return {
        count,
        cursor,
      };
    },
    query: graphql`
      query PostsByCursorPaginationQuery($count: Int!, $cursor: ID) {
        postsByCursor {
          ...PostsByCursor_postsByCursorNode
            @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  },
);
