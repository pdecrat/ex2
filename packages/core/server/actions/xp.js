Actions.getXp = function(origin, target, params) {
  if (origin.xp)
    origin.xp += params.xp;
  else
    origin.xp = params.xp;
}
