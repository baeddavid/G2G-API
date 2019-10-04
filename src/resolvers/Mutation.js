const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils');

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
        token,
        user,
    };
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({ email: args.email });
    if(!user) throw new Error('No such user found!');

    const valid = await bcrypt.compare(args.password, user.password);
    if(!valid) throw new Error('Wrong Password!');

    const token = jwt.sign({ userId: user.id}, APP_SECRET);
    
    return {
        token,
        userm
    }
}

async function postBathroom(parent, args, context, info) {
    const userId = getUserId(context);
    return context.prisma.createBathroom({
        businessName: args.businessName,
        description: args.description,
        address: args.address,
        lat: args.lat,
        lng: args.lng,
        purchaseRequired: args.purchaseRequired,
        genderNeutral: args.genderNeutral,
        accessibleStall: args.accessibleStall,
        singleOccupancy: args.singleOccupancy,
        postedBy: { connect: { id: userId } },
    })
};

async function postReview(parent, args, context, info) {
    const userId = getUserId(context);
    return context.prisma.createReview({
        title: args.title,
        description: args.description,
        createdBy: { connect: { id: userId } },
        bathroom: { connect: { id: args.bathroomId } },
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

async function bookmark(parent, args, context, info) {
    const userId = getUserId(context);
    const bathroomExists = await context.prisma.$exists.bookmark({
        user: { id: userId },
        bathroom: { id: args.bathroomId },
    });

    if(bathroomExists) throw new Error('Already bookmarked!');

    return context.prisma.createBookmark({
        user: { connect: { id: userId } },
        bathroom: { connect: { id: args.bathroomId } },
    });
}

module.exports = {
    postBathroom,
    postReview,
    updateBathroom,
    updateReview,
    deleteBathroom,
    deleteReview,
    signup,
    login,
    bookmark,
};