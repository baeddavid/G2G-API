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
async function getClosest(parent, args, context, info) {
    const where = {
        AND: [{
            AND: [
                { lat_lt: args.currentLat + 1 },
                { lng_lt: args.currentLng + 1},
            ]
        }, {
            AND: [
                { lat_gt: args.currentLat - 1 },
                { lng_gt: args.currentLng - 1},
            ]
        }]
    };
    console.log(where)
    const bathrooms = await context.prisma.bathrooms({
        where,
    });

    return {
        bathrooms,
    };
}

module.exports = {
    feed,
    getClosest,
}