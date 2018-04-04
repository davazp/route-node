import RouteNode from "../modules/RouteNode";
import should from "should";
import omit from "lodash.omit";

function withoutMeta(obj) {
  return omit(obj, "_meta");
}

it("should work!!", () => {
  const node = new RouteNode("", "", [
    new RouteNode("home", "/"),
    new RouteNode("login", "/login"),
    new RouteNode("search", "/search"),
    new RouteNode("subscribe", "/subscribe"),
    new RouteNode("unsubscribe", "/unsubscribe"),

    new RouteNode("products", "/products"),
    new RouteNode("product", "/products/:id"),

    new RouteNode("users", "/users"),
    new RouteNode("currentUser", "/users/:id<(me)|(current)>"),
    new RouteNode("user", "/users/:id"),

    // Comment this!
    new RouteNode("help", "/help")
  ]);

  withoutMeta(node.matchPath("/users/current")).should.eql({
    name: "currentUser",
    params: {
      id: "current"
    }
  });
});
