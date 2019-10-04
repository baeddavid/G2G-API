function postedBy(parent, args, context) {
    return context.prisma.bathroom({ id: parent.id }).postedBy();
}

function reviews(parent, args, context) {
    return context.prisma.bathroom({ id: parent.id }).reviews();
}

function bookmarks(parent, args, context) {
    return context.prisma.bathroom({ id: parent.id }).bookmarks();
}

module.exports = {
    postedBy,
    reviews,
    bookmarks,
}