/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MeshType = "ALL" | "CITRIXSM" | "CONSUL" | "ISTIO" | "KUMA" | "LINKERD" | "NETWORKSM" | "NGINXSM" | "NONE" | "OCTARINE" | "OPENSERVICEMESH" | "TRAEFIK" | "%future added value";
export type Status = "DISABLED" | "ENABLED" | "UNKNOWN" | "%future added value";
export type meshAddonsQueryVariables = {|
  selector?: ?MeshType
|};
export type meshAddonsQueryResponse = {|
  +addons: $ReadOnlyArray<{|
    +type: string,
    +status: ?Status,
  |}>
|};
export type meshAddonsQuery = {|
  variables: meshAddonsQueryVariables,
  response: meshAddonsQueryResponse,
|};
*/


/*
query meshAddonsQuery(
  $selector: MeshType
) {
  addons: getAvailableAddons(selector: $selector) {
    type
    status
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "selector"
  }
],
v1 = [
  {
    "alias": "addons",
    "args": [
      {
        "kind": "Variable",
        "name": "selector",
        "variableName": "selector"
      }
    ],
    "concreteType": "AddonList",
    "kind": "LinkedField",
    "name": "getAvailableAddons",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "meshAddonsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "meshAddonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "314252e7605fba0b066544645d53fbd0",
    "id": null,
    "metadata": {},
    "name": "meshAddonsQuery",
    "operationKind": "query",
    "text": "query meshAddonsQuery(\n  $selector: MeshType\n) {\n  addons: getAvailableAddons(selector: $selector) {\n    type\n    status\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a3dc6f1355047de53ceaa6f27261105';

module.exports = node;
