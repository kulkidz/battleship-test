/* global describe it */

const { expect } = require("chai");
const { checkForShip } = require("../game_logic/ship_methods");

describe("checkForShip", () => {
  it("returns a boolean value", () => {
    expect(typeof checkForShip({}, [0, 0])).to.equal("boolean");
  });
});
