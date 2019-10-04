async function feed(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { address_contains: args.filter },
        ],
    } : {};

    const bathrooms = await context.prisma.bathrooms({
        where,
        skip: args.skip,
        first: args.first,
    });

    const count = await context.prisma
        .bathroomsConnection({
            where,
        })
        .aggregate()
        .count()
    
    return {
        bathrooms,
        count,
    };
}

module.exports = {
    feed,
}