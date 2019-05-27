#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/prime-game';

startGame(getRule, funcQuestion);
