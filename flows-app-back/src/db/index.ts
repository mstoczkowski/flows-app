const FileAsync = require("lowdb/adapters/FileAsync");

const adapter = new FileAsync("mocks/data.json");

export default adapter;
