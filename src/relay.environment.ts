import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';
import AuthModel from 'src/models/auth/AuthModel';
import { AuthRelayModel } from 'src/models/auth/AuthRelayModel';

function fetchQuery(operation: RequestParameters, variables: Variables) {
  const authModel: AuthModel = new AuthRelayModel();
  const token = authModel.getToken();
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
