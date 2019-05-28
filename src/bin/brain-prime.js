#!/usr/bin/node
import startGame from '..';
import { gameDescription, getQuestionAndAnswer } from '../games/prime-game';

startGame(gameDescription, getQuestionAndAnswer);
