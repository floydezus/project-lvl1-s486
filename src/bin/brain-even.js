#!/usr/bin/node
import startGame from '..';
import { getRule, funcQuestion } from '../games/even-game';

startGame(getRule, funcQuestion);
