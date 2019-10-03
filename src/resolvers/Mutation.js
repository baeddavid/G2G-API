
async function postBathroom(parent, args, context, info) {
    return context.prisma.createBathroom({
        businessName: args.businessName,
        description: args.description,
        address: args.address,
        lat: args.lat,
        lng: args.lng,
        purchaseRequired: args.purchaseRequired,
        genderNeutral: args.genderNeutral,
        accessibleStall: args.accessibleStall,
        singleOccupancy: args.singleOccupancy
    })
};

async function postReview(parent, args, context, info) {
    return context.prisma.createReview({
        title: args.title,
        description: args.description,
    })
};

async function updateBathroom(parent, args, context, info) {
    return context.prisma.updateBathroom({
        where: { id: `${args.id}`},
        data: {
            businessName: args.businessName,
            description: args.description,
            address: args.address,
            lat: args.lat,
            lng: args.lng,
            purchaseRequired: args.purchaseRequired,
            genderNeutral: args.genderNeutral,
            accessibleStall: args.accessibleStall,
            singleOccupancy: args.singleOccupancy
        }
    });
}

async function updateReview(parent, args, context, info) {
    return context.prisma.updateReview({
        where: { id: `${args.id}`},
        data: {
            title: args.title,
            description: args.description,
        }
    });
}

async function deleteBathroom(parent, args, context, info) {
    return context.prisma.deleteBathroom({ id: `${args.id}` });
}

async function deleteReview(parent, args, context, info) {
    return context.prisma.deleteReview({ id: `${args.id}` });
}

module.exports = {
    postBathroom,
    postReview,
    updateBathroom,
    updateReview,
    deleteBathroom,
    deleteReview,
};