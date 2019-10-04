function postedBy(parent, args, context) {
    return context.prisma.bathroom({ id: parent.id }).postedBy();
}

function reviews(parent, args, context) {
    return context.prisma.bathroom({ id: parent.id }).reviews();
}

module.exports = {
    postedBy,
    reviews,
}