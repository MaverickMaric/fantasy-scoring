function calculateScore(player) {
  let sum = 0

  switch (player.position) {
    case 'QB':
      sum += player.stats.passing.yards / 25
      sum += player.stats.passing.touchdowns * 6
      sum += player.stats.passing.interceptions * -3
      sum += player.stats.rushing.yards / 10
      sum += player.stats.rushing.touchdowns * 6
      sum += player.stats.rushing.fumbles * -3
      break
    case 'RB':
    case 'WR':
      sum += player.stats.rushing.yards / 10
      sum += player.stats.rushing.touchdowns * 6
      sum += player.stats.rushing.fumbles * -3
      sum += player.stats.receiving.receptions
      sum += player.stats.receiving.yards / 10
      sum += player.stats.receiving.touchdowns * 6
      sum += player.stats.receiving.fumbles * -3
      sum += player.stats.return.kickreturn.yards / 15
      sum += player.stats.return.kickreturn.touchdowns * 6
      sum += player.stats.return.kickreturn.fumbles * -3
      sum += player.stats.return.puntreturn.yards / 15
      sum += player.stats.return.puntreturn.touchdowns * 6
      sum += player.stats.return.puntreturn.fumbles * -3
      break
    case 'TE':
      sum += player.stats.receiving.receptions
      sum += player.stats.receiving.yards / 10
      sum += player.stats.receiving.touchdowns * 6
      sum += player.stats.receiving.fumbles * -3
      break
    default:
  }

  return sum
}

module.exports = calculateScore
