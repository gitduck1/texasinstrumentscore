import input from '../../input.js';

export default function hardDrop(arg) {
  if (input.getGamePress('hardDrop')) {
    arg.piece.sonicDrop();
    if (arg.piece.breakHoldingTimeOnSoftDrop) {
      arg.piece.holdingTime = arg.piece.holdingTimeLimit;
    }
  }
}
