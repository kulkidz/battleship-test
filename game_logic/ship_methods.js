function checkForShip(player, coordinates) {
  for (let i = 0; i < player.ships.length; i += 1) {
    const ship = player.ships[i];

    const shipPresent = ship.locations.filter(actualCoordinate => (
      (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1])
    ))[0];

    if (shipPresent) {
      return true;
    }
  }

  return false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
