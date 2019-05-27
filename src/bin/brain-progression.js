#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/progression-game.js';

startGame(getRule, funcQuestion);
