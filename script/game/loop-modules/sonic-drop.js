import input from '../../input.js';

export default function sonicDrop(arg) {
  if (input.getGamePress('hardDrop')) {
    arg.piece.realSonicDrop();
    if (arg.piece.breakHoldingTimeOnSoftDrop) {
      arg.piece.holdingTime = arg.piece.holdingTimeLimit;
    }
  }
}
