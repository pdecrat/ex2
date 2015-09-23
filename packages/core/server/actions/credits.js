Actions.giveCredits = function (origin, target, params) {
  if (origin._id != target._id) {
    if (origin.character.credits < params.amount) {
      throw new Meteor.Error('not-enough-minerals', 'the target needs more credits');
    } else {
      if (!target.credits) {
        target.credits = params.amount;
      } else {
        target.credits +=  params.amount;
      }
      origin.character.credits -=  params.amount;
    }
  } else {
    throw new Meteor.Error('cannot-credit-yourself', 'the target is the origin');
  }
};

Actions.pay = function(origin, target, params) {
  if (origin.character.credits > params.amount) {
    origin.character.credits -= params.amount;
  } else {
    throw new Meteor.Error('not-enough-credits', "You cannot afford that.");
  }
}
