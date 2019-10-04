function createdBy(parent, args, context) {
    return context.prisma.review({ id: parent.id }).createdBy();
}

function bathroom(parent, args, context) {
    return context.prisma.review({ id: parent.id }).bathroom();
}

module.exports = {
    createdBy,
    bathroom,
}