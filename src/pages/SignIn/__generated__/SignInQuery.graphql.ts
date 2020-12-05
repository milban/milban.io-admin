/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignInInput = {
    userId: string;
    password: string;
};
export type SignInQueryVariables = {
    input: SignInInput;
};
export type SignInQueryResponse = {
    readonly signIn: string | null;
};
export type SignInQuery = {
    readonly response: SignInQueryResponse;
    readonly variables: SignInQueryVariables;
};



/*
query SignInQuery(
  $input: SignInInput!
) {
  signIn(input: $input)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "signIn",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "305bda222171928d2d39db922e331c46",
    "id": null,
    "metadata": {},
    "name": "SignInQuery",
    "operationKind": "query",
    "text": "query SignInQuery(\n  $input: SignInInput!\n) {\n  signIn(input: $input)\n}\n"
  }
};
})();
(node as any).hash = 'ef972d4191875f7552a1a0559e0721ec';
export default node;
