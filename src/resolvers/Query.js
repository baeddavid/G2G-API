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
// TODO PUSH TO HEROKU
async function getClosest(parent, args, context, info) {
    const where = {
        AND: [{
            AND: [
                { lat_lt: args.currentLat + .25 },
                { lng_lt: args.currentLng + .25},
            ]
        }, {
            AND: [
                { lat_gt: args.currentLat - .25 },
                { lng_gt: args.currentLng - .25},
            ]
        }]
    };

    const bathrooms = await context.prisma.bathrooms({
        where,
    });

    return {
        bathrooms,
    };
}

async function getUser(parent, args, context, info) {
    const User = await context.prisma.user( {id: args.userId} );
    return User;
}

async function getBathroom(parent, args, context, info) {
    const Bathroom = await context.prisma.bathroom( {id: args.bathroomId } );
    return Bathroom;
}

module.exports = {
    feed,
    getClosest,
    getBathroom,
    getUser,
}