#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/progression-game';

startGame(getRule, funcQuestion);
