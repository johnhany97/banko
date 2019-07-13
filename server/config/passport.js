import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import User from '../models/User';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

const setup = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User
        .findById(jwtPayload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => {
          console.log(err);
          return done(null, false);
        });
    })
  );
};

export default setup;
