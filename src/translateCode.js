export default function translateCode(code) {
  return require("./images/" +
    code.condition.icon
      .substr(code.condition.icon.length - 7)
      .replace(".png", ".svg"));
}
