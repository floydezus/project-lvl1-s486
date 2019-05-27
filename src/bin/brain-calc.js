#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/calc-game.js';

startGame(getRule, funcQuestion);
