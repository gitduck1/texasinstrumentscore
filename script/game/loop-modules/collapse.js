export default function collapse(arg, linesToLevel = false, levelLimit = 0) {
  if (
    arg.piece.are >= arg.piece.areLimit + arg.piece.areLimitLineModifier ||
    !arg.piece.inAre && arg.stack.toCollapse.length
  ) {
    arg.stack.collapse(linesToLevel, levelLimit);
  }
}
