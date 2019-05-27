#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/gcd-game.js';

startGame(getRule, funcQuestion);
