function bathrooms(parent, args, context) {
    return context.prisma.user({ id: parent.id }).bathrooms();
}

function reviews(parent, args, context) {
    return context.prisma.user({ id: parent.id }).reviews();
}

module.exports = {
    bathrooms,
    reviews,
}