export default function linesToLevel(arg, levelLimit) {
    if (
        arg.piece.are >= arg.piece.areLimit + arg.piece.areLimitLineModifier ||
        !arg.piece.inAre && arg.stack.toCollapse.length
    ) {
        arg.stack.linesToLevel(levelLimit);
    }
}