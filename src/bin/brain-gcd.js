#!/usr/bin/node
import startGame from '..';
import { gameDescription, getQuestionAndAnswer } from '../games/gcd-game';

startGame(gameDescription, getQuestionAndAnswer);
