function bathroom(parent, args, context) {
    return context.prisma.bookmark({ id: parent.id }).bathroom();
}

function user(parent, args, context) {
    return context.prisma.bookmark({ id: parent.id }).user();
}

module.exports = {
    bathroom,
    user,
}