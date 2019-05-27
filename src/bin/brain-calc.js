#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/calc-game';

startGame(getRule, funcQuestion);
