if (process.env.ENV === "production") {
  module.export = require("./configureStore.prod");
} else {
  module.export = require("./configureStore.dev");
}
