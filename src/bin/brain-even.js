#!/usr/bin/node
import startGame from '..';
import { gameDescription, getQuestionAndAnswer } from '../games/even-game';

startGame(gameDescription, getQuestionAndAnswer);
