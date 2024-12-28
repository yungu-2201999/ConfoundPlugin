module.exports = function (...rest) {
  const options = this.getOptions();

  console.log("======================================");
  console.log("OPtions:",options);
  console.log(
    Object.fromEntries(rest[0].split("\n").map((line) => line.split("=")))
  );
  const obj = Object.fromEntries(
    rest[0].split("\n").map((line) => line.split("="))
  );
  console.log("======================================");

  return `export default ${JSON.stringify(obj)}`
};
