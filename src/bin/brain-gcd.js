#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/gcd-game';

startGame(getRule, funcQuestion);
