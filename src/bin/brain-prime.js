#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/prime-game.js';

startGame(getRule, funcQuestion);
