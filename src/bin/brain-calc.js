#!/usr/bin/node
import startGame from '..';
import { gameDescription, getQuestionAndAnswer } from '../games/calc-game';

startGame(gameDescription, getQuestionAndAnswer);
