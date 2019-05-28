#!/usr/bin/node
import startGame from '..';
import { gameDescription, getQuestionAndAnswer } from '../games/progression-game';

startGame(gameDescription, getQuestionAndAnswer);
