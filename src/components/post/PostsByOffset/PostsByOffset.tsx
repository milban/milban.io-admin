import React, { useState } from 'react';
import { createRefetchContainer, graphql, RelayRefetchProp } from 'react-relay';
import Button from 'src/components/common/Button';
import { PostsByOffset_node } from 'src/components/post/PostsByOffset/__generated__/PostsByOffset_node.graphql';
import { PostsPageQueryVariables } from 'src/pages/PostsPage/__generated__/PostsPageQuery.graphql';

interface PostsByOffsetProps {
  node: PostsByOffset_node;
  relay: RelayRefetchProp;
}

const PostsByOffset: React.FC<PostsByOffsetProps> = ({ node, relay }) => {
  const [
    refetchVariables,
    setRefetchVariable,
  ] = useState<PostsPageQueryVariables>();
  const onClickRefetch = (): void => {
    let _refetchVariables:
      | PostsPageQueryVariables
      | ((
          fragmentVariables: PostsPageQueryVariables,
        ) => PostsPageQueryVariables);

    if (!refetchVariables) {
      _refetchVariables = (fragmentVariables: PostsPageQueryVariables) => {
        const newFragmentVariables = {
          ...fragmentVariables,
          skip: fragmentVariables.take,
        };
        setRefetchVariable(newFragmentVariables);
        return newFragmentVariables;
      };
    } else {
      _refetchVariables = {
        ...refetchVariables,
        skip: (refetchVariables?.take ?? 0) + (refetchVariables?.skip ?? 0),
      };
      setRefetchVariable(_refetchVariables);
    }

    relay.refetch(_refetchVariables, null);
  };

  return (
    <div>
      {node.posts?.edges.map((post) => (
        <div key={post?.node?.id} style={{ marginBottom: '1rem' }}>
          {/*<div>{post?.node?.id}</div>*/}
          <div>{post?.node?.title}</div>
        </div>
      ))}
      <Button appearance="primary" onClick={onClickRefetch}>
        리페치
      </Button>
    </div>
  );
};

export default createRefetchContainer(
  PostsByOffset,
  {
    node: graphql`
      fragment PostsByOffset_node on PostsByOffsetNode
      @argumentDefinitions(skip: { type: "Int" }, take: { type: "Int" }) {
        id
        posts(skip: $skip, take: $take) {
          edges {
            node {
              id
              title
              author {
                id
                username
              }
            }
          }
          pageInfo {
            totalCount
          }
        }
      }
    `,
  },
  graphql`
    query PostsByOffsetRefetchQuery($skip: Int, $take: Int) {
      postsByOffset {
        ...PostsByOffset_node @arguments(skip: $skip, take: $take)
      }
    }
  `,
);
