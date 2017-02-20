import { Response } from 'ember-cli-mirage';
import GetShorthandRouteHandler from 'ember-cli-mirage/route-handlers/shorthands/get';
import PostShorthandRouteHandler from 'ember-cli-mirage/route-handlers/shorthands/post';
import PutShorthandRouteHandler from 'ember-cli-mirage/route-handlers/shorthands/put';

function authenticated(request) {
  let authToken = request.requestHeaders['Authorization'];
  return authToken === 'Token VALID';
}

const shorthand = {
  get: GetShorthandRouteHandler,
  post: PostShorthandRouteHandler,
  put: PutShorthandRouteHandler,
  patch: PutShorthandRouteHandler,
};

function authReq(method, server) {
  return function(path, callback) {
    server[method](path, function(schema, request) {
      if (authenticated(request)) {
        if (callback) {
          return callback(schema, request);
        } else {
          let handler = new shorthand[method](
            schema,
            this.serializerOrRegistry,
            null,
            path,
            {}
          );
          return handler.handle(request);
        }
      } else {
        return unauthorized();
      }
    });
  };
}

function unauthorized() {
  return new Response(401, {}, {
    errors: [{
      "status": 401,
      "source": { "pointer": "authorization" },
      "title":  "Unauthorized",
      "detail": "Authorization Invalid"
    }]
  });
}

function buildAuth(server) {
  return {
    get: authReq('get', server),
    post: authReq('post', server),
    put: authReq('put', server),
    patch: authReq('patch', server),
  };
}

export {
  buildAuth,
  unauthorized,
  authenticated
};
