function bathrooms(parent, args, context) {
    return context.prisma.user({ id: parent.id }).bathrooms();
}

function reviews(parent, args, context) {
    return context.prisma.user({ id: parent.id }).reviews();
}

function bookmarks(parent, args, context) {
    return context.prisma.user({ id: parent.id }).bookmarks();
}

module.exports = {
    bathrooms,
    reviews,
    bookmarks,
}